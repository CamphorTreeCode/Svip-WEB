
var app = getApp();
var pagesize = 0
function selectOrderState(that) {

  wx.request({
    url: app.globalData.appUrl + 'WXLearning/findLearningList',
    data: {
    
      currentPage: ++pagesize
    },
    header: {
      // 'content-type': 'application/x-www-form-urlencoded' // 默认值
      'content-type': 'application/x-www-form-urlencoded', // 默认值
      xcxuser_name: "xcxuser_name"
    },
    method: 'get',
    success: function (res) {



      if (res.data[0].lists.length > 0) {

        var top = that.data.top
        for (var i = 0; i < res.data[0].lists.length; i++) {

          top.push(res.data[0].lists[i])
        }



        console.info(res.data[0].lists, top)
        that.setData({
          top,
          showLoading: true
        })
      }else{
        that.setData({
          bottomText: false,
          showLoading: true
        })
      }
    }
  })
}
Page({
  /**
   * 页面的初始数据 
   */
  data: {

    top: [],
    bottomText: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let scrollHeight = wx.getSystemInfoSync().windowHeight;
    this.setData({
      scrollHeight: scrollHeight
    });
    var that = this;
    pagesize = 0
    selectOrderState(that)


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
    return {
      imageUrl: app.globalData.shareImg,
      // title: app.globalData.shareTitle
    }
  },
  lujing: function (e) {
    console.info(e)
    wx.navigateTo({
      url: '/pages/study/studydetail/studydetail?lid=' + e.currentTarget.dataset.lid+''
    })
  },
  /**
   * 下拉刷新
   */
  lower() {
    this.setData({
      showLoading: false
    })
    console.log(1)
    selectOrderState(this)
  }
})