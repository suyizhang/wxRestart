// miniprogram/pages/me/me.js
import { navigatItem } from '../../utils/utils.js';

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showLogin: false, // 显隐登录框
    userInfo: {},
    a: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    app.checkUserInfo(function (userInfo, isLogin) {

      if (!isLogin) {

        // 未登录弹出登录页面
        that.setData({
          showLogin: true
        })

      } else {

        that.setData({
          userInfo
        });

      }
    });

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

  // /**
  //  * 页面相关事件处理函数--监听用户下拉动作
  //  */
  // onPullDownRefresh: function () {

  // },

  // /**
  //  * 页面上拉触底事件的处理函数
  //  */
  // onReachBottom: function () {

  // },

  // /**
  //  * 用户点击右上角分享
  //  */
  // onShareAppMessage: function () {

  // },

  navigatItem: function (e) {
    return navigatItem(e)
  },

  /**
   * 返回
   */
  navigateBack: function (e) {
    wx.switchTab({
      url: '../index/index'
    })
  },
  
  /**
   * 获取用户头像
   * @param {} e 
   */
  getUserInfo: function (e) {
    console.log(e.detail.userInfo)
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        showLogin: !this.data.showLogin,
        userInfo: e.detail.userInfo
      });
      wx.setStorage({
        key: 'isLogin',
        data: true,
      });
    } else {
      wx.switchTab({
        url: '../index/index'
      })
    }
  },

})