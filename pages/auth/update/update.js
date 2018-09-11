const util = require('../../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userData: {},
    showRhinitisYear: '',
    showLastTrainingDate: '',
    birth: '',
    lastTrainingDate: ''
  },

  /**
   * 修改用户信息
   */
  update: function (e) {
    var postData = e.detail.value
    var that = this
    app.functions.authRequest('/app/userinfo/update', 'POST', postData, function (res) {
      wx.showToast({
        title: '修改成功',
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'userData',
      success: function (res) {
        that.setData({
          userData: res.data,
          showRhinitisYear: res.data.rhinitis,
          showLastTrainingDate: res.data.trained,
          birth: util.myFormatTime(new Date(res.data.birth)),
          lastTrainingDate: util.myFormatTime(new Date(res.data.lastTrainingDate))
        })
      }
    })
  },

  changeShowRhinitisYear: function (e) {
    this.setData({
      showRhinitisYear: e.detail.value
    })
  },

  changeShowLastTrainingDate: function (e) {
    this.setData({
      showLastTrainingDate: e.detail.value
    })
  },

  bindBirthChange: function (e) {
    this.setData({
      birth: e.detail.value
    })
  },

  bindlastTrainingDateChange: function (e) {
    this.setData({
      lastTrainingDate: e.detail.value
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