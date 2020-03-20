const app = getApp();

Component({
  properties: {
    item: {
      type: Object,
      value: {},
    }
  },
  methods: {
    toPostDetail(e) {
      console.info(e, 'blogCard');
      const url = `/pages/detail/detail`;
      app.globalData.detailInfo = e.currentTarget.dataset.item;
      wx.navigateTo({
        url,
      })
    }
  }
})