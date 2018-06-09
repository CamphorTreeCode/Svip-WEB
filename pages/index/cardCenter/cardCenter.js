// pages/index/cardCenter/cardCenter.js
var app = getApp();
var pagesize = 0
function selectOrderState(that) {
  var openId = app.returnOpenId()
  wx.request({
    url: app.globalData.appUrl + 'WXMyCard/selectMyCard',
    data: {
      openId: openId,
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

        var cardList = that.data.cardList
        for (var i = 0; i < res.data[0].lists.length; i++) {
    
          cardList.push(res.data[0].lists[i])
        }



        console.info(res.data[0].lists, cardList)
        that.setData({
          cardList,
          showLoading:true
        })
      }else{
        that.setData({
          bottomText: false,
          showLoading: true
        })
      }
    }
  })
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardArr:[
      {titel:'美国Vtamix s30 破壁聊了机',
       discountMoney: 300,
       shopMoneydis: 3299,   img:'https://www.chuanshoucs.com/ServerImg/2018-04-18/eb012378-e8a3-4130-b245-cead06aeb019.png'
      },
      {
        titel: 'Midea/美的 X6-348E台嵌两用348E台嵌两用',
        discountMoney: 400,
        shopMoneydis: 3299,
        img: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/c2983956-604d-4b18-9b9a-76c700d69b8c.png'
      }
    ],
    cardList:[],
    bottomText:true,
    PID:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let scrollHeight = wx.getSystemInfoSync().windowHeight;
    this.setData({
      scrollHeight: scrollHeight
    });
    pagesize=0;
    selectOrderState(this)
    var OpenId = app.returnOpenId()
var that  = this
    wx.request({
      url: app.globalData.appUrl + 'WXCentre/findUserPId',
      data: { openid: OpenId },
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
  onShareAppMessage: function () {
    return {
      imageUrl: app.globalData.shareImg,
      // title: app.globalData.shareTitle
    }
  },
  //下拉刷新功能
  lower(){
    console.log(1)
    this.setData({
      showLoading: false
    })
    selectOrderState(this)
  },
  //复制陶口令
  copytkl(e) {
    var OpenId = app.returnOpenId()
    console.log(e, OpenId)
    var that = this
    var shopUrl = e.currentTarget.dataset.shopurl
    var title = e.currentTarget.dataset.title
    var shopdiscounturl = e.currentTarget.dataset.shopdiscounturl
    var shopid = e.currentTarget.dataset.shopid
    wx.request({
      url: app.globalData.appUrl + 'WXShop/creartTKL',
      data: {
        shopUrl: shopUrl,
        shopDiscountUrl: shopdiscounturl,
        pid: that.data.PID,
        openId: OpenId,
        shopid: shopid
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
        xcxuser_name: "xcxuser_name"
      },
      success: function (res) {
        var model = res.data[0].data.model
        if (model != '' || model != null) {
          wx.showModal({
            title: '提示',
            content: '淘口令复制成功!',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                wx.setClipboardData({
                  data: "【" + title + "】复制这段描述" + model + "后到淘宝",
                  success: function (res) {
                    // wx.getClipboardData({
                    //   success: function (res) {
                    //     console.log(res.data) // data
                    //   }【3艾克丽净水器家用直饮厨房自来水龙头过直饮厨房自来水龙头过】复制这段描述￥bBIi0DVtBaC￥后到淘宝
                    // })【美国Vitamix s30破壁料理机 多功能家用全自动维他密斯进口辅食机】复制这段描述￥ARr30DVGZNK￥后到淘宝
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