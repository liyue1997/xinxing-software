// pages/storeInfo/storeInfo.js
var ttool = require('../../utils/ttool.js');
var webjs = require('../../utils/webjs.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [],
    shopid: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    var shopid = wx.getStorageSync('shopid');
    that.setData({
      shopid: shopid
    }, () => {
      webjs.sendPost(
        'api/HdShop/getobj', {
          id: that.data.shopid
        },
        res => {
          that.setData({
            listData: res.data.data,
          })
        },
        res => {
          ttool.showmsg('数据异常')
        }
      )
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})