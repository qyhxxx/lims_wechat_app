function authRequest (api, method, postData, cb) {
  var host = "http://123.56.40.112:8081"
  wx.showLoading({
    title: '',
  })
  wx.getStorage({
    key: 'userData',
    success: function(res) {
      wx.request({
        url: host + api,
        data: postData,
        header: {
          'content-type': 'application/json',
          'cookie': res.data.accessToken
        },
        method: method,
        success: function (res) {
          wx.hideLoading()
          if (res.data.code == 0) {
            return typeof cb == "function" && cb(res.data)
          } else {
            wx.showToast({
              title: res.data.exception,
              icon: 'none'
            })
          }
        },
        fail: function () {
          wx.hideLoading()
          wx.showToast({
            title: '网络连接超时',
            icon: 'none'
          })
        }
      })
    }
  })
}

module.exports.authRequest = authRequest