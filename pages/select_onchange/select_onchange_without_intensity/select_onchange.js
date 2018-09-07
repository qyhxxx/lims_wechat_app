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
    },

    bindMultiPickerChange: function(e) {
        console.log('pickr发送选择改变，携带值为', e.detail.value)
        this.setData({
            multiIndex: e.detail.value
        })
    },
    bindMultiPickerColumnChange: function(e) {
        console.log('修改的列为', e.detail.column, ', 值为', e.detail.value);
        var data = {
            multiArray: this.data.multiArray,
            multiIndex: this.data.multiIndex
        };
        var firstSmellArray =  ['土霉味', '氯味 / 臭氧味', '草味', '腐败味 / 沼泽味', '鱼腥味', '芳香味', '药味', '化学药品', '其他'];
        var secondSmellArray0 =  ['土味', '霉味', '淤泥味'];
        var secondSmellArray1 = ['氯味/臭氧味'];
        var secondSmellArray2 = ['鲜草味', '木材味', '干草味', '烟草味'];
        var secondSmellArray3 = ['腐败味', '腐烂蔬菜味', '臭鸡蛋味'];
        var secondSmellArray4 = ['臭鱼味', '腥味', '鲜鱼味', '藻腥味'];
        var secondSmellArray5 = ['甜味', '水果味', '香味'];
        var secondSmellArray6 = ['药味'];
        var secondSmellArray7 = ['油漆味', '汽油味', '塑料味', '胶水味'];
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
                        data.multiArray[1] = null;
                        
                }
                data.multiIndex[1] = 0;
                break;
            case 1:
                console.log(data.multiIndex);
                break;
        }
        this.setData(data);
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

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