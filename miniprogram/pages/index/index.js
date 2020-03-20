// miniprogram/pages/index/index.js
import { queryList } from '../../service/blog';
Page({

  /**
   * 页面的初始数据
   */
  data: {

    page: 1,
    blogList: [],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.queryList();

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
  onPullDownRefresh: async function () {

    await this.setData({ page: 1 });

    await this.queryList();

    wx.stopPullDownRefresh();

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: async function () {

    await this.setData({
      page: this.data.page + 1
    });

    this.queryList();

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 搜索框搜索
   */
  bindsubmit: function () {

  },

/**
 * 请求数据
 */
queryList: function() {

  const option = {
    page: this.data.page,
  }

  return queryList(option).then(res => {

    this.setData({
      blogList: res.result.data
    });

  });

}

})