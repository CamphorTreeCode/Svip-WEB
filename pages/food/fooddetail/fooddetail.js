var app = getApp();
var pagesize = 0
function selectOrderState(that) {
  wx.request({
    url: app.globalData.appUrl + 'WXRecipes/findRecipesList',
    data: {
      recipesTypeId: that.data.recipesTypeId,
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

        var food = that.data.food
        for (var i = 0; i < res.data[0].lists.length; i++) {

          food.push(res.data[0].lists[i])
        }

        console.info(res.data[0].lists, food)
        that.setData({
          food,
          showLoading: true,
          leibie: res.data[0].lists[0].recipesType.recipestypename,
        })
        // 修改头部导航栏标题
        wx.setNavigationBarTitle({
          title: res.data[0].lists[0].recipesType.recipestypename,
        })
      } else {
        that.setData({
          bottomText: false,
          showLoading: true
        })
      }
      //console.info(that.data.leibie+"**************************************************************************")
    }
  })
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leibie:"", 
    food:[],
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
      console.info(options)
      var that = this;
      that.setData({
        recipesTypeId: options.lid
      })
      pagesize = 0
    selectOrderState(that);
    console.info(this.data.leibie)
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
  operation: function (e) {
    var index = e.currentTarget.dataset.id
    console.log(index)

      wx.navigateTo({
        url: '/pages/food/foodpractice/foodpractice?id=' + index
      })
    
  },
  //下拉刷新功能
  lower() {
    console.log(1)
    this.setData({
      showLoading: false
    })
    selectOrderState(this)
    
  }

})