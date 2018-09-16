//pages/select_onchange/select_onchange_without_intensity/select_onchange.js
var app = getApp()
var mapCombination = new Map()
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
        post_smell_othertype: [],
        final_answer: [],
        transmission_data: [],
        smell: [], //用来储存每一级的嗅味信息
        checkbox: [],
        title: '题目一, 烫烫烫烫锟斤烤烫烫烫烫',
        msg6: '嗅味类型',
        msg7: '二级嗅味类型',
        button_pre: '上一题',
        button_next: '下一题',

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
        this.data.smell[this.data.exercise_num - 1] = e.detail
        console.log('hhh smell ', this.data.smell[0])
        var postSmellType = this.data.post_smell_type
        var postSmellSubType = this.data.post_smell_subtype
        var postSmellOtherType = this.data.post_smell_othertype
        if (this.data.smell.otherType != null) {
            postSmellOtherType[this.data.exercise_num - 1] = this.data.smell.otherType
            this.setData({
                post_smell_othertype: postSmellOtherType
            })
        } else {
            postSmellType[this.data.exercise_num - 1] = this.data.smell[this.data.exercise_num - 1].type
            postSmellSubType[this.data.exercise_num - 1] = this.data.smell[this.data.exercise_num - 1].sub_type
            this.setData({
                post_smell_type: postSmellType,
                post_smell_subtype: postSmellSubType
            })
        }
        console.log('rrr', this.data)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var itemId = wx.getStorageSync('trainItemId')
        console.log('itemId is ', itemId)
        var postData = {
            "trainingItemId": itemId,
            "size": 7
        }
        var that = this
        app.functions.authRequest('/app/smell/basicdata/list', 'GET', null, function(res) {
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
            array_temp.push('其他')

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
            var postExerciseId = that.data.post_exercise_id
            var postSmellType = that.data.post_smell_type
            var postSmellSubtype = that.data.post_smell_subtype
            var postSmellOthertype = that.data.post_smell_othertype
            var finalAnswer = that.data.final_answer
            var transmissionData = that.data.transmission_data
            for (var i = 0; i < 7; i++) {
                postExerciseId.push(res.data.questions[i].id)
                postSmellType.push(-1)
                postSmellSubtype.push(-1)
                postSmellOthertype.push('')
                finalAnswer.push({
                    id: -1,
                    type: '',
                    subtype: '',
                    otherType: ''
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
                post_smell_subtype: postSmellSubtype,
                final_answer: finalAnswer,
                transmission_data: transmissionData
            })
            console.log('data', that.data)

            // for(var i = 0; i < 7; i++){
            //   mapCombination.set(that.data.exercise[i].type.id, that.data.exercise[i].type.title)
            //   mapCombination.set(that.data.exercise[i].subtype.id, that.data.exercise[i].subtype.title)
            // }
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

    },

    /**
     *  上一题
     */
    preExercise: function() {
        var postSmellType = this.data.post_smell_type
        var postSmellSubType = this.data.post_smell_subtype
        var postSmellOtherType = this.data.post_smell_othertype
        var exerciseNum = this.data.exercise_num
        //var lastAnswer = postOptionId[exerciseNum - 2]

        if (exerciseNum == 1) {
            wx.showToast({
                title: '这是第一道题了',
                icon: 'none'
            })
        } else {
            //上一题必定是已经被选择过的
            // var newExercise = this.data.exercise
            // var newIdx = -1
            // for (var i = 0; i < 4; i++) {
            //   newExercise[exerciseNum - 2].options[i].checked = false
            // }
            // console.log(lastAnswer, '+', (newExercise[0].options))
            // for (var i = 0; i < 4; i++) {
            //   if (newExercise[exerciseNum - 2].options[i].id == lastAnswer) {
            //     newExercise[exerciseNum - 2].options[i].checked = true
            //     newIdx = lastAnswer
            //   }
            // }
            this.setData({
                exercise_num: exerciseNum - 1,
                // exercise: newExercise,
                // idx: newIdx
            })
        }
    },

    /**
     *  下一题
     */
    nextExercise: function() {
        var postSmellType = this.data.post_smell_type
        var postSmellSubType = this.data.post_smell_subtype
        var postSmellOtherType = this.data.post_smell_othertype
        var exerciseNum = this.data.exercise_num

        var currentType = postSmellType[exerciseNum - 1]
        var currentSubType = postSmellSubType[exerciseNum - 1]
        var currentOtherType = postSmellOtherType[exerciseNum - 1]

        if (currentType == -1 && currentSubType == -1 && currentOtherType == null) {
            wx.showToast({
                title: '您还没有做出选择',
                icon: 'none'
            })
        } else {
            if (exerciseNum == 7) {
                var that = this
                wx.showModal({
                    title: '这是最后一道题了',
                    content: '开始计算分数',
                    success: function(res) {
                        if (res.confirm) {
                            // 数据传至服务器端
                            var answer = that.data.final_answer
                            for (var i = 0; i < 7; i++) {
                                answer[i].id = parseInt(that.data.post_exercise_id[i])
                                answer[i].otherType = that.data.post_smell_othertype[i]
                                answer[i].type = that.data.post_smell_type[i]
                                answer[i].sub_type = that.data.post_smell_subtype[i]
                            }
                            //数据传至下一界面（显示做题正确情况以及分数）
                            var transmissionData = that.data.transmission_data
                            //console.log('cnm', transmissionData)
                            for (var i = 0; i < 7; i++) {
                                transmissionData[i].stem = that.data.exercise[i].stem
                                if (that.data.post_smell_othertype[i] != null) {
                                    transmissionData[i].your_answer = that.data.post_smell_othertype[i]
                                }
                                // else{
                                //   transmissionData[i].your_answer = mapCombination.get(parseInt(that.data.post_smell_type[i])) + '->' + mapCombination.get(parseInt(that.data.post_smell_subtype[i]))
                                // }
                                // transmissionData[i].correct_answer = mapCombination.get(that.data.exercise[i].choice)
                                // if (transmissionData[i].your_answer == transmissionData[i].correct_answer) {
                                //   transmissionData[i].is_correct = true
                                // }
                            }
                            console.log('transmission_data', transmissionData)
                            wx.setStorageSync('transmission_data', transmissionData)
                            //console.log(answer)
                            app.functions.getLocationInfo()
                            var location = wx.getStorageSync('locationInfo').address
                            console.log('location test', location)
                            var postData = {
                                "trainingItemId": that.data.train_item_id,
                                "location": location,
                                "answers": answer
                            }
                            app.functions.authRequest('/app/smell/training/end', 'POST', postData, function(res) {
                                console.log(res)
                                wx.setStorageSync('score', res.data.score)
                                wx.showToast({
                                    title: '分数上传成功',
                                    icon: 'success'
                                })
                            })
                            //提交成功后需将当前做题页面出栈，所以使用redirectTo
                            wx.redirectTo({
                                url: '/pages/exercises/completeExercise/completeExercise',
                            })
                        }
                    }
                })
            } else {
                //判断下一题是否已经被选择过
                // var nextAnswer = postOptionId[exerciseNum]
                // var newExercise = this.data.exercise //该变量是为了改变下一题选项的选中(checked)状态
                // var newIdx = -1;
                // for (var i = 0; i < 4; i++) {
                //   newExercise[exerciseNum].options[i].checked = false
                // }
                // if (nextAnswer != -1) {
                //   for (var i = 0; i < 4; i++) {
                //     if (newExercise[exerciseNum].options[i].id == nextAnswer) {
                //       newExercise[exerciseNum].options[i].checked = true
                //       newIdx = nextAnswer
                //     }
                //   }
                // }
                this.setData({
                    exercise_num: exerciseNum + 1,
                    // exercise: newExercise,
                    // idx: newIdx
                })
            }
        }
    },
})