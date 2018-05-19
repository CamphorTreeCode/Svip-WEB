var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    leibie:"烘焙类", 
    food:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.info(options)
      var that = this;
      wx.request({
        url: app.globalData.appUrl + 'WXRecipes/findRecipesList?recipesTypeId=' + options.lid+'',
        header: {
          'content-type': 'application/x-www-form-urlencoded', // 默认值
          xcxuser_name: "xcxuser_name"
        },

        success: function (res) {
          console.info(res);

         that.setData({
            food : res.data,
         })
         
        }
      })

    // 修改头部导航栏标题
    var da = this.data.leibie;
    wx.setNavigationBarTitle({
      title: da,
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
        url: 'pages/food/foodpractice/foodpractice'
      })
    }
    if (index == 1) {
      wx.navigateTo({
        url: 'pages/food/foodpractice/foodpractice'
      })
    }
    if (index == 2) {
      wx.navigateTo({
        url: 'pages/food/foodpractice/foodpractice'
      })
    }
    if (index == 3) {
      wx.navigateTo({
        url: 'pages/food/foodpractice/foodpractice'
      })
    }
    if (index == 4) {
      wx.navigateTo({
        url: 'pages/food/foodpractice/foodpractice'
      })
    }
    if (index == 5) {
      wx.navigateTo({
        url: 'pages/food/foodpractice/foodpractice'
      })
    }
  }

})