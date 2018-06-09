
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.info(options)
    var that = this;
    
    wx.request({
      url: app.globalData.appUrl + 'WXLearning/findLearningDetails?learningWorldId='+options.lid+'',
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
         xcxuser_name: "xcxuser_name"
      },
      success: function (res) {
        console.info(res)
        that.setData({
          top:res.data,          
        })
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
   * 用户点击右上角分享addShare
   */
  onShareAppMessage: function () {
    var that = this
    return {
      imageUrl: app.globalData.shareImg,
      success(e) {
        console.log(e)
        if (e.errMsg == "shareAppMessage:ok"){
          wx.request({
            url: app.globalData.appUrl + 'WXLearning/addShare',
            data: {
              learningworldid: that.data.top[0].learningworldid,
              learningWorldForward: that.data.top[0].learningWorldForward
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded', // 默认值
              xcxuser_name: "xcxuser_name"
            },
            success: function (res) {
              console.info(res);
              // console.info(res.data[0].franchisedetailscontent);
              that.data.top[0].learningWorldForward = that.data.top[0].learningWorldForward + 1
              that.setData({
                top: that.data.top
              })
              wx.showToast({
                title: '分享成功',
                icon: 'none',
                duration: 1500
              })
            }
          })
        }

      }
    }
  },
  //点赞
  onimg:function(){
    console.log("点赞成功！")
    var that = this
    wx.request({
      url: app.globalData.appUrl + 'WXLearning/addLearningFabulous',
      data: {
        learningworldid: that.data.top[0].learningworldid,
        openId: app.returnOpenId()
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
        xcxuser_name: "xcxuser_name"
      },
      success: function (res) {
        console.info(res);
        // console.info(res.data[0].franchisedetailscontent);
        if (res.data.Fabulous){
    
          that.data.top[0].learningworldfabulous = that.data.top[0].learningworldfabulous + 1
          that.setData({
            top: that.data.top
          })
          wx.showToast({
            title: '点赞成功',
            icon: 'none',
            duration: 1500
          })
        }else{
          wx.showToast({
            title: '你已点过赞了',
            icon: 'none',
            duration: 1500
          })
        }
   

      }
    })
  },
  onimg1: function () {
    this.setData({
      fenxiang: "https://www.chuanshoucs.com/ServerImg/2018-05-11/433b8da8-0829-427b-abbd-c725515395ba.png"
    })
  },
  //预览图片
  previewImg(e) {
    console.log()
    var imgurl = e.target.dataset.img
    var ind = e.target.dataset.ind
    var urlarrpojo = this.data.top[0].learningWorldImg
    var urlarrs = []
    for (var i = 0; i < urlarrpojo.length; i++) {
      urlarrs[i] = urlarrpojo[i].learningworldimgurl
    }
    console.log(urlarrs)
    wx.previewImage({
      current: imgurl, // 当前显示图片的http链接
      urls: urlarrs, // 需要预览的图片http链接列表

    })
  }

})