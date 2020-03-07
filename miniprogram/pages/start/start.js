const app = getApp();

Page({
  data: {
    userInfo: {

    }
  },

    onShow:function(){
    let that = this
    let userInfo = wx.getStorageSync('userInfo')
    if (!userInfo) {
      console.log(12);
    } else {
      that.setData({
        userInfo: userInfo
      })
    }
  },

})