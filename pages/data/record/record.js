const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    isEmpty: true,
    page: 1,
    size: 10,
    showLoading: false,
    showLoadingComplete: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.showList()
  },

  showList: function () {
    var postData = {
      page: this.data.page,
      size: this.data.size
    }
    var that = this
    app.functions.authRequest('/app/smell/monitor/list', 'POST', postData, function (res) {
      var content = res.data.content
      if (content.length != 0) {
        that.setData({
          list: that.data.isEmpty ? content : that.data.list.concat(content),
          showLoading: true
        })
        console.log(that.data.list)
      } else {
        that.setData({
          showLoading: false,
          showLoadingComplete: true
        })
      }
    })
  },

  loadMore: function () {
    if (this.data.showLoading && !this.data.showLoadingComplete) {
      this.setData({
        page: this.data.page + 1,
        isEmpty: false
      })
      this.showList()
    }
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