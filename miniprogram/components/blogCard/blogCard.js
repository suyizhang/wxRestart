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
      const id = e.currentTarget.dataset.item._id;
      const url = `/pages/detail/detail?id=${id}`;
      wx.navigateTo({
        url,
      })
    }
  }
})