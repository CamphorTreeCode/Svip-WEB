// pages/my/my.js

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    operation:[
      { image: '/img/my/fenxiaoshang.png ', text: '成为分销商', path:'/pages/ApplicationToJoin/ApplicationToJoin'},
      { image: '/img/my/kaquan.png  ', text: '我的卡劵', path: '' },
      // { image: '/img/my/yeji.png ', text: '业绩管理', path: '/pages/svipLogin/svipLogin'},
      // { image: '/img/my/dingdan.png ', text: '订单审核', path: '' },
      { image: '/img/my/kefu.png ', text: '联系客服', path: '' }

      ],
    userInfo:[]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getUserInfo({
      success: function (res) {
        console.log(res.userInfo)
        that.setData({
          userInfo: res.userInfo
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
    return {
      imageUrl: app.globalData.shareImg,
      // title: app.globalData.shareTitle
    }
  },
  operation:function(e){
    var path = e.currentTarget.dataset.path
    var index = e.currentTarget.dataset.index
    console.info(index)
    console.info(path)
    
    if(index==0){
      wx.switchTab({
        url: '/pages/ApplicationToJoin/ApplicationToJoin',
        
      })
    }
    if (index == 1) {
      wx.navigateTo({
        url: '/pages/index/cardCenter/cardCenter',

      })
    }
    if (index == 2){
      wx.navigateTo({
        url:path,
      })
    }
    // if (index == 3) {
    //   wx.navigateTo({
    //     url: '/pages/index/cardCenter/cardCenter',
    //     url: '/pages/order/order',
    //   })
    // }


    if(index==3){
      wx.makePhoneCall({
        phoneNumber: '0760-22129456',
        success: function () {
          console.log("拨打电话成功！")
        },
        fail: function () {
          console.log("拨打电话失败！")
        }  
      })

    }
  }
})