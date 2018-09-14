// pages/data/report/report.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // msg1: '检测样编号',
    msg2: '检测对象',
    msg3: '供水系统位置',
    msg4: '水温',
    msg5:'地址',
    msg6:'嗅味类型',
    msg7:'二级嗅味类型',
    msg8: '嗅味强度',
    msg9: '添加嗅味类型',
    inputvalue1: null,
    hiddenmodalput1: true,
    voteTitle1: null,
    array1: [],
    array1_fromApi: [],
    index1: 0,
    inputvalue2: null,
    array2: [],
    array2_fromApi: [],
    index2: 0,
    voteTitle2: null,
    hiddenmodalput2: true,
    locationValue: '',
    checkbox: [-1],
    array3: [],
    array3_fromApi: [],
    array20: [],
    array20_fromApi: [],
// 上报用
    smell: [],
    location: {
      address:  null,  //地址
      latitude: 1.1,  //纬度
      longitude: 1.1, //经度
    },
  },

  bindPickerChange1: function (e) {
    var array_temp = this.data.array1
    var temp = array_temp[e.detail.value]
    var temp1 = true
    if (e.detail.value == this.data.array1.length-1) {
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
    if (e.detail.value == this.data.array2.length - 1) {
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
    console.log(this.data.checkbox.length-1,e.detail)
    this.data.smell[this.data.checkbox.length-1]=e.detail
    console.log(this.data.smell)
  },

// form提交
  formSubmit: function (e) {
    var other_object = ''
    if(this.data.index1 == this.data.array1.length-1){
      other_object = this.data.inputvalue1
    }
    var other_ws_loc = ''
    if(this.data.index2 == this.data.array2.length-1){
      other_ws_loc = this.data.inputvalue2
    }
    var postData = {
      "temperature": parseFloat(e.detail.value.temperature),
      "location": this.data.location,
      "object": e.detail.value.object,
      "other_object": other_object,
      "ws_loc": e.detail.value.ws_loc,
      "other_ws_loc": other_ws_loc,
      "smell": this.data.smell
    }
    console.log(postData)
    if(this.data.inputvalue1==''||this.data.inputvalue1==''||e.detail.value.temperature==''||this.data.locationValue==''||this.data.smell==''){
      wx.showToast({
        title: '每一项内容不能为空',
        icon: 'none'
      })
    }else{
      app.functions.authRequest('/app/smell/monitor/report', 'POST', postData, function (res) {
        console.log(res)
      })
    }
  },

// 扫一扫
  // camera: function(){
  //   wx.scanCode({
  //     onlyFromCamera: true,
  //     success: (res) => {
  //       console.log(res)
  //     }
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    app.functions.authRequest('/app/smell/basicdata/list', 'GET', null, function (res) {
      console.log(res)
      that.data.array1_fromApi = res.data.objects
      that.data.array2_fromApi = res.data.ws_locs
      that.data.array3_fromApi = res.data.smell_types
      that.data.array20_fromApi = res.data.smell_types[0].sub_types

      var array_temp = []
      for (var i = 0; i < that.data.array1_fromApi.length; i++){
        array_temp[i] = that.data.array1_fromApi[i].title
      }
      array_temp.push('自定义')

      var array_temp1 = []
      for (var i = 0; i < that.data.array2_fromApi.length; i++) {
        array_temp1[i] = that.data.array2_fromApi[i].title
      }
      array_temp1.push('自定义')

      var array_temp2 = []
      for (var i = 0; i < that.data.array3_fromApi.length; i++) {
        array_temp2[i] = that.data.array3_fromApi[i].title
      }
      array_temp2.push('自定义')

      var array_temp3 = []
      for (var i = 0; i < that.data.array20_fromApi.length; i++) {
        array_temp3[i] = that.data.array20_fromApi[i].title
      }
      array_temp3.push('自定义')

      app.functions.getLocationInfo()
      var loca = wx.getStorageSync('locationInfo').address
      var lati = wx.getStorageSync('locationInfo').latitude
      var longi = wx.getStorageSync('locationInfo').longitude

      that.setData({
        locationValue: loca,
        location: {
          address: loca,  //地址
          latitude: lati,  //纬度
          longitude: longi, //经度
        },
        array1: array_temp,
        array2: array_temp1,
        array3: array_temp2,
        array20: array_temp3,
      })
    })

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
