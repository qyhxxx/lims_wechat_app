//pages/select_onchange/select_onchange_without_intensity/select_onchange.js
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        multiArray: [
            ['土霉味', '氯味/臭氧味', '草味', '腐败味/沼泽味', '鱼腥味', '芳香味', '药味', '化学品味', '其他'],
            ['土味', '霉味', '淤泥味']
        ],
        objectMultiArray: [
            [{
                id: 0,
                name: '土霉味'
            },
            {
                id: 1,
                name: '氯味/臭氧味'
            },
            {
                id: 2,
                name: '草味'
            },
            {
                id: 3,
                name: '腐败味/沼泽味'
            },
            {
                id: 4,
                name: '鱼腥味'
            },
            {
                id: 5,
                name: '芳香味'
            },
            {
                id: 6,
                name: '药味'
            },
            {
                id: 7,
                name: '化学药品'
            },
            {
                id: 8,
                name: '其他'
            }
            ],
            [{
                id: 0,
                name: '土味'
            },
            {
                id: 1,
                name: '霉味'
            },
            {
                id: 2,
                name: '淤泥味'
            }
            ]
        ],
        multiIndex: [0, 0],
        answers: [],
        hiddenmodalput: true,
        voteTitle: null,
        inputValue: '',
        title: [], //题目名称
        exercise_id: [],//题目id
        exercise_num: 0, //当前题目下标
        button_pre: '上一题',
        button_next: '下一题',
    },

    //多项选择器选项更改
    bindMultiPickerChange: function (e) {
        console.log('pickr发送选择改变，携带值为', e.detail.value)
        this.setData({
            multiIndex: e.detail.value
        })
    },

    //根据多项选择器变更的列修改数据
    bindMultiPickerColumnChange: function (e) {
        console.log('修改的列为', e.detail.column, ', 值为', e.detail.value);
        var data = {
            //multiArray是只有两个元素的数组,每个元素都是一个数组;第一个储存一级嗅味,第二个储存二级嗅味
            multiArray: this.data.multiArray,
            //multiIndex是只有两个元素的数组,分别代表两级嗅味的id信息
            multiIndex: this.data.multiIndex,
            //决定是否隐藏可输入对话框,true为隐藏,默认为true
            hiddenmodalput: this.data.hiddenmodalput,
            input: this.data.inputValue,
            //answers是一个储存multiIndex的数组,用来储存用户的选择,
            answers: this.data.answers,
        };
        var firstSmellArray = ['土霉味', '氯味 / 臭氧味', '草味', '腐败味 / 沼泽味', '鱼腥味', '芳香味', '药味', '化学药品', '其他'];
        var secondSmellArray0 = ['土味', '霉味', '淤泥味'];
        var secondSmellArray1 = ['氯味/臭氧味'];
        var secondSmellArray2 = ['鲜草味', '木材味', '干草味', '烟草味'];
        var secondSmellArray3 = ['腐败味', '腐烂蔬菜味', '臭鸡蛋味'];
        var secondSmellArray4 = ['臭鱼味', '腥味', '鲜鱼味', '藻腥味'];
        var secondSmellArray5 = ['甜味', '水果味', '香味'];
        var secondSmellArray6 = ['药味'];
        var secondSmellArray7 = ['油漆味', '汽油味', '塑料味', '胶水味'];
        var secondSmellArray8 = [data.input];
        data.multiIndex[e.detail.column] = e.detail.value;
        switch (e.detail.column) {
            case 0:
                switch (data.multiIndex[0]) {
                    case 0:
                        data.multiArray[1] = secondSmellArray0;
                        break;
                    case 1:
                        data.multiArray[1] = secondSmellArray1;
                        break;
                    case 2:
                        data.multiArray[1] = secondSmellArray2;
                        break;
                    case 3:
                        data.multiArray[1] = secondSmellArray3;
                        break;
                    case 4:
                        data.multiArray[1] = secondSmellArray4;
                        break;
                    case 5:
                        data.multiArray[1] = secondSmellArray5;
                        break;
                    case 6:
                        data.multiArray[1] = secondSmellArray6;
                        break;
                    case 7:
                        data.multiArray[1] = secondSmellArray7;
                        break;
                    case 8:
                        data.hiddenmodalput = false;
                        data.multiArray[1][0] = secondSmellArray8[0];
                        this.setData(data);
                        break;

                }
                data.multiIndex[1] = 0;
                break;
            case 1:
                console.log(data.multiIndex);
                break;
        }
        this.setData(data);
    },

    // 获取对话框的内容
    voteTitle: function (e) {
        this.data.voteTitle = e.detail.value;
    },

    //对话框确认按钮
    comfirm: function () {
        this.setData({
            hiddenmodalput: true,
            inputValue: this.data.voteTitle
        })
    },

    //对话框取消按钮
    cancel: function () {
        this.setData({
            hiddenmodalput: true
        });
    },

    //上一题
    preExercise: function () {
        // var postValue = this.data.post_value
        // var exerciseNum = this.data.exercise_num
        // var lastAnswer = postValue[exerciseNum - 2]

        // if (exerciseNum == 1) {
        //     wx.showToast({
        //         title: '这是第一道题了',
        //         icon: 'none'
        //     })
        // }
        // else {
        //     //上一题必定是已经被选择过的
        //     var newOption = this.data.option
        //     for (var i = 0; i < 9; i++) {
        //         newOption[i].checked = false
        //     }
        //     newOption[lastAnswer].checked = true
        //     this.setData({
        //         exercise_num: exerciseNum - 1,
        //         option: newOption
        //     })
        // }
    },

    //下一题
    nextExercise: function () {
        // var postValue = this.data.post_value
        // var exerciseNum = this.data.exercise_num
        // var currentAnswer = postValue[exerciseNum - 1]

        // if (currentAnswer == -1) {
        //     wx.showToast({
        //         title: '您还没有做出选择',
        //         icon: 'none'
        //     })
        // }
        // else {
        //     if (exerciseNum == 2) {
        //         var that = this
        //         wx.showModal({
        //             title: '这是最后一道题了',
        //             content: '是否提交调查结果',
        //             success: function (res) {
        //                 if (res.confirm) {
        //                     // 数据传至服务器端
        //                     var answer = that.data.final_answer
        //                     for (var i = 0; i < 2; i++) {
        //                         answer[i].id = that.data.exercise_id[i]
        //                         answer[i].num = parseInt(that.data.post_value[i])
        //                     }
        //                     console.log(answer)
        //                     var location = app.globalData.locationInfo.address
        //                     var postData = {
        //                         "trainingItemId": 3,
        //                         "location": location,
        //                         "answers": answer
        //                     }
        //                     app.functions.authRequest('/app/smell/training/end', 'POST', postData, function (res) {
        //                         wx.showToast({
        //                             title: '提交数据成功',
        //                             icon: 'success'
        //                         })
        //                     })
        //                     wx.navigateBack({
        //                         delta: 1
        //                     })
        //                 }
        //             }
        //         })
        //     }
        //     else {
        //         //判断下一题是否已经被选择过
        //         var nextAnswer = postValue[exerciseNum]
        //         var newOption = this.data.option //该变量是为了改变下一题选项的选中(checked)状态
        //         for (var i = 0; i < 9; i++) {
        //             newOption[i].checked = false
        //         }
        //         if (nextAnswer != -1) {
        //             newOption[nextAnswer].checked = true
        //         }
        //         this.setData({
        //             exercise_num: exerciseNum + 1,
        //             option: newOption
        //         })
        //     }
        // }
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