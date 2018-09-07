// pages/survey/drinking_water/drinking_water.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://123.56.40.112:8081/app/smell/training/item/list',
      method: 'POST',
      data: {
        trainingType: '嗅味层次分析法训'
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'JSESSIONID=775BA9B5A1AEEE974B33A07896B31377'
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫result的这个数组中
        that.setData({
          result: res.data,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})