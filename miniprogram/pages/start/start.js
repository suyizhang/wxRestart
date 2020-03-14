const app = getApp();

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    angle: 0,
    imageUrl: 'https://picsum.photos/320/504'
  },

  onLoad: function () {

    let timer = setTimeout(() => {
      clearTimeout(timer)
      this.direct()
    }, 1500)

  },

  // onReady: function () {
  //   const res = wx.getSystemInfoSync();
  //   console.info(res, 'res');

  //   const { windowWidth, windowHeight } = res;

  //   // this.getImage(windowWidth, windowHeight);

  //   console.info(app, 'app');
   
  // },


  direct: function() {

    wx.switchTab({
      url: '/pages/index/index',
    });

  },

  // getImage: function(w = '320', h = '504') {

  //   wx.request({

  //     url: `https://picsum.photos/${w}/${h}`,

  //     method: 'GET',

  //     success: function(res) {
  //       console.log(res, 'pcsum');
  //     }
  //   })
  // }

})