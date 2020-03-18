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