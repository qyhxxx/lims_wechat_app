// pages/data/report/report.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg1: '检测样编号',
    msg2: '检测对象',
    msg3: '供水系统位置',
    msg4: '水温',
    msg5:'地址',
    msg6:'嗅味类型',
    msg7:'二级嗅味类型',
    msg8: '嗅味强度',
    inputvalue: '',
    hiddenmodalput: true,
    voteTitle: null,
    array: ['龙头水', '沸腾水', '凉开水', '茶水', '水源水', '自定义'],
    index: 0,
  },

  bindPickerChange: function (e) {
    var array1 = this.data.array
    var temp = array1[e.detail.value]
    var temp1 = true
    if (e.detail.value == 5) {
      temp1 = false
    }
    this.setData({
      index: e.detail.value,
      inputvalue: temp,
      hiddenmodalput: temp1
    })
  },

  // 获取对话框的内容
  voteTitle: function (e) {
    this.data.voteTitle = e.detail.value;
  },

  //取消按钮
  cancel: function () {
    this.setData({
      hiddenmodalput: true
    });
  },
  //确认
  confirm: function () {
    this.setData({
      hiddenmodalput: true,
      inputvalue: this.data.voteTitle
    })
  },
  // dialog: function () {
  //   wx.showModal({
  //     title: '提示',
  //     content: '这是一个示例弹窗',
  //     success: function (res) {
  //       console.log(res)
  //       if (res.confirm) {
  //         console.log('用户点击了确定')
  //       } else {
  //         console.log('用户点击了取消')
  //       }
  //     }
  //   })
  // },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

  // 扫一扫
  camera: function(){
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        console.log(res)
      }
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
