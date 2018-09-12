//app.js
var http = require('utils/http.js')
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    //获取位置信息
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log('location: ', res)
        var locationString = res.latitude + "," + res.longitude;
    // TODO
    wx.request({
      url: 'http://apis.map.qq.com/ws/geocoder/v1/',
      data: {
        "key": "UZJBZ-MZVE4-GWHUE-XKVNS-WZDSV-6NB7B",
        "location": locationString
      },
      method: 'GET',
      success: function (r) {
        //输出一下位置信息
        console.log('用户位置信息', r.data.result.address);
        //r.data.result.address获得的就是用户的位置信息，将它保存到一个全局变量上
        getApp().globalData.locationInfo = r.data.result.address;
        //这步是将位置信息保存到本地缓存中，key = value的形式
        try {
          wx.setStorageSync('locationInfo', r.data.result.address)
        } catch (e) {
          console.log(e)
        }
      }
    });
      },
    })

  },
  globalData: {
    userInfo: null,
    locationInfo: null
  },
  functions: {
    authRequest: http.authRequest
  }
})