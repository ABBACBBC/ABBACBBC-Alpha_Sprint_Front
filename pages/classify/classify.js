// pages/classify/classify.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
   jnum:0,
   jsnum:'0',
   vnum:0,
   cnum:0,
   ccnum:0,
   hnum:0,
   pnum:0,
   lnum:0,
   qnum:0,
   mnum:0
    },
    jumpj(){
        wx.redirectTo({
            url: '../classifyResult/classifyResult?cat='+'4',
          })
    },
    jumpjs(){
        wx.redirectTo({
            url: '../classifyResult/classifyResult?cat='+'5',
          })
    },
    jumpv(){
        wx.redirectTo({
            url: '../classifyResult/classifyResult?cat='+'6',
          })
    },
    jumpc(){
        wx.redirectTo({
            url: '../classifyResult/classifyResult?cat='+'7',
          })
    },
    jumpcc(){
        wx.redirectTo({
            url: '../classifyResult/classifyResult?cat='+'8',
          })
    },
    jumph(){
        wx.redirectTo({
            url: '../classifyResult/classifyResult?cat='+'9',
          })
    },
    jumpp(){
        wx.redirectTo({
            url: '../classifyResult/classifyResult?cat='+'10',
          })
    },
    jumpl(){
        wx.redirectTo({
            url: '../classifyResult/classifyResult?cat='+'11',
          })
    },
    jumpq(){
        wx.redirectTo({
            url: '../classifyResult/classifyResult?cat='+'12',
          })
    },
    jumpm(){
        wx.redirectTo({
            url: '../classifyResult/classifyResult?cat='+'13',
          })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.request({
            url: 'http://127.0.0.1:8000/api/article/',
            success:(result)=>{
              console.log(result);
              for (var index in result.data) {
                if(result.data[index].category===5){
                var s=this.data.jsnum;
                s++;
                this.setData({
                    jsnum:s
                })
                }
                if(result.data[index].category===4){
                    var s=this.data.jnum;
                    s++;
                    this.setData({
                        jnum:s
                    })
                    }
                if(result.data[index].category===6){
                     var s=this.data.vnum;
                     s++;
                    this.setData({
                         vnum:s
                     })
                     }
                if(result.data[index].category===7){
                var s=this.data.cnum;
                s++;
                this.setData({
                    cnum:s
                 })
                }
                if(result.data[index].category===8){
                    var s=this.data.ccnum;
                    s++;
                    this.setData({
                        ccnum:s
                 })
                }
                if(result.data[index].category===9){
                    var s=this.data.hnum;
                    s++;
                    this.setData({
                        hnum:s
                    })
                    }
                    if(result.data[index].category===10){
                        var s=this.data.pnum;
                        s++;
                        this.setData({
                            pnum:s
                        })
                        }
                    if(result.data[index].category===11){
                         var s=this.data.lnum;
                         s++;
                        this.setData({
                             lnum:s
                         })
                         }
                    if(result.data[index].category===12){
                    var s=this.data.qnum;
                    s++;
                    this.setData({
                        qnum:s
                     })
                    }
                    if(result.data[index].category===13){
                        var s=this.data.mnum;
                        s++;
                        this.setData({
                            mnum:s
                     })
                    }
                
             }
             console.log(this.data.vnum);
            }
          })
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