// pages/maintain/maintain.js
//表单验证
var app = getApp();
function yanzheng(Maintenance) {
  if (Maintenance.maintenancemodel == '') {
    wx.showToast({
      title: '请输入机器型号',
      icon: 'none',
      duration: 2000
    })
    return false;
  }
  if (Maintenance.maintenanceplatform == '') {
    wx.showToast({
      title: '请选择购买平台',
      icon: 'none',
      duration: 2000
    })
    return false;
  }
  if (Maintenance.maintenancenumber == '') {
    wx.showToast({
      title: '请填写订单号',
      icon: 'none',
      duration: 2000
    })
    return false;
  }

  if (Maintenance.maintenancename == '') {
    wx.showToast({
      title: '请填写姓名',
      icon: 'none',
      duration: 2000
    })
    return false;
  }
  if (Maintenance.maintenanceaddress == '') {
    wx.showToast({
      title: '请选择地址',
      icon: 'none',
      duration: 2000
    })
    return false;
  }
  if (Maintenance.maintenancedetailed == '') {
    wx.showToast({
      title: '请填写详细地址',
      icon: 'none',
      duration: 2000
    })
    return false;
  }
  if (Maintenance.maintenancephone == '') {
    wx.showToast({
      title: '请填写手机或固话',
      icon: 'none',
      duration: 2000
    })
    return false;
  } else {
    if (/[\u4E00-\u9FA5]/g.test(Maintenance.maintenancephone)) {
      wx.showToast({
        title: '联系方式不能包含汉字',
        icon: 'none',
        duration: 2000
      })
      return false;
    } else {
   
      return true;
    }

  }

  return true;
}



//地址插件所用数据
var area = require('../../utils/area.js')

var areaInfo = [];//所有省市区县数据

var provinces = [];//省

var citys = [];//城市

var countys = [];//区县

var index = [0, 0, 0];

var cellId;

var t = 0;
var show = false;
var moveY = 200;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: show,
    provinces: provinces,
    citys: citys,
    countys: countys,
    value: [0, 0, 0],
    platform: [],
    province: "",
    city: "",
    county: "",
  
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
  choosePlatform: function () {
    wx.navigateTo({
      url: '/pages/platform/platform',
    })
  },
  formSubmit:function(e){
       console.info('触发事件')
       var that =this
       var Maintenance = e.detail.value
       Maintenance.maintenanceaddress = that.data.province + that.data.city + that.data.county
       Maintenance.openid = app.returnOpenId()
       Maintenance.maintenanceplatform = Maintenance.maintenanceplatform == "淘宝" ? '1' : Maintenance.maintenanceplatform== "天猫" ? '0' : ''
       Maintenance.readstate = 0;
       Maintenance.maintenancestate = 0;
       Maintenance.formId = e.detail.formId;
  
       console.info(e)
       if (yanzheng(Maintenance)) {
         var maintenance = Maintenance
         wx.request({
           url: app.globalData.appUrl + 'WXMaintenance/addMaintenanceMsg',
           data: maintenance,
           header: {
             'content-type': 'application/x-www-form-urlencoded', // 默认值
             xcxuser_name: "xcxuser_name"
           },
           success: function (res) {
             console.info(res);
             if (res.data) {
               wx.showToast({
                 title: '提交成功！',
                 icon: 'none',
                 duration: 2000
               })
              that.setData({
                clearValue:'',
                platform:''
              })
              //  that.setData({
              //    franchiseState: res.data.franchiseState,
              //    franchuseNum: 0
              //  })
             }
           }
         })
       } 
  },
  //滑动事件
  bindChange: function (e) {
    var val = e.detail.value
    // console.log(e)
    //判断滑动的是第几个column
    //若省份column做了滑动则定位到地级市和区县第一位
    if (index[0] != val[0]) {
      val[1] = 0;
      val[2] = 0;
      getCityArr(val[0], this);//获取地级市数据
      getCountyInfo(val[0], val[1], this);//获取区县数据
    } else {    //若省份column未做滑动，地级市做了滑动则定位区县第一位
      if (index[1] != val[1]) {
        val[2] = 0;
        getCountyInfo(val[0], val[1], this);//获取区县数据
      }
    }
    index = val;

    console.log(index + " => " + val);

    //更新数据
    this.setData({
      value: [val[0], val[1], val[2]],
      province: provinces[val[0]].name,
      city: citys[val[1]].name,
      county: countys[val[2]].name
    })

  },
  onLoad: function (options) {
    cellId = options.cellId;
    var that = this;
    var date = new Date()
    console.log(date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日");

    //获取省市区县数据
    area.getAreaInfo(function (arr) {
      areaInfo = arr;
      //获取省份数据
      getProvinceData(that);
    });

  },
  // ------------------- 分割线 --------------------
  onReady: function () {
    this.animation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 0,
      timingFunction: "ease",
      delay: 0
    }
    )
    this.animation.translateY(200 + 'vh').step();
    this.setData({
      animation: this.animation.export(),
      show: show
    })
  },
  //移动按钮点击事件
  translate: function (e) {
    if (t == 0) {
      moveY = 0;
      show = false;
      t = 1;
    } else {
      moveY = 200;
      show = true;
      t = 0;
    }
    // this.animation.translate(arr[0], arr[1]).step();
    animationEvents(this, moveY, show);

  },
  //隐藏弹窗浮层
  hiddenFloatView(e) {
    console.log(e);
    moveY = 200;
    show = true;
    t = 0;
    animationEvents(this, moveY, show);

  },
  //页面滑至底部事件
  onReachBottom: function () {
    // Do something when page reach bottom.
  },
  tiaozhuan() {
    wx.navigateTo({
      url: '../../pages/modelTest/modelTest',
    })
  }
})

