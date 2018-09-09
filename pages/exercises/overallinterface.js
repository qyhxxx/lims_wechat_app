// pages/exercises/overallinterface.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '双醚 强度训练 上海南方中心',
    text1: '二甲基三硫醚 强度训练 上海南方中心',
    text2: '2-甲基异莰醇 强度训练 上海南方中心',
    text3: '双(2-氯异丙基) 醚嗅阀值测试-上海南方中心',
    text4: '二甲基二硫醚嗅阀值测试-上海南方中心',
    text5: '己醛嗅阀值测试-上海南方中心',
    text6: '土臭素嗅阀值测试-上海南方中心',
    text7: 'MIB嗅阀值测试-上海南方中心',
    text8: '嗅味强度练习',
    text9: '不同水样辨认',
    text10: '嗅味类型评价',
    text11: '嗅阀值评价',
    text12: 'UPSIT嗅味测试簿调查',
    textGuide8: '方法介绍：此训练课程用以学习如何确定嗅味物质不同浓度条件下的强度等级。训练时，给定测试员一定时间进行闻测记忆指定强度的嗅味样品，再对另外几瓶未知强度等级的样品进行闻测，一强化测试员对嗅味标准品的强度记忆。',
    textGuide10: '方法介绍：至少五人一组，室温下闻测后记下相应味道特征的最佳描述，如果描述有困难时，可参照已知标准品的相应味道，测试结束后再开发讨论，并告知相应的味道。对描述有差异的味道，须经讨论后取得所有测试员对相同物质的共同描述',
    modalHidden: true //是否隐藏对话框
  },

  /**
     * Button点击事件监听
     */
  Button: function (e) {
    this.setData({
      modalHidden: !this.data.modalHidden
    })
  },

  // 开始答题 按钮点击事件(嗅味强度练习)
  confirm8: function () {
    wx.navigateTo({
      url: '/pages/select_onchange/select_onchange_with_intensity/select_onchange_intensity',
    })
    this.setData({
      modalHidden: !this.data.modalHidden,
    })
  },

  // 开始答题 按钮点击事件(嗅味类型评价)
  confirm10: function () {
    wx.navigateTo({
      url: '/pages/select_onchange/select_onchange_without_intensity/select_onchange',
    })
    this.setData({
      modalHidden: !this.data.modalHidden,
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