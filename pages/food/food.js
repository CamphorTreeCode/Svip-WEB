var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: "0",
    iconImg: [
      { iconImg: "https://www.chuanshoucs.com/ServerImg/2018-05-11/516e646e-0821-4721-98f3-90b04e90802c.png" },
      { iconImg: "https://www.chuanshoucs.com/ServerImg/2018-05-11/5a1e0c1e-4201-4dbe-9866-211f6b4a7a2a.png" },
      { iconImg: "https://www.chuanshoucs.com/ServerImg/2018-05-11/d40898fe-5cc1-45ce-9702-6a0fd0d4b3a3.png" },
      { iconImg: "https://www.chuanshoucs.com/ServerImg/2018-05-11/6b68fbb5-6790-4a98-ada2-c88e6ddbcd08.png" },
      { iconImg: "https://www.chuanshoucs.com/ServerImg/2018-05-11/c8c97fa1-0a3e-49f2-9df2-35a2569719d1.png" },
    ],
    food:[{}],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.appUrl + 'WXRecipes/findRecipesTypeList',
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
        xcxuser_name: "xcxuser_name"
      },

      success: function (res) {
          console.info(res);
          var title = [];
          for (var i = 0; i < res.data.length; i++) {
            title.push(res.data[i])
          }
          console.info(title)
        that.setData({
          food : title
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

  operation: function (e) {
    var index = e.currentTarget.dataset.index
    console.log(index)
    if (index == 0) {
      wx.navigateTo({
        url: '/pages/food/fooddetail/fooddetail'
      })
    }
    if (index == 1) {
      wx.navigateTo({
        url: '/pages/food/fooddetail/fooddetail'
      })
    }
    if (index == 2) {
      wx.navigateTo({
        url: '/pages/food/fooddetail/fooddetail'
      })
    }
    if (index == 3) {
      wx.navigateTo({
        url: '/pages/food/fooddetail/fooddetail'
      })
    }
    if (index == 4) {
      wx.navigateTo({
        url: '/pages/food/fooddetail/fooddetail'
      })
    }




  }

})