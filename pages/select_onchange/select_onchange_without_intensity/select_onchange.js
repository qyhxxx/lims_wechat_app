//pages/select_onchange/select_onchange_without_intensity/select_onchange.js
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        exercise: [],
        exercise_num: 1,
        post_exercise_id: [],
        post_smell_type: [],
        post_smell_subtype: [],
        final_answer: [],
        transmission_data: [],
        smell: [], //用来储存每一级的嗅味信息
        checkbox: [],
        title: '题目一, 烫烫烫烫锟斤烤烫烫烫烫',
        msg6: '嗅味类型',
        msg7: '二级嗅味类型',
        button_pre: '上一题',
        button_next: '下一题',
    },

    //上一题
    preExercise: function (e) {

    },

    //下一题
    nextExercise: function (e) {

    },

    onMyevent: function (e) {
        this.data.smell[this.data.checkbox.length] = e.detail
      console.log(this.data.smell[0])
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var itemId = wx.getStorageSync('trainItemId')
      console.log('itemId is ', itemId)
      var postData = {
        "trainingItemId": itemId,
        "size": 2
      }
      var that = this
      app.functions.authRequest('/app/smell/training/start', 'POST', postData, function (res) {
        console.log('res ', res.data)
        var postExerciseId = that.data.post_exercise_id
        var postSmellType = that.data.post_smell_type
        var postSmellSubtype = that.data.post_smell_subtype
        var finalAnswer = that.data.final_answer
        var transmissionData = that.data.transmission_data
        for(var i = 0; i < 7; i++){
          postExerciseId.push(res.data.questions[i].id)
          postSmellType.push('')
          postSmellSubtype.push('')
          finalAnswer.push({
            id: -1,
            type: '',
            subtype: ''
          })
          transmissionData.push({
            stem: '',
            your_answer: '',
            correct_answer: '',
            is_correct: false
          })
        }
        that.setData({
          exercise: res.data.questions,
          post_exercise_id: postExerciseId,
          post_smell_type: postSmellType,
          post_smell_subType: postSmellSubtype,
          final_answer: finalAnswer,
          transmission_data: transmissionData
        })
        console.log('data', that.data)
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