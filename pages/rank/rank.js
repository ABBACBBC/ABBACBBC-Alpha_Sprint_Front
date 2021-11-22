// pages/rank/rank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  ranklist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  backTo(){
    wx.switchTab({
      url: '../mainPage/mainPage',
      
    })
  },
  toArtical(e){
    var idd=e.currentTarget.dataset.id;
      wx.redirectTo({
          url: '../artical/artical?id='+idd,
        })
  },

  onLoad: function () {
    wx.request({
      url: 'http://127.0.0.1:8000/api/article/',
      success:(result)=>{
        this.setData({
          ranklist:result.data.sort(this.compare('read_times',false))
        })
        console.log(this.data.ranklist)
    }
    })
  },
  compare: function (property, bol) {
    return function (a, b) {
    var value1 = a[property];
    var value2 = b[property];
    if(bol){
      return value1 - value2;
    }else {
      return value2 - value1;
    }
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