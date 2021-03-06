// pages/Product/Product.js
var app = getApp();
function selectTabImg(that, index) {
  var selectValue = that.data.selectValue
  for (var i = 0; i < selectValue.length; i++) {
    if (selectValue[i].selectFalg) {
      selectValue[i].selectFalg = !selectValue[i].selectFalg
    }
  }
  selectValue[index].selectFalg = !selectValue[index].selectFalg
  that.setData({
    selectValue: selectValue
  })
 
  
}
var pagesize = 0;
function selectTypePage(that){
  
  wx.request({
    url: app.globalData.appUrl + 'WXShop/selectShopTypePage',
    data: {
      shopTypeId: that.data.shopTypeId+1,
      currentPage: ++pagesize,
      shoptitle: that.data.inputVal
    },
    header: {
      // 'content-type': 'application/x-www-form-urlencoded' // 默认值
      'content-type': 'application/x-www-form-urlencoded', // 默认值
      xcxuser_name: "xcxuser_name"
    },
    method: 'get',
    success: function (res) {

     console.log(res)

      if (res.data[0].lists.length > 0) {

        var shopList = that.data.shopList
        for (var i = 0; i < res.data[0].lists.length; i++) {
          shopList.push(res.data[0].lists[i])
        }


        console.info(res.data[0].lists, shopList)
        that.setData({
          shopList,
          showData: true,
          showLoading: true
        })
      } else {
        that.setData({
          bottomText: false,
          showLoading: true
        })
      }
       if (that.data.inputVal != null && that.data.shopList.length==0){
        that.setData({
          showData:false,
          bottomText: true
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
    inputShowed: false,
    inputVal: "",
    selectValue: [{
      text: '破壁机',
      img: '/img/type/doujiang1.png',
      selectImg: '/img/type/doujiang2.png',
      selectFalg: true

    }
      , {
      text: '净水器',
      img: '/img/type/jingshuiqi1.png',
      selectImg: '/img/type/jingshuiqi2.png',
      selectFalg: false
      }, {
        text: '酸奶机',
        img: '/img/type/nuannaiqi1.png',
        selectImg: '/img/type/nuannaiqi2.png',
        selectFalg: false
      }, {
      text: '洗碗机',
      img: '/img/type/xiwanji1.png',
      selectImg: '/img/type/xiwanji2.png',
      selectFalg: false
    }
     , {
      text: '机器人',
      img: '/img/type/jiqiren1.png',
      selectImg: '/img/type/jiqiren2.png',
      selectFalg: false
    }, {
      text: '护理机',
      img: '/img/type/yiyuan1.png',
      selectImg: '/img/type/yiyuan2.png',
      selectFalg: false
    }],
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    shopList:[],
    productArr: [
      {
        title: '艾克丽净水器家用直饮厨房自来水龙头过直饮厨房自来水龙头过',
        shopImg: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/e97959f2-e435-4b3e-97f5-4a5928b734d0.png',
        discountMoney: 100,
        shopMoneydis: 519,
        typeImg: 0
      },
      {
        title: '艾克丽净水器家用直饮厨房自来水龙头过直饮厨房自来水龙头过',
        shopImg: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/ae80616f-620f-47b9-805a-d08a2c9e6c38.png',
        discountMoney: 400,
        shopMoneydis: 229,
        typeImg: 1
      },
      {
        title: '艾克丽净水器家用直饮厨房自来水龙头过直饮厨房自来水龙头过',
        shopImg: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/08d98ffa-5743-4b03-b49b-1fa8f8623594.png',
        discountMoney: 200,
        shopMoneydis: 1998,
        typeImg: 1
      },
      {
        title: '艾克丽净水器家用直饮厨房自来水龙头过直饮厨房自来水龙头过',
        shopImg: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/10f07b1d-ab69-47c0-b758-76e55f1e149d.png',
        discountMoney: 90,
        shopMoneydis: 539,
        typeImg: 0
      },
      {
        title: '艾克丽净水器家用直饮厨房自来水龙头过直饮厨房自来水龙头过',
        shopImg: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/e97959f2-e435-4b3e-97f5-4a5928b734d0.png',
        discountMoney: 100,
        shopMoneydis: 519,
        typeImg: 0
      },
      {
        title: '艾克丽净水器家用直饮厨房自来水龙头过直饮厨房自来水龙头过',
        shopImg: 'https://www.chuanshoucs.com/ServerImg/2018-04-18/ae80616f-620f-47b9-805a-d08a2c9e6c38.png',
        discountMoney: 400,
        shopMoneydis: 229,
        typeImg: 1
      }
    ],
    shopTypeId:0,
    searchValue:"搜索",
    inputVal: null,
    showData:true,
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
    // this.setData({
    //   yemian: options.addrIfo
    // }) 
    // var ss=this.data.yemian;
    // this.setData({
    //   currentTab: ss
    // });
    console.log(options, options.id != "", options.id != null)
    if ( options.id!=null){
      console.log("進來")
      selectTabImg(this, parseInt(options.id) - 1);
      this.setData({
        shopTypeId: parseInt(options.id)-1,
        currentTab: parseInt(options.id)-1
      })
    }else{

    }
     this.checkCor();
     
     this.setData({
       shopList: []
    
     })
     pagesize = 0
     selectTypePage(this)
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
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function (e) {
    console.log("进来搜索。")
    pagesize = 0
    this.setData({
      shopList: [],
    })
    selectTypePage(this)
    this.setData({
      inputShowed: true
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },

  // 滚动切换标签样式
  switchTab: function (e) {
   console.log(e)

   this.setData({
     searchValue: this.data.selectValue[e.detail.current].text,
     bottomText: true
   })
    if (this.data.currentTab == e.detail.current) {
      console.log("等于的时候");
       return false; }
    else {
      console.log("switchTab", e.detail.current)
      this.setData({
        currentTab: e.detail.current,
        shopList:[],
        shopTypeId: e.detail.current,
      });
      pagesize = 0
      this.checkCor();
      selectTabImg(this, e.detail.current)
      selectTypePage(this)
 
    }

  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
   
    var cur = e.currentTarget.dataset.current;
    var value = e.currentTarget.dataset.value;
    this.setData({
      searchValue: value,
      bottomText: true
    })

    if (this.data.currentTab == cur) { return false; }
    else {
      this.setData({
        currentTab: cur,
        shopList: [],
        shopTypeId: cur,
      })
      pagesize = 0
      console.log("swichNav", e.currentTarget.dataset.current)
      selectTabImg(this, cur)
      selectTypePage(this)
    
    }

  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 2) {
      this.setData({
        scrollLeft: 300
      })
      if (this.data.currentTab > 7) {
        this.setData({
          scrollLeft: 600
        })
      }
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  //跳转商品详情页面
  shopDetails(e){
    console.log("跳转商品")
    console.log(e)
    var shopid = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/Product/shopDetails/shopDetails?shopId=' + shopid
    })
  },
  //上拉刷新
  lower() {
    console.log("..")
    var that = this
    that.setData({
      showLoading: false
    })
    selectTypePage(that)
  }

})