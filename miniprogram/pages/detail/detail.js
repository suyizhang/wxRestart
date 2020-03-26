// miniprogram/pages/detail/detail.js
import { queryDetail } from '../../service/blog';

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {},
    userInfo: {},
    blogMessage: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    const blogMessage = app.globalData.detailInfo;

    this.setData({
      userInfo: blogMessage.user,
      blogMessage,
    })

    this.queryDetail(blogMessage);

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  queryDetail: async function (option) {
    
    const { fileType, fileID } = option;
    
    const res = await queryDetail({ fileID });

    const wxml = app.towxml(res.result, fileType);

    this.setData({
      article: wxml
    });

  }
})