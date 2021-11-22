Page({

    /**
     * 页面的初始数据
     */
    data: {
      data: [
  
        {
          img: "欢迎来到牛码宝宝，好好学习天天向上！！",
          linkurl: "",
          linkname: "",
          starspos: 0,
          back_color: "gold",
          hotlist:[],
          newlist:[],
          runlist:[]
        }
      ],
      broadcast_arr: {
        speed: 2.4, //滚动速度，每秒2.8个字
        font_size: "16", //字体大小(px)
        text_color: "#8a8a8a", //字体颜色
    
  
      }
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
      let ititdata = this.data.data,
        assist = this.data.broadcast_arr,
        this_width = 0,
        spacing = 0,
      speed = (this.data.broadcast_arr.speed * this.data.broadcast_arr.font_size); 
      
      for (let i in ititdata) {
        ititdata[i].starspos = wx.getSystemInfoSync().windowWidth; 
        this_width += ititdata[i].img.length * this.data.broadcast_arr.font_size;
        if (i != ititdata.length - 1) {
          spacing += ititdata[i].starspos
        }
      }
      let total_length = this_width + spacing;
      assist.time = total_length / speed; 
      assist.width_mal = total_length; 
      this.setData({
        broadcast_arr: assist,
        data: ititdata
      })
      wx.request({
        url: 'http://127.0.0.1:8000/api/article/',
        success:(result)=>{
         var rlist=[];
         var hlist=[];
         var nlist=[];
          for (var index in result.data) {
            if('16'==result.data[index].category){
              rlist.push(result.data[index])
              this.setData({
                runlist:rlist
            })
          }
          if('15'==result.data[index].category){
            nlist.push(result.data[index])
            this.setData({
               newlist:nlist
          })
        }
        if('14'==result.data[index].category){
          hlist.push(result.data[index])
          this.setData({
            hotlist:hlist
        })
      }
        }
        console.log(this.data.hotlist)
      }
      })
    },
    jumpClassify(){
      wx.switchTab({
        url: '../classify/classify',
        success: function (e) {
          var page = getCurrentPages().pop();
          if (page == undefined || page == null) return;
          page.onLoad();
        }
      })
  },
  jumpSearch(){
    wx.switchTab({
      url: '../search/search',
      success: function (e) {
        var page = getCurrentPages().pop();
        if (page == undefined || page == null) return;
        page.onLoad();
      }
    })
},
jumpMine(){
  wx.switchTab({
    url: '../personal/personal',
    success: function (e) {
      var page = getCurrentPages().pop();
      if (page == undefined || page == null) return;
      page.onLoad();
    }
  })
},
jumpRank(){
  wx.redirectTo({
      url: '../rank/rank',
    })
},
toArtical(e){
  var idd=e.currentTarget.dataset.id;
    wx.redirectTo({
        url: '../artical/artical?id='+idd,
      })
},
toHot(){
  wx.redirectTo({
      url: '../classifyResult/classifyResult?cat='+'2',
    })
},
toNew(){
  wx.redirectTo({
      url: '../classifyResult/classifyResult?cat='+'3',
    })
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