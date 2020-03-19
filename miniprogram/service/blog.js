export function queryList({ page = 1 }) {
  console.log(page, 'page');
  return wx.cloud.callFunction({
    name: 'blog',
    data: {
      action: 'queryList',
      page,
    }
  })
}

export function queryDetail(option) {
  console.log(option);
  return wx.cloud.callFunction({
    name: 'blog',
    data: {
      action: 'queryDetail',
      ...option
    }
  })
}