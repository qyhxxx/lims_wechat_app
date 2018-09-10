// pages/survey/drinking_water/drinking_water.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    option: [
      {value: '1', name: '我非常高兴以这种水作为每天的饮用水'},
      {value: '2', name: '我高兴以这种水作为每天的饮用水'},
      {value: '3', name: '我确定可以接受这种水作为每天的饮用水'},
      {value: '4', name: '我能够接受这种水作为每天的饮用水'},
      {value: '5', name: '也许我可以接受这种水作为每天的饮用水'},
      {value: '6', name: '我认为我不能接受这种水作为每天的饮用水'},
      {value: '7', name: '我不能接受这种水作为每天的饮用水'},
      {value: '8', name: '我永远不会接受这种水作为每天的饮用水'},
      {value: '9', name: '不能忍受将这种水放进嘴里，并且我永远不会喝它'}
    ],
    title: ['题目1：您对该水样的评价为：', '题目2：您对该水样的感官评价为：'],
    button_pre: '上一题',
    button_next: '下一题',
    exercise_num: 1,
    radio: 'option-radio-unchecked',
    radio_value: 0,
    post_value: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postData = {
      'trainingType': '嗅味敏感性调查'
    }

    app.functions.authRequest('/app/smell/training/item/list', 'POST', postData, function (res) {
      console.log(res)
    })
    // var that = this
    // wx.request({
    //   url: 'http://123.56.40.112:8081/app/smell/training/item/list',
    //   method: 'POST',
    //   data: {
    //     trainingType: '嗅味层次分析法训'
    //   },
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': 'JSESSIONID=C912AE62EDA3CFF152EF81301E390A5A'
    //   },
    //   success: function (res) {
    //     //将获取到的json数据，存在名字叫result的这个数组中
    //     that.setData({
    //       result: res.data,
    //     })
    //   }
    // })
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

  },

  /**
  *  上一题
  */
  preExercise: function(){
    var radioValue = this.data.radio_value
    if(this.data.exercise_num == 1){
      wx.showToast({
        title: '这是第一道题了',
        icon: 'none'
      })
    }
    else{
      //返回上一题时先将上一次的选中项显示出来
      var lastRadio = this.data.post_value[this.data.exercise_num-2]
      var newOption = this.data.option
      newOption[lastRadio-1].checked = true
      console.log('上一题 ',lastRadio)
      console.log('post value', this.data.post_value)
      this.setData({
        exercise_num: this.data.exercise_num-1,
        option: newOption
      })
    }
  },

  /**
   *  下一题
   */
  nextExercise: function() {
    var radioValue = this.data.radio_value
    if (radioValue == 0) {
      wx.showToast({
        title: '您还没有做出选择',
        icon: 'none'
      })
    }else{
      if (this.data.exercise_num == 2) {
        var that = this 
        wx.showModal({
          title: '这是最后一道题了',
          content: '是否提交调查结果',
          success: function (res) {
            if (res.confirm) {
              that.data.post_value.push(radioValue)
              console.log('data array is hhh ', that.data.post_value)
            }
          }
        })
      }
      else {
        var newOption = this.data.option
        newOption[radioValue-1].checked = false
        //判断下一题是否已经选泽过
        var nextRadio = this.data.post_value[this.data.exercise_num]
        if(nextRadio){
          newOption[nextRadio-1].checked = true
          console.log(nextRadio)
          this.setData({
            option: newOption
          })
        }else{
          for(var i = 0; i < 9; i++){
            newOption[i].checked = false
          }
          this.setData({
            option: newOption
          })
        }
        //判断当前题是否已经被选择过
        var currentRadio = this.data.post_value[this.data.exercise_num-1]
        var postValue = this.data.post_value
        if(!currentRadio){
          this.data.post_value.push(radioValue)
        }else{
          postValue[this.data.exercise_num-1] = radioValue
          this.setData({
            post_value: postValue
          })
        }
        this.setData({
          exercise_num: this.data.exercise_num + 1
        })
      }
      console.log('data array is ', this.data.post_value)
    }
  },

  /**
  *  改变选项时的操作 
  */
  radioChange: function(e) {
    this.setData({
      radio: 'option-radio-checked',
      radio_value: e.detail.value
    })
  }
})