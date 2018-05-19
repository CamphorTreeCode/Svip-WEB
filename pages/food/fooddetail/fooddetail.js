var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    leibie:"烘焙类", 
    food:[
      { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/3b4781fb-463c-4b5d-9003-9f13c5f42d9b.png", name: "菠萝夹心面包", ul:"https://www.chuanshoucs.com/ServerImg/2018-05-11/f79b35da-4234-4e9d-a017-868cd429e2eb.png",age:"194",time:"2018-04-16 17:34"},
      { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/c340ffc1-1446-4780-8e9d-235d31fc19a9.png", name: "金蒜罗宋包", ul: "https://www.chuanshoucs.com/ServerImg/2018-05-11/f79b35da-4234-4e9d-a017-868cd429e2eb.png", age: "185", time: "2018-04-16 16:19" },
      { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/3b4781fb-463c-4b5d-9003-9f13c5f42d9b.png", name: "菠萝夹心面包", ul: "https://www.chuanshoucs.com/ServerImg/2018-05-11/f79b35da-4234-4e9d-a017-868cd429e2eb.png", age: "194", time: "2018-04-16 17:34" },
      { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/c340ffc1-1446-4780-8e9d-235d31fc19a9.png", name: "金蒜罗宋包", ul: "https://www.chuanshoucs.com/ServerImg/2018-05-11/f79b35da-4234-4e9d-a017-868cd429e2eb.png", age: "185", time: "2018-04-16 16:19" },
      { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/3b4781fb-463c-4b5d-9003-9f13c5f42d9b.png", name: "菠萝夹心面包", ul: "https://www.chuanshoucs.com/ServerImg/2018-05-11/f79b35da-4234-4e9d-a017-868cd429e2eb.png", age: "194", time: "2018-04-16 17:34" },
      { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/c340ffc1-1446-4780-8e9d-235d31fc19a9.png", name: "金蒜罗宋包", ul: "https://www.chuanshoucs.com/ServerImg/2018-05-11/f79b35da-4234-4e9d-a017-868cd429e2eb.png", age: "185", time: "2018-04-16 16:19" }
    ]
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