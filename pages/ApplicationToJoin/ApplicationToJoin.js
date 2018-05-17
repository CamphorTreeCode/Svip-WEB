//表单验证
function yanzheng(franchiseList) {
  if (franchiseList.franchiseName == '') {
    wx.showToast({
      title: '请填写姓名',
      icon: 'none',
      duration: 2000
    })
    return false;
  }
  if (franchiseList.franchiseConsumption == '') {
    wx.showToast({
      title: '请选择消费平台',
      icon: 'none',
      duration: 2000
    })
    return false;
  }
  if (franchiseList.franchiseOrderNmuber == '') {
    wx.showToast({
      title: '请填写订单号',
      icon: 'none',
      duration: 2000
    })
    return false;
  }
  if (franchiseList.franchisePhone == '') {
    wx.showToast({
      title: '请填写联系电话',
      icon: 'none',
      duration: 2000
    })
    return false;
  }
  if (franchiseList.franchiseApplyReason == '') {
    wx.showToast({
      title: '请填写申请理由',
      icon: 'none',
      duration: 2000
    })
    return false;
  }
}

// pages/ApplicationToJoin/ApplicationToJoin.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    platform: '',
    franchiseDetailsImg: '',
    franchiseDetailsContent: '',


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var franchiseDetails = this
    var franchiser = this
    //申请加盟页面信息
    wx.request({
      url: app.globalData.appUrl + 'WXCentre/findFranchiseDetails',
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
        xcxuser_name: "xcxuser_name"
      },
      success: function (res) {
        console.info(res);
        // console.info(res.data[0].franchisedetailscontent);
        franchiseDetails.setData({
          franchiseDetailsContent: res.data[0].franchisedetailscontent,
          franchiseDetailsImg: res.data[0].franchisedetailsimg,
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
  choosePlatform: function (e) {
    console.info(e.target.dataset.value)
    wx.navigateTo({
      url: '/pages/platform/platform',
    })


  },
  formSubmit: function (e) {
    console.info('触发事件')
    console.info(e.target.dataset)
    var that = this;

    

  },
})
