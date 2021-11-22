// pages/classifyResult/classifyResult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  classlist:[],
  ca:null
  },
  backTo(){
    
    
    wx.switchTab({
      url: '../classify/classify',
    })
    
  },

  jumpArtical(e){
    var idd=e.currentTarget.dataset.id;
    wx.redirectTo({
        url: '../artical/artical?id='+idd,
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  var cate=options.cat;

  wx.request({
    url: 'http://127.0.0.1:8000/api/article/',
    success:(result)=>{
    var list=[];
    for (var index in result.data) {
    if(cate==result.data[index].category){
    list.push(result.data[index]);
    this.setData({
      classlist:list
  })
    }
    }
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