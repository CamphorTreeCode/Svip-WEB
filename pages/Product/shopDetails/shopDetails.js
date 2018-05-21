// pages/Product/shopDetails/shopDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	 yanse: [{ name: "白色" }, { name: "白色" }, { name: "白色" }],
   // 轮播图
    movies: [
      { url: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/085af5be-848b-49a6-a734-512c367c21ba.jpg' },
      { url: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/085af5be-848b-49a6-a734-512c367c21ba.jpg' },
      { url: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/085af5be-848b-49a6-a734-512c367c21ba.jpg' }
    ],
    shopDetails:[{
      title: '美国Vitamix s30破壁料理机 多功能家用全自动维他密斯进口辅食机',
      shopImg: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/e97959f2-e435-4b3e-97f5-4a5928b734d0.png',
      discountMoney: 300,
      shopMoneydis: 3499,
      typeImg: 0
      }
    ],
    // 推荐理由
    reasons:[{
      text:'原装进口'  
    },
    {
    text: '超快压榨'
    },
    {
    text: '安全无忧'
    }
    ],
    //图片集合
    imgarr:[
      { img:'https://www.chuanshoucs.com/ServerImg/2018-04-18/8afce70c-49ed-4eef-8e66-db70283ee438.jpg'},
      { img: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/35a9b6a7-20cf-4619-9e36-5a9610069b2a.jpg' },
      { img:'https://www.chuanshoucs.com/ServerImg/2018-04-18/e59a67de-7599-485a-91cd-2e10e2fc6ae8.jpg' } ,
      { img: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/8854bf98-d8a3-4017-b7a3-402c5367bfd1.jpg' },
      { img: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/1cf7e966-7a02-4644-ba09-54ec2e16018a.jpg' },
      { img: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/05a8c75f-ee78-494b-b823-13b83e13a02e.jpg' },
      
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
  swichNav: function (e) {

    var cur = e.currentTarget.dataset.current;
    if (this.data.currentTab == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })

    }
  }
})