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
    }
  }
})