
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  onimg:function(){
    this.setData({
    
    })
  },
  onimg1: function () {
    this.setData({
      fenxiang: "https://www.chuanshoucs.com/ServerImg/2018-05-11/433b8da8-0829-427b-abbd-c725515395ba.png"
    })
  }

})