/*
 * @Author: zouwendi 
 * @Date: 2018-05-14 18:56:24 
 * @Last Modified by: zouwendi
 * @Last Modified time: 2018-06-11 18:09:55
 * @Description: 用户管理列表
 */
import React, { Component } from 'react';
import { Form, Row, Col, Input, InputNumber, Button, Modal, Card, Select, DatePicker } from 'antd';
import { connect } from 'dva';
import { Link, routerRedux } from 'dva/router';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import moment from 'moment';
import ListButtonGroup from '../../components/ListButtonGroup';

import styles from '../../styles/list.less';

import List from '../../components/List';
import Operate from '../../components/Oprs';
import { isEmpty } from '../../utils/utils';
import { webConfig, formItemLayout, formItemGrid } from '../../utils/Constant';
import cache from '../../utils/cache';
import Importer from '../../components/Importer';

const FormItem = Form.Item;
const { Option } = Select;
//const routerUrl = cache.keysMenu.HdBaoming;
const routerUrl = '/HdBaoming';
const url = 'HdBaoming';
const rowKey = 'baoming_id';
const DateFormat = 'YYYY-MM-DD';

@connect(({ base }) => ({ base }))
@Form.create()
@List.create()
export default class HdBaomingList extends Component {
  state = {
    scrollY: document.body.clientHeight > 768 ? 430 + document.body.clientHeight - 768 : 430,
    dichandlestatus: [],
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    const { dispatch } = this.props;

    dispatch({
      type: 'base/getByDicType',
      payload: { dicType: 'handlestatus' },
      callback: data => {
        // console.log(data)
        this.setState({
          dichandlestatus: data
        })

      },
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  @Bind()
  @Debounce(200)
  resize() {
    this.setState({
      scrollY: document.body.clientHeight > 768 ? 430 + document.body.clientHeight - 768 : 430,
    });
  }

  handleSearch = e => {
    if (e) e.preventDefault();
    const { form, list } = this.props;
    const { setList } = list;
    form.validateFieldsAndScroll((err, values) => {
      let temp = {};
      if (!isEmpty(values.start_create_date))
        temp = {
          ...temp,
          start_create_date: values.start_create_date.format(DateFormat),
        };
      if (!isEmpty(values.end_create_date))
        temp = {
          ...temp,
          end_create_date: values.end_create_date.format(DateFormat),
        };


      setList({
        current: 1,
        queryMap: { ...values, ...temp },
      });
    });
  };


  handleFormReset = () => {
    const { form, list } = this.props;
    const { setList } = list;
    setList({
      current: 1,
      queryMap: {},
    });
    form.resetFields();
  };

  // 删除后调用list
  hanleDelete = info => {
    const { dispatch, list } = this.props;
    const { setList } = list;
    dispatch({
      type: 'base/delete',
      payload: {
        // 主键id
        id: info[rowKey],
      },
      url,
      callback: () => setList(),
    });
  };

  handleExport = e => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    form.validateFieldsAndScroll((err, values) => {
      const date = {};
      if (values.startDate) date.startDate = values.startDate.format(DateFormat);
      if (values.endDate) date.endDate = values.endDate.format(DateFormat);
      dispatch({
        type: `list/exportExcel`,
        payload: {
          filename: '报名申请.xls',
          queryMap: { ...values, ...date } || {},
        },
        url,
      });
    });
  };


  render() {
    const { form, base } = this.props;
    const { handlestatus } = base;

    const { getFieldDecorator } = form;
    const { hanleDelete } = this;

    const dichandlestatus = this.state.dichandlestatus.data;
    const showConfirm = record => {
      Modal.confirm({
        title: '确定想要删除吗?',
        okType: 'danger',
        okText: '是',
        cancelText: '否',
        onOk() {
          hanleDelete(record);
        },
      });
    };

    const columns = [
      {
        title: '操作',
        key: 'action',
        width: 160,
        align: 'center',
        render: (text, record) => (
          <Row type="flex" justify="space-around">
            <Operate operateName="UPDATE">
              <Link
                to={{
                  pathname: `${routerUrl}/info`,
                  state: { id: record[rowKey] },
                }}
              >
                <Button type="primary" icon="edit" ghost size="small">
                  编辑
                </Button>
              </Link>
            </Operate>
            <Operate operateName="DELETE">
              <Button
                type="danger"
                icon="delete"
                ghost
                size="small"
                onClick={() => showConfirm(record)}
              >
                删除
              </Button>
            </Operate>
          </Row>
        ),
      },
      { title: '报名编码', dataIndex: 'baoming_id', width: 150, sorter: false, },
      { title: '门店简称', dataIndex: 'shop_name', width: 150, sorter: false, },
      { title: '门店全称', dataIndex: 'shop_fullname', width: 150, sorter: false, },
      { title: '门店地址', dataIndex: 'shop_address', width: 150, sorter: false, },
      { title: '联系人', dataIndex: 'shop_contact', width: 150, sorter: false, },
      { title: '门店电话', dataIndex: 'shop_tel', width: 150, sorter: false, },

      {
        title: '处理状态',
        width: 150,
        sorter: false,
        render: (text, record) => {
          if (!dichandlestatus) return <span>{record.handle_status}</span>;
          const temp = dichandlestatus.find(item => item.dicCode === record.handle_status);
          if (!temp) return <span>{record.handle_status}</span>;
          return <span>{temp.dicValue}</span>;
        },
      },
      { title: '处理备注', dataIndex: 'handle_demo', width: 150, sorter: false, },
      { title: '处理人员', dataIndex: 'handle_user_id', width: 150, sorter: false, },
      { title: '创建时间', dataIndex: 'create_date', width: 150, sorter: false, },

    ];

    const listConfig = {
      url: '/api/HdBaoming/queryHdBaomingList', // 必填,请求url
      scroll: { x: 1500, y: this.state.scrollY }, // 可选配置,同antd table
      rowKey, // 必填,行key
      columns, // 必填,行配置
    };

    return (
      <div className={styles.tableListForm}>
        <Card bordered={false} style={{ marginBottom: 24 }} hoverable>
          <Form onSubmit={this.handleSearch} >
            <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
              <Col {...formItemGrid}>  <FormItem {...formItemLayout} label='报名编码'>{getFieldDecorator('baoming_id', { initialValue: this.props.list.queryMap.baoming_id, })(<Input placeholder='请输入' />)} </FormItem> </Col>
              <Col {...formItemGrid}>  <FormItem {...formItemLayout} label='门店简称'>{getFieldDecorator('shop_name', { initialValue: this.props.list.queryMap.shop_name, })(<Input placeholder='请输入' />)} </FormItem> </Col>
              <Col {...formItemGrid}>  <FormItem {...formItemLayout} label='门店全称'>{getFieldDecorator('shop_fullname', { initialValue: this.props.list.queryMap.shop_fullname, })(<Input placeholder='请输入' />)} </FormItem> </Col>
              <Col {...formItemGrid}>  <FormItem {...formItemLayout} label='门店地址'>{getFieldDecorator('shop_address', { initialValue: this.props.list.queryMap.shop_address, })(<Input placeholder='请输入' />)} </FormItem> </Col>
              <Col {...formItemGrid}>  <FormItem {...formItemLayout} label='联系人'>{getFieldDecorator('shop_contact', { initialValue: this.props.list.queryMap.shop_contact, })(<Input placeholder='请输入' />)} </FormItem> </Col>
              <Col {...formItemGrid}>  <FormItem {...formItemLayout} label='门店电话'>{getFieldDecorator('shop_tel', { initialValue: this.props.list.queryMap.shop_tel, })(<Input placeholder='请输入' />)} </FormItem> </Col>
              <Col {...formItemGrid}>
                <FormItem {...formItemLayout} label="处理状态">
                  {getFieldDecorator('handle_status', {
                    initialValue: this.props.list.queryMap.handle_status,
                  })(
                    <Select showSearch allowClear placeholder="处理状态">
                      {dichandlestatus &&
                        dichandlestatus.map(item => {
                          return <Option value={item.dicCode}>{item.dicValue}</Option>;
                        })}
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col {...formItemGrid}>  <FormItem {...formItemLayout} label='处理备注'>{getFieldDecorator('handle_demo', { initialValue: this.props.list.queryMap.handle_demo, })(<Input placeholder='请输入' />)} </FormItem> </Col>
              <Col {...formItemGrid}>  <FormItem {...formItemLayout} label='处理人员'>{getFieldDecorator('handle_user_id', { initialValue: this.props.list.queryMap.handle_user_id, })(<Input placeholder='请输入' />)} </FormItem> </Col>
              <Col {...formItemGrid}>  <FormItem {...formItemLayout} label='创建时间(起始)'>{getFieldDecorator('start_create_date', { initialValue: this.props.list.queryMap.start_create_date ? moment(this.props.list.queryMap.start_create_date) : null, })(<DatePicker format={DateFormat} placeholder='请输入' />)} </FormItem> </Col>
              <Col {...formItemGrid}>  <FormItem {...formItemLayout} label='创建时间(结束)'>{getFieldDecorator('end_create_date', { initialValue: this.props.list.queryMap.end_create_date ? moment(this.props.list.queryMap.end_create_date) : null, })(<DatePicker format={DateFormat} placeholder='请输入' />)} </FormItem> </Col>



            </Row>
            <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
              <Col md={12} sm={24}>
                <ListButtonGroup handleFormReset={this.handleFormReset} routerUrl={routerUrl} dispatch={this.props.dispatch} handleExport={this.handleExport} url={url} handleSearch={this.handleSearch} />
              </Col>
            </Row>

          </Form>
        </Card>
        <List {...listConfig} />
      </div>
    );
  }
}
