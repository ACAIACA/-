//获取应用实例
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  toOrderList: function (el) {
    wx.navigateTo({
      url: '../orderList/orderList?toTab=' + el.target.dataset.totab
    })
    //console.log(el.target.dataset.totab)
  },

  onShareAppMessage: function () {

  },
  toAddr: function (el) {
    wx.navigateTo({
      url: "../shoper/shoper"
    })
  },
 
  toManager:function(el){
    wx.navigateTo({
      url: "../Manager/Manager"
    })
  },
  toHManager: function (el) {
    wx.navigateTo({
      url: "../HManager/HManager"
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
