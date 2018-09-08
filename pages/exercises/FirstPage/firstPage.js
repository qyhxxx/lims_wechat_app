// pages/exercises/FirstPage/firstPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '嗅味敏感性调查',
    text1: '嗅味层次分析法训练',
    text2: '嗅味投诉上报嗅味特征评价'
  },

  /**
     * Button1点击事件监听
     */
  Button1: function (e) {
    wx.navigateTo({
      url: '/pages/exercises/Sensitive/sensitive',
    })
  },

  /**
     * Button2点击事件监听
     */
  Button2: function (e) {
    wx.navigateTo({
      url: '/pages/exercises/overallinterface',
    })
  },

  /**
     * Button3点击事件监听
     */
  Button3: function (e) {
    wx.navigateTo({
      url: '/pages/data/report/report',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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