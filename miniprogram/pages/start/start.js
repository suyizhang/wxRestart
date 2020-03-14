const app = getApp();

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    angle: 0,
  },

  onLoad: function () {

    // let timer = setTimeout(() => {
    //   clearTimeout(timer)
    //   this.direct()
    // }, 2000)

  },

  onReady: function () {
    const res = wx.getSystemInfoSync();
    console.info(res, 'res');
   
  },


  direct: function() {

    wx.switchTab({
      url: '/pages/index/index',
    });

  },
})