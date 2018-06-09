// pages/svipLogin/svipLogin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    svipName:'',
    password:''
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  formSubmit:function(e){
       console.info('触发事件')
       console.info(e)
       if(e.detail.value.svipName==''){
         wx.showModal({
           title: '提示',
           content: '请输入用户名',
           success: function (res) {
             if (res.confirm) {
               console.log('用户点击确定')
             } else {
               console.log('用户点击取消')
             }
           }
         })
         return false;

       }

       if (e.detail.value.password == '') {
         wx.showModal({
           title: '提示',
           content: '请输入密码',
           success: function (res) {
             if (res.confirm) {
               console.log('用户点击确定')
             } else {
               console.log('用户点击取消')
             }
           }
         })
         return false;
       }
       wx.redirectTo({
         url: '/pages/performance/performance',
       })
  }
})
