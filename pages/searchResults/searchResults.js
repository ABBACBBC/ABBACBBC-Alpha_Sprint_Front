// pages/searchResults/searchResults.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    searchlist:[],
    },
    backTo(){
      wx.switchTab({
        url: '../search/search',
       
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
      if(options.keyword){
        var keyword=options.keyword.toLowerCase();
      }
        console.log(keyword);
        wx.request({
          url: 'http://127.0.0.1:8000/api/article/',
          success:(result)=>{
          var list=[];
          for (var index in result.data) {
          if(result.data[index].title.toLowerCase().indexOf(keyword)!=-1&&result.data[index].category!=2&&result.data[index].category!=3&&result.data[index].category!=16&&result.data[index].category!=15&&result.data[index].category!=14){
          list.push(result.data[index]);
          this.setData({
            searchlist:list
        })
          }
          }
          console.log(this.data.searchlist)
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