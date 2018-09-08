function authRequest (api, postData, cb) {
  var host = "http://123.56.40.112:8081"
  wx.getStorage({
    key: 'userData',
    success: function(res) {
      //console.log("获取存储中的token:" + res.data.accessToken)
      wx.request({
        url: host + api,
        data: postData,
        header: {
          'content-type': 'application/json',
          'cookie': res.data.accessToken
        },
        method: 'POST',
        success: function (res) {
          if (res.data.code == 0) {
            return typeof cb == "function" && cb(res.data)
          } else {
            wx.showToast({
              title: res.data.exception,
              icon: 'none'
            })
          }
        }
      })
    }
  })
}

module.exports = {
  authRequest: authRequest
}