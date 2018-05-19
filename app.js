//app.js



// function sendSocketMessage() {
//   console.log("3msg")

//     wx.sendSocketMessage({
//       data: "hello"
//     })
 
//   wx.onSocketMessage(function (res) {
//     console.log('收到服务器内容：' + res.data)
//   })
// }
var userLogin = require('utils/userlogin.js');
App({
  
  onLaunch: function () {
    console.log("app.js start")
    var that = this; 
   
    //权限验证
    // console.log("app.js start ")
    // wx.getUserInfo({
    //   success: function (res) {
    //     console.log("app.js start ")
    //     console.log(res.errMsg)
    //     if (res.errMsg == "getUserInfo:ok") {
    //       that.globalData.showSQ = true
       
    //       userLogin.login();
    //     }
    //   }
    // })


   // userLogin.login();

    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)




    //全局保存高宽度 

    // 获取系统信息 
    wx.getSystemInfo({
      success: function (res) {     
          that.globalData.winWidth=res.windowWidth,
          that.globalData.winHeight=res.windowHeight          
      }
    }); 

    console.log("app.js end")
  },
  getOpenId: function () {
    console.log("獲取opoenid")
    var that = this
    check.getLoginCheck(that)
  },
  returnOpenId: function () {
    var openid = wx.getStorageSync('openid')
    if (openid) {
      console.log("有openid")
    } else {
      console.log("沒有openid")
      app.getOpenId();
      openid = wx.getStorageSync('openid')
    }
    return openid
  },

  globalData: {
    userInfo: null,
    winWidth: 0,
    winHeight: 0,
    cityNow:'',
    cityNowName:'',
    enterpriseType: '请选择企业类型',
    color: '#CCC',
    size: 24,
    companyType: '请选择公司类别',
    color1: '#CCC',
    size1: 24,
    user:[
    {
        avatarurl:'',
        nickname:'',
        gender:-1,
        city:'',
        province:'',
        country:'',
        language:'',
        jscode:''
 }
    ],
    addShareholderIcon:"https://s14.postimg.org/rc78jmj4h/image.png", 
    //appUrl:"https://www.chuanshoucs.com/Svip/",
    appUrl: "http://localhost/Svip/",
    appImgUrl:'https://www.chuanshoucs.com/ImgRegCompany/',
    showSQ: false,
    noneShowButton: true,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  }
})
//www.chuanshoucs.com "http://localhost/Maven_Project/", https://www.chuanshoucs.com/RegCompany/ RegCompany