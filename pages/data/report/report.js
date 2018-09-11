// pages/data/report/report.js
const app = getApp()
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
    msg9: '添加嗅味类型',
    inputvalue1: '',
    hiddenmodalput1: true,
    voteTitle1: null,
    array1: ['龙头水', '沸腾水', '凉开水', '茶水', '水源水', '自定义'],
    index1: 0,
    inputvalue2: '',
    array2: ['源水','水厂','出厂水','管网水','水龙头出水','自定义'],
    index2: 0,
    voteTitle2: null,
    hiddenmodalput2: true,
    checkbox: [-1],
    index3: 1,
  },

  bindPickerChange1: function (e) {
    var array_temp = this.data.array1
    var temp = array_temp[e.detail.value]
    var temp1 = true
    if (e.detail.value == 5) {
      temp1 = false
    }
    this.setData({
      index1: e.detail.value,
      inputvalue1: temp,
      hiddenmodalput1: temp1
    })
  },

  bindPickerChange2: function (e) {
    var array_temp = this.data.array2
    var temp = array_temp[e.detail.value]
    var temp1 = true
    if (e.detail.value == 5) {
      temp1 = false
    }
    this.setData({
      index2: e.detail.value,
      inputvalue2: temp,
      hiddenmodalput2: temp1
    })
  },

// 获取对话框的内容
  voteTitle1: function (e) {
    this.data.voteTitle1 = e.detail.value;
  },
  voteTitle2: function (e) {
    this.data.voteTitle2 = e.detail.value;
  },

//取消按钮
  cancel1: function () {
    this.setData({
      hiddenmodalput1: true
    });
  },
  cancel2: function () {
    this.setData({
      hiddenmodalput2: true
    });
  },
//确认
  confirm1: function () {
    this.setData({
      hiddenmodalput1: true,
      inputvalue1: this.data.voteTitle1
    })
  },
  confirm2: function () {
    this.setData({
      hiddenmodalput2: true,
      inputvalue2: this.data.voteTitle2
    })
  },

// 添加嗅味类型
  addSmell: function (){
    var temp = this.data.checkbox;
    temp.push(this.data.checkbox.length);
    this.setData({
      checkbox: temp
    })
  },

  onMyevent: function(e){
    console.log(e)
  },
// form提交
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    // var postData = e.detail.value
    // app.functions.authRequest('/app/...', 'POST',postData, function (res) {
    //   console.log(res)
    // })
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
    this.pd = this.selectComponent("#pd");

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
