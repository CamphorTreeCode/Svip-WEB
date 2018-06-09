
import { $wuxPicker, $wuxPickerCity } from '../../components/wux'
import { $wuxActionSheet } from '../../components/wux'
var userLogin = require('../../utils/userlogin.js');
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //轮播图
    movies: [],
    //功能区域  
    functionImg: [
      { name: "关于我们", url: "https://www.chuanshoucs.com/ServerImg/2018-05-16/4b2a7ea1-bf20-4723-9c18-5ee9163c653c.png" },
      { name: "产品分类", url: "https://www.chuanshoucs.com/ServerImg/2018-05-16/d325f5da-5a0d-4970-9064-094db523c6f3.png" },
      { name: "会员中心", url: "https://www.chuanshoucs.com/ServerImg/2018-05-16/79b273da-d116-4523-b555-b3eb34626fb2.png" },
      { name: "卡劵中心", url: "https://www.chuanshoucs.com/ServerImg/2018-05-16/81b8fa09-48d2-4221-b29f-ed170d435976.png" },
      { name: "超级食谱", url: "https://www.chuanshoucs.com/ServerImg/2018-05-16/c3adb1a4-5274-4036-b0dd-d8fe24d0f7e9.png" },
      { name: "申请加盟", url: "https://www.chuanshoucs.com/ServerImg/2018-05-16/c9e6baf8-c238-409f-b17e-7d0c60d383c1.png" },
      { name: "中央维修", url: "https://www.chuanshoucs.com/ServerImg/2018-05-16/fa1cc3c3-8a88-4132-bfa8-b253af000624.png" },
      { name: "学习天地", url: "https://www.chuanshoucs.com/ServerImg/2018-05-16/b71939c4-970b-41ef-8c63-822269d444c5.png" },
    ],
    //类目展示图
    notice1:'',
    shops:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var p = this
    var that = this


    //打印appUrl地址
    //console.info(app.globalData.appUrl);
    //首页轮播图

    wx.request({
      url: app.globalData.appUrl + 'WXShop/findHomePageImg',
      header: {
        xcxuser_name: "xcxuser_name"
      },
      success: function (res) {
        //console.log(res)
        var movies = [];
        //console.info(res.data)       
          for (var i = 0; i < res.data.length; i++) {
            var a = {url: ''}
            a.url = res.data[i].swiperimg;
            //console.info(a)
            movies.push(a)
        }
          //console.info(movies)
        p.setData({
          movies: movies
          })
      }
     })

    //首页六张类目及其展示图
    // wx.request({
    //   url: app.globalData.appUrl + 'WXShop/findHomePageShopImg',
    //   header: {
    //     xcxuser_name: "xcxuser_name"
    //   },
    //   success: function (res){
    //     console.info(res);
    //     var img1 = res.data;
    //     //console.info(img1[0]);
    //     that.setData({
    //       notice1:img1,
    //     })
    //   }
    // })

    //首页的每个分类前两个商品
    wx.request({
      url: app.globalData.appUrl + 'WXShop/findHomePageShop',
      header: {
        xcxuser_name: "xcxuser_name"
      },
      success: function (res) {
        console.info(res);
      
        //console.info(img1[0]);
        that.setData({
          shops: res.data,
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
  scroll: function (event) {
    //该方法绑定了页面滚动时的事件，我这里记录了当前的position.y的值,为了请求数据之后把页面定位到这里来。
    this.setData({
      scrollTop: event.detail.scrollTop
    });
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  //页面滑动到底部
  bindDownLoad: function () {
    var that = this;
  },
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
    console.log("下拉刷新")
    wx.startPullDownRefresh()
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
  // 功能区域跳转到页面
  JumpFunctions(e) {
    console.log(e, e.currentTarget.id, e.currentTarget.dataset.value);
    var id = e.currentTarget.id
    var value = e.currentTarget.dataset.value;

    switch (value) {
      case '卡劵中心':
        wx.navigateTo({
        url: '/pages/index/cardCenter/cardCenter'
         })
      break; 
      case '超级食谱':
        wx.navigateTo({
          url: '/pages/food/food'
        })
        break; 
      case '产品分类':
        wx.switchTab({
          url: '/pages/Product/Product'
        })
        break; 
      case '学习天地':
        wx.navigateTo({
          url: '/pages/study/study'
        })
        break; 
      case '中央维修':
        wx.navigateTo({
          url: '/pages/maintain/maintain'
        })
        break; 
      case '申请加盟':
        wx.switchTab({
          url: '/pages/ApplicationToJoin/ApplicationToJoin'
        })
        break; 
      case '会员中心':
        wx.switchTab({
          url: '/pages/my/my'
        })
        break; 
      case '关于我们':
        wx.navigateTo({
          url: '/pages/ous/ous'
        })
        break; 

    }   
  // { name: "关于我们", url: "/img/guanyuwomen.png" },
  // { name: "产品分类", url: "/img/fenlei.png" },
  // { name: "会员中心", url: "/img/huiyuan.png" },
  // { name: "卡卷中心", url: "/img/youhiquan.png" },
  // { name: "超级食谱", url: "/img/shipin.png" },
  // { name: "申请加盟", url: "/img/jiameng.png" },
  // { name: "中央维修", url: "/img/weixui.png" },
  // { name: "学习天地", url: "/img/xuexi.png" },





  },

  //预览图片
  previewImg(e) {
    console.log()
    var imgurl = e.target.dataset.img
    var ind = e.target.dataset.ind
    var urlarrpojo = this.data.companyList[ind].companyImg
    var urlarrs = []
    for (var i = 0; i < urlarrpojo.length; i++) {
      urlarrs[i] = urlarrpojo[i].companyUrl
    }
    console.log(urlarrs)
    wx.previewImage({
      current: imgurl, // 当前显示图片的http链接
      urls: urlarrs, // 需要预览的图片http链接列表

    })
  },


  // 拨打电话 
  callPhone(e) {
    console.log(e.currentTarget.dataset.value);
    var phone = e.currentTarget.dataset.value;
    wx.makePhoneCall({
      phoneNumber: phone //仅为示例，并非真实的电话号码
    })

   },
  jingshui:function(e){
    console.log(e, e.currentTarget.dataset.id)
    wx.reLaunch({
      url: '/pages/Product/Product?id=' + e.currentTarget.dataset.id
    })
  },
  shopDetails(e){
    wx.navigateTo({
      url: '/pages/Product/shopDetails/shopDetails?shopId=' + e.currentTarget.dataset.shopid
    })
  }

})




