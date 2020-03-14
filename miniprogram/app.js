//app.js
App({
  navigateToLogin: false,
  onLaunch: function () {

    var that = this;

    wx.getNetworkType({
      success(res) {
        const networkType = res.networkType
        if (networkType === 'none') {
          that.globalData.isConnected = false
          wx.showToast({
            title: '当前无网络',
            icon: 'loading',
            duration: 2000
          })
        }
      }
    });

    if (!wx.cloud) {

      console.error('请使用 2.2.3 或以上的基础库以使用云能力');

    } else {

      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        env: 'suyi-b6byh',
        traceUser: true,
      })

      const openid = wx.getStorageSync('openid');

      if (openid) {

        that.globalData.openid = openid;

      } else {

        wx.cloud.callFunction({
          name: 'login',
          data: {},
          success: res => {
            that.globalData.openid = res.result.openid
            wx.setStorageSync('openid', res.result.openid);
          }
        })

      }

    }

    this.updateManager();

  },

  /**
 * 登录验证
 * @param {} cb 
 */
  checkUserInfo: function (cb) {
    let that = this
    if (that.globalData.userInfo) {
      typeof cb == "function" && cb(that.globalData.userInfo, true);
    } else {
      wx.getSetting({
        success: function (res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function (res) {
                that.globalData.userInfo = JSON.parse(res.rawData);
                typeof cb == "function" && cb(that.globalData.userInfo, true);
              }
            })
          } else {
            typeof cb == "function" && cb(that.globalData.userInfo, false);
          }
        }
      })
    }
  },

  /**
 * 小程序主动更新
 */
  updateManager() {
    if (!wx.canIUse('getUpdateManager')) {
      return false;
    }

    const updateManager = wx.getUpdateManager();

    updateManager.onCheckForUpdate(function (res) {
    });

    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '有新版本',
        content: '新版本已经准备好，即将重启',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            updateManager.applyUpdate()
          }
        }
      });
    });

    updateManager.onUpdateFailed(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本下载失败',
        showCancel: false
      })
    });
  },

  globalData: {
    openid: "",
    userInfo: null,
    advert: {},
    lastLoginDate: ""//最后登录时间
  }
})
