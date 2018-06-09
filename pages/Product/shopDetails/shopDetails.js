// pages/Product/shopDetails/shopDetails.js
var WxParse = require('../../../wxParse/wxParse.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   * 
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
      
      ],
    swiperArr:[],
    title:'',
    PID: '',
    currentTab:0
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var that = this

    wx.request({
      url: app.globalData.appUrl + 'WXShop/findShopDetails',
      data: { shopId: options.shopId},
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
         xcxuser_name: "xcxuser_name"
      },
      success: function (res) {
        console.info(res);
        // console.info(res.data[0].franchisedetailscontent);
        that.setData({
          shopArr:res.data[0],
          swiperArr: res.data[0].shopSwiperList,
          title: res.data[0].shoptitle
        })
        var article = res.data.relaaseProjectContent;
        WxParse.wxParse('article', 'html', article,that, 5);
      }
    })
    var OpenId = app.returnOpenId()

    wx.request({
      url: app.globalData.appUrl + 'WXCentre/findUserPId',
      data: { openid: OpenId},
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
        xcxuser_name: "xcxuser_name"
      },
      success: function (res) {
        console.info(res);
        // console.info(res.data[0].franchisedetailscontent);
   
        // console.info(res.data[0].franchisedetailscontent);

        if (res.data[0]){
          that.setData({
            PID: res.data[0].franchiseruserpid,

          })
        }
    
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
  onShareAppMessage: function (options) {
    console.log("11", options)
    var that =this
    var currentTab = that.data.currentTab
    var shopskumoney  =  that.data.shopArr.shopSKUMoney[currentTab].shopskumoney
  
      return {
        // imageUrl: app.globalData.shareImg,
        title: "【原价】¥" + shopskumoney + "【券后】¥" + (shopskumoney - that.data.shopArr.shopDiscountMoney) +" "+that.data.shopArr.shoptitle
      }
 

  
  },
  swichNav: function (e) {

    var cur = e.currentTarget.dataset.current;
    var shopArr = this.data.shopArr
    var swiperArr= this.data.swiperArr
    swiperArr= shopArr.shopSKUMoney[cur].shopSkuSwiper
    var selectValue = e.currentTarget.dataset.value
    for (var i = 0; i < swiperArr.length;i++){
      swiperArr[i].shopswiperimg = swiperArr[i].shopSkuSwiperUrl 
    }
    this.setData({
      swiperArr,
      selectValue
    })
    console.log(cur)
    if (this.data.currentTab == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //跳转首页
  tapHome(){
    wx.reLaunch({
      url: '/pages/index/index'
    })
  },
  //复制陶口令 mm_47879448_33192231_144446436
  copytkl(e){
    var OpenId = app.returnOpenId()
    console.log(e,OpenId)
    var shopUrl = e.currentTarget.dataset.shopurl
    var shopdiscounturl = e.currentTarget.dataset.shopdiscounturl
    var shopid = e.currentTarget.dataset.shopid
    var that = this
    wx.request({
      url: app.globalData.appUrl + 'WXShop/creartTKL',
      data: {
        shopUrl: shopUrl,
        shopDiscountUrl: shopdiscounturl,
        pid:that.data.PID,
        openId: OpenId,
        shopid: shopid      
         },
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
        xcxuser_name: "xcxuser_name"
      },
      success: function (res) {
        var model = res.data[0].data.model
        if (model != '' || model != null){
          wx.showModal({
            title: '提示',
            content: '淘口令复制成功!',
            showCancel:false,
            success: function (res) {
              if (res.confirm) {
                wx.setClipboardData({
                  data: "【" + that.data.title + "】复制这段描述" + model+"后到淘宝",
                  success: function (res) {
                    // wx.getClipboardData({
                    //   success: function (res) {
                    //     console.log(res.data) // data
                    //   }【美国Vitamix s30破壁料理机 多功能家用全自动维他密斯进口辅食机】复制这段描述￥TGO60DVn5zL￥后到淘宝
                    // })
                  }
                })
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        console.info(res);
      }
    })
  }
})