var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aboutMeContent: '',
    aboutMeServer: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var aboutMe = this
    wx.request({
      url: app.globalData.appUrl + 'WXCentre/findAboutMeDetails',
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
        xcxuser_name: "xcxuser_name"
      },
      success: function (res) {
        console.info(res);
        console.info(res.data[0].aboutmecontent)
        console.info(res.data[0].aboutmeserver)
        console.info(res.data[0].aboutmeimg)
         aboutMe.setData({

           aboutmecontent: res.data[0].aboutmecontent,
           aboutmeserver: res.data[0].aboutmeserver,
           aboutmeimg: res.data[0].aboutmeimg
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
    
  }
})