//动画事件
function animationEvents(that, moveY, show) {
  console.log("moveY:" + moveY + "\nshow:" + show);
  that.animation = wx.createAnimation({
    transformOrigin: "50% 50%",
    duration: 400,
    timingFunction: "ease",
    delay: 0
  }
  )
  that.animation.translateY(moveY + 'vh').step()

  that.setData({
    animation: that.animation.export(),
    show: show
  })

}

// ---------------- 分割线 ---------------- 

//获取省份数据
function getProvinceData(that) {
  var s;
  provinces = [];
  var num = 0;
  for (var i = 0; i < areaInfo.length; i++) {
    s = areaInfo[i];
    if (s.di == "00" && s.xian == "00") {
      provinces[num] = s;
      num++;
    }
  }
  that.setData({
    provinces: provinces
  })

  //初始化调一次
  getCityArr(0, that);
  getCountyInfo(0, 0, that);
  that.setData({
    province: "北京市",
    city: "市辖区",
    county: "东城区",
  })

}

// 获取地级市数据
function getCityArr(count, that) {
  var c;
  citys = [];
  var num = 0;
  for (var i = 0; i < areaInfo.length; i++) {
    c = areaInfo[i];
    if (c.xian == "00" && c.sheng == provinces[count].sheng && c.di != "00") {
      citys[num] = c;
      num++;
    }
  }
  if (citys.length == 0) {
    citys[0] = { name: '' };
  }

  that.setData({
    city: "",
    citys: citys,
    value: [count, 0, 0]
  })
}

// 获取区县数据
function getCountyInfo(column0, column1, that) {
  var c;
  countys = [];
  var num = 0;
  for (var i = 0; i < areaInfo.length; i++) {
    c = areaInfo[i];
    if (c.xian != "00" && c.sheng == provinces[column0].sheng && c.di == citys[column1].di) {
      countys[num] = c;
      num++;
    }
  }
  if (countys.length == 0) {
    countys[0] = { name: '' };
  }
  that.setData({
    county: "",
    countys: countys,
    value: [column0, column1, 0]
  })
}