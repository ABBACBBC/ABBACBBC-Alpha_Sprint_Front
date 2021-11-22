Page({
    // 页面的初始数据
    data: {
      inputShowed: false,  //初始文本框不显示内容
      a:null,
      b:null,
      c:null,
      d:null
    },
    toArtical(e){
      var idd=e.currentTarget.dataset.id;
        wx.redirectTo({
            url: '../artical/artical?id='+idd,
          })
    },
    onShow: function () {
      wx.request({
        url: 'http://127.0.0.1:8000/api/article/',
        success:(result)=>{
        var q=Math.ceil(Math.random()*(result.data.length-1));
        var w= Math.ceil(Math.random()*(result.data.length-1));
        this.setData({
          a:result.data[q].title,
          b:result.data[w].title,
          c:result.data[q].id,
          d:result.data[w].id
      })
        }
      })
  },
    // 使文本框进入可编辑状态
    showInput: function () {
      this.setData({
        inputShowed: true   //设置文本框可以输入内容
      });
    },
    // 取消搜索
    hideInput: function () {
      this.setData({
        inputShowed: false
      });
    },
    toSearchResult:function(e){
      console.log('摸了',e)
      wx.redirectTo({
        url: '../searchResults/searchResults?keyword='+e.detail.value
      })
    }
  });
  