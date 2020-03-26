// miniprogram/pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ['手绘', '动漫', '风景'],
    photoList1: [],
    photoList2: [],
    photoList3: [],
    index1: 30,
    index2: 30,
    index3: 30,
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    windowWidth: '',
    windowHeight: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getUpImage(0, this.data.index1);
    this.getWindowScreen();
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

  },

  tabClick: function(e) {
    if (e.currentTarget.id == 1 && this.data.photoList2.length == 0) {
      this.getUpImage(1, this.data.index2);
    }
    if (e.currentTarget.id == 2 && this.data.photoList3.length == 0) {
      this.getUpImage(2, this.data.index3);
    }
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    })
  },

  getUpImage: function(id, index) {
    if (index == 150) {
      index += 30;
    }
    if (index == 240) {
      index += 30;
    }
    let api = '';
    if (id == 0) {
      // api = `https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=%E7%BE%8E%E5%A5%B3%E5%9B%BE%E7%89%87&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=&word=%E7%BE%8E%E5%A5%B3%E5%9B%BE%E7%89%87&s=&se=&tab=&width=&height=&face=&istype=&qc=&nc=1&fr=&cg=girl&pn=${index}&rn=30gsm=96&1534325616197=`;
      api = `https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord+=&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&hd=&latest=&copyright=&word=%E6%89%8B%E7%BB%98&z=&ic=&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&fr=&step_word=%E6%89%8B%E7%BB%98&pn=${index}&rn=30`;
    }
    if (id == 1) {
      // api = `https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=%E6%80%A7%E6%84%9F%E7%BE%8E%E5%A5%B3&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=0&word=%E6%80%A7%E6%84%9F%E7%BE%8E%E5%A5%B3&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&fr=&cg=girl&pn=${index}&rn=30`;
      api = `https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=%E5%8A%A8%E6%BC%AB&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=&hd=&latest=&copyright=&word=%E5%8A%A8%E6%BC%AB&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&fr=&expermode=&force=&pn={index}&rn=30`;
    }
    if (id == 2) {
      api = `https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=%E9%A3%8E%E6%99%AF&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=0&word=%E9%A3%8E%E6%99%AF&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&fr=&pn=${index}&rn=30`
    }
    wx.request({
      url: api,
      header: {
        'Content-Type': 'application/json'
      },
      method: 'get',
      success: (res) => {
        res.data.data.length = 30;
        if (id == 0) {
          let photoList = this.data.photoList1;
          photoList.push(...res.data.data);
          this.setData({
            photoList1: photoList,
            index1: index + 30
          })
        }
        if (id == 1) {
          let photoList = this.data.photoList2;
          photoList.push(...res.data.data);
          this.setData({
            photoList2: photoList,
            index2: index + 30
          })
        }
        if (id == 2) {
          let photoList = this.data.photoList3;
          photoList.push(...res.data.data);
          this.setData({
            photoList3: photoList,
            index3: index + 30
          })
        }
      }
    })
  },

  // 滚动至底部执行函数 还不知道干嘛 先写着
  pullUpLoad: function() {
    let indexId = this.data.activeIndex;
    if (indexId == 0) {
      this.getUpImage(indexId, this.data.index1)
    }
    if (indexId == 1) {
      this.getUpImage(indexId, this.data.index2)
    }
    if (indexId == 2) {
      this.getUpImage(indexId, this.data.index3)
    }
  },
  // 获取屏幕宽高
  getWindowScreen: function() {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      },
    })
  }
})