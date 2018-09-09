// pages/exercises/Sensitive/sensitive.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '饮用水喜好调查',
    text1: '物质浓度-嗅味强度效应曲线',
    text2: 'UPSIT嗅味测试簿调查',
    textGuide: '方法介绍：该方法主要通过测试者提供的喜好得分来评估消费者对饮用水感官特征的态度。',
    modalHidden: true //是否隐藏对话框
  },

  /**
     * drinkingButton点击事件监听
     */
  drinkingButton: function (e) {
    this.setData({
      modalHidden: !this.data.modalHidden
    })
  },
  //确定(实际当做返回按钮来用)按钮点击事件
  modalBindaconfirm: function () {
    wx.navigateTo({
      url: '/pages/survey/drinking_water/drinking_water',
    })
    this.setData({
      modalHidden: !this.data.modalHidden,
    })
  },

  /**
     * materialButton点击事件监听
     */
  materialButton: function (e) {
    //打印所有关于点击对象的信息
    console.log(e);
  },

  /**
     * upsitButton点击事件监听
     */
  upsitButton: function (e) {
    //打印所有关于点击对象的信息
    console.log(e);
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