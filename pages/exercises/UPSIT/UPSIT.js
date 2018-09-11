// pages/exercises/UPSIT/UPSIT.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    option: [
      { value: '0', name: 'A   ' },
      { value: '1', name: 'B   ' },
      { value: '2', name: 'C   ' },
      { value: '3', name: 'D   ' }
    ],
    title: ['题目1：这个气味闻起来最像 ', '题目2：这个气味闻起来最像 '],
    button_pre: '上一题',
    button_next: '下一题',
    exercise_num: 1,
    radio: 'option-radio-unchecked',
    radio_value: -1,
    post_value: [-1, -1],
    exercise_id: [-1, -1], //题目id，再页面onLoad时从服务器端获取数据
    final_answer: [
      {
        id: -1,
        num: -1
      },
      {
        id: -1,
        num: -1
      }
    ]

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