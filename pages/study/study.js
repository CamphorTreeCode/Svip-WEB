
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {

      top:[],
      },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var top = this;
    var lxy = [];
    wx.request({
      url: app.globalData.appUrl + 'WXLearning/findLearningList',
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
        xcxuser_name: "xcxuser_name"
      },
      
      success: function (res) {
        var toplist=[]
        for(var i=0;i<res.data.length;i++){
          toplist.push(res.data[i])
        }
        top.setData({
          top: toplist

        })
        console.info(top.data.top)
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
  lujing:function(){
    wx.navigateTo({
      url: '/pages/study/studydetail/studydetail'
    })
  }
})