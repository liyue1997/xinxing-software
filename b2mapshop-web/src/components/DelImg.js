import React, { PureComponent } from 'react';
import { Icon } from 'antd';

class DelImg extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ position: 'relative', float: 'left' }}>
        <Icon
          onClick={this.props.goDel.bind(this, this.props.imgUrl)}
          size="small"
          type="delete"
          style={{ zIndex: 100, position: 'absolute', right: '15px', top: '5px' }}
        />
        <img
          height="102px"
          width="auto"
          style={{ zIndex: 99, paddingRight: '8px' }}
          src={this.props.imgUrl}
          alt="暂无图片"
        />
      </div>
    );
  }
}

export default DelImg;
