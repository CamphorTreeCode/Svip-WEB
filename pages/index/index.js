
import { $wuxPicker, $wuxPickerCity } from '../../components/wux'
import { $wuxActionSheet } from '../../components/wux'

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
      { name: "关于我们", url: "/img/guanyuwomen.png" },
      { name: "产品分类", url: "/img/fenlei.png" },
      { name: "会员中心", url: "/img/huiyuan.png" },
      { name: "卡劵中心", url: "/img/youhiquan.png" },
      { name: "超级食谱", url: "/img/shipin.png" },
      { name: "申请加盟", url: "/img/jiameng.png" },
      { name: "中央维修", url: "/img/weixui.png" },
      { name: "学习天地", url: "/img/xuexi.png" },
    ],
    //类目展示图
    notice1:'',
    
    // 净水器
    waterPurifier: [
      {
        title: '美的（Midea）全自动家用智能净水器',
        shopImg: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/ee003db1-3f97-499e-9422-7416423fc64f.jpg',
        discountMoney: 300,
        shopMoneydis: 423,

      },
      {
        title: '安之星台式净水器家用水龙头过滤器自来水净水器净水器',
        shopImg: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/98075ffa-6897-475c-83e0-b334dab81be6.jpg',
        discountMoney: 200,
        shopMoneydis: 298,
      }

    ],
    //酸奶机
    yogurtMachine: [
      {
        title: 'Joyung/九阳 SN10lO3A米酒酸奶机全自动全自动全自动',
        shopImg: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/3c2981d5-0d23-43e2-8578-e5c73ffcef2e.jpg',
        discountMoney: 70,
        shopMoneydis: 98,

      },
      {
        title: '安之星台式净水器家用水龙头过滤器自来水净水器净水器',
        shopImg: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/36cb8c32-5e82-486b-9283-8e362b84ce7b.jpg',
        discountMoney: 50,
        shopMoneydis: 58,
      }
    ],
    // 破壁机
    breaking: [
      {
        title: '美国Vitamix s30破壁聊了机 多功能家用多功能家用',
        shopImg: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/e67d43ff-9e42-4f0b-ae9e-26f10300a98a.jpg',
        discountMoney: 30,
        shopMoneydis: 3199,

      },
      {
        title: '格力高便携式电动榨汁杯迷你家用果蔬榨迷你家用果蔬榨',
        shopImg: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/107962e8-6871-4870-8686-7fcd0b2ecf0b.jpg',
        discountMoney: 50,
        shopMoneydis: 109,
      }
    ],
    //洗碗机
    dishes: [
      {
        title: '美国Vitamix s30破壁聊了机 多功能家用多功能家用',
        shopImg: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/bce5fea0-1343-403a-8b1e-d4560655f344.jpg',
        discountMoney: 30,
        shopMoneydis: 3199,
      },
      {
        title: '格力高便携式电动榨汁杯迷你家用果蔬榨迷你家用果蔬榨',
        shopImg: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/fa2dca02-3b76-4234-bec9-d1d10a3fced8.jpg',
        discountMoney: 50,
        shopMoneydis: 109,
      }
    ],
    //机器人
    Robot: [
      {
        title: '美国Vitamix s30破壁聊了机 多功能家用多功能家用',
        shopImg: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/a39524c2-35b5-4d78-a8da-09a4e93ee887.jpg',
        discountMoney: 30,
        shopMoneydis: 3199,

      },
      {
        title: '格力高便携式电动榨汁杯迷你家用果蔬榨迷你家用果蔬榨',
        shopImg: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/bd02fce5-c2ec-410b-92cb-11a58e19ccde.jpg',
        discountMoney: 50,
        shopMoneydis: 109,
      }
    ],
    //护理机
    Nursing: [
      {
        title: '美国Vitamix s30破壁聊了机 多功能家用多功能家用',
        shopImg: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/f59c22b1-c9a1-448e-9870-961dbd0cc235.jpg',
        discountMoney: 30,
        shopMoneydis: 3199,

      },
      {
        title: '格力高便携式电动榨汁杯迷你家用果蔬榨迷你家用果蔬榨',
        shopImg: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/fe3676d8-7e09-436e-a80d-76228bb642cf.jpg',
        discountMoney: 50,
        shopMoneydis: 109,
      }
    ]
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
    wx.request({
      url: app.globalData.appUrl + 'WXShop/findHomePageShopImg',
      header: {
        xcxuser_name: "xcxuser_name"
      },
      success: function (res){
        console.info(res);
        var img1 = res.data;
        //console.info(img1[0]);
        that.setData({
          notice1:img1,
        })
      }
    })
    //  获取系统的高度
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
    wx.showTabBarRedDot();
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
  jingshui:function(){

    wx.reLaunch({
      url: '/pages/Product/Product?addrIfo=2'
    })
  },
  suannai: function () {

    wx.reLaunch({
      url: '/pages/Product/Product?addrIfo=4'
    })
  },
  pobi: function () {

    wx.reLaunch({
      url: '/pages/Product/Product?addrIfo=0'
    })
  },
  xiwan: function () {

    wx.reLaunch({
      url: '/pages/Product/Product?addrIfo=1'
    })
  },
  jiqi: function () {

    wx.reLaunch({
      url: '/pages/Product/Product?addrIfo=3'
    })
  },
  huli: function () {

    wx.reLaunch({
      url: '/pages/Product/Product?addrIfo=5'
    })
  }

})




