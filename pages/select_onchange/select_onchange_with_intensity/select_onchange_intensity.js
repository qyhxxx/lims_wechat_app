var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        smell: [], //用来储存每一级的嗅味信息
        checkbox: [],
        title: '题目一, 烫烫烫烫锟斤烤烫烫烫烫',
        msg6: '嗅味类型',
        msg7: '二级嗅味类型',
        msg8: '嗅味强度',
        button_pre: '上一题',
        button_next: '下一题',
        index1: 0,
        inputvalue2: null,
        index2: 0,
        //从api中获取的对象数组(包含id和文字)
        smell_types_api: [],
        sub_smell0_api: [],
        sub_smell1_api: [],
        sub_smell2_api: [],
        sub_smell3_api: [],
        sub_smell4_api: [],
        sub_smell5_api: [],
        sub_smell6_api: [],
        sub_smell7_api: [],

        //用来显示的文字数组
        smell_types: [],
        sub_smell0: [],
        sub_smell1: [],
        sub_smell2: [],
        sub_smell3: [],
        sub_smell4: [],
        sub_smell5: [],
        sub_smell6: [],
        sub_smell7: [],
    },

    //上一题
    preExercise: function(e) {

    },

    //下一题
    nextExercise: function(e) {

    },

    onMyevent: function(e) {
        console.log(this.data.checkbox.length - 1, e.detail)
        this.data.smell[this.data.checkbox.length - 1] = e.detail
        console.log(this.data.smell)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var itemId = wx.getStorageSync('trainItemId')
        console.log('itemId is ', itemId)
        var postData = {
            "trainingItemId": itemId,
            "size": 2
        }
        var that = this
        app.functions.authRequest('/app/smell/basicdata/list', 'GET', null, function (res) {
            console.log('res ', res.data)
            that.data.smell_types_api = res.data.smell_types
            that.data.sub_smell0_api = res.data.smell_types[0].sub_types
            that.data.sub_smell1_api = res.data.smell_types[1].sub_types
            that.data.sub_smell2_api = res.data.smell_types[2].sub_types
            that.data.sub_smell3_api = res.data.smell_types[3].sub_types
            that.data.sub_smell4_api = res.data.smell_types[4].sub_types
            that.data.sub_smell5_api = res.data.smell_types[5].sub_types
            that.data.sub_smell6_api = res.data.smell_types[6].sub_types
            that.data.sub_smell7_api = res.data.smell_types[7].sub_types

            //一级嗅味类型数组,追加自定义选项
            var array_temp = []
            for (var i = 0; i < that.data.smell_types_api.length; i++) {
                array_temp[i] = that.data.smell_types_api[i].title
            }
            array_temp.push('自定义')

            //二级类型数组
            var array_temp0 = []
            for (var i = 0; i < that.data.sub_smell0_api.length; i++) {
                array_temp0[i] = that.data.sub_smell0_api[i].title
            }

            var array_temp1 = []
            for (var i = 0; i < that.data.sub_smell1_api.length; i++) {
                array_temp1[i] = that.data.sub_smell1_api[i].title
            }

            var array_temp2 = []
            for (var i = 0; i < that.data.sub_smell2_api.length; i++) {
                array_temp2[i] = that.data.sub_smell2_api[i].title
            }

            var array_temp3 = []
            for (var i = 0; i < that.data.sub_smell3_api.length; i++) {
                array_temp3[i] = that.data.sub_smell3_api[i].title
            }

            var array_temp4 = []
            for (var i = 0; i < that.data.sub_smell4_api.length; i++) {
                array_temp4[i] = that.data.sub_smell4_api[i].title
            }

            var array_temp5 = []
            for (var i = 0; i < that.data.sub_smell5_api.length; i++) {
                array_temp5[i] = that.data.sub_smell5_api[i].title
            }

            var array_temp6 = []
            for (var i = 0; i < that.data.sub_smell6_api.length; i++) {
                array_temp6[i] = that.data.sub_smell6_api[i].title
            }

            var array_temp7 = []
            for (var i = 0; i < that.data.sub_smell7_api.length; i++) {
                array_temp7[i] = that.data.sub_smell7_api[i].title
            }

            that.setData({
                smell_types_api: res.data.smell_types,
                smell_types: array_temp,
                sub_smell0: array_temp0,
                sub_smell1: array_temp1,
                sub_smell2: array_temp2,
                sub_smell3: array_temp3,
                sub_smell4: array_temp4,
                sub_smell5: array_temp5,
                sub_smell6: array_temp6,
                sub_smell7: array_temp7,
            })
        })
        app.functions.authRequest('/app/smell/training/start', 'POST', postData, function(res) {
            console.log('res ', res.data)
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        this.pd = this.selectComponent("#pd");
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})