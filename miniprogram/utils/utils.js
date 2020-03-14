export function navigatItem (e) {
  const url = e.currentTarget.dataset.url || '/pages/index/index';
  
  wx.navigateTo({
    url,
  });
}