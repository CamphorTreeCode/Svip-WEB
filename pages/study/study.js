Page({

  /**
   * 页面的初始数据
   */
  data: {
      vedio:"/img/study/movie.ogg",
      icon:"/img/study/2.png",
      top:[
        { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/705e081f-a6fb-4bcd-9711-8f1a1092a29d.png", time: "2018-04-17 14:34", name: "淘宝推广教程", detail: "在西方经济学中,分销的含义是建立在销售渠道d额意思,根据著名的营销大师菲利普·科勒特的定义，分销渠道...", url: "/img/study/1.png", yan: "https://www.chuanshoucs.com/ServerImg/2018-05-11/32c140a8-fa11-4179-837e-a406e56ecfd5.png", eys: "129", zan: "78", fabulous:"https://www.chuanshoucs.com/ServerImg/2018-05-11/2c71c135-0189-4520-9bbf-77ebac0b8648.png"}
      ],
      bottom: [
        { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/705e081f-a6fb-4bcd-9711-8f1a1092a29d.png", time: "2018-04-17 14:34", name: "淘宝推广教程", detail: "在西方经济学中,分销的含义是建立在销售渠道额意思,根据著名的营销大师菲利普·科勒特的定义，分销渠道...", url: [{ image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/953c2e96-82e5-4184-8063-4bc7aef2b747.png" }, { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/568ac357-f6b6-4571-bfab-8976018b0427.png" }, { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/11bbdd23-27bb-499b-8793-0093c6c7390a.png" }], yan: "https://www.chuanshoucs.com/ServerImg/2018-05-11/32c140a8-fa11-4179-837e-a406e56ecfd5.png", eys: "129", zan: "78", fabulous: "https://www.chuanshoucs.com/ServerImg/2018-05-11/2c71c135-0189-4520-9bbf-77ebac0b8648.png" }
      ]

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
    
  },
  lujing:function(){
    wx.navigateTo({
      url: '/pages/study/studydetail/studydetail'
    })
  }
})