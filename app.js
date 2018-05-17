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
var check = require('utils/authorizationCheck.js');
App({
  
  onLaunch: function () {
    console.log("app.js start ")
    var that = this;
    var socketOpen = false
    var socketMsgQueue = []
    // 定义省份城市
    //打开websocket
    // wx.connectSocket({
    //   url: 'ws://localhost:8080/wx/websocket',
    //   data: {
    //     x: '111',
    //     y: '222'
    //   },
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   method: "GET",
    //   success:function(res){
    //   console.log("1",res)
    //   }
    // })
    //监听websocket

    // 发送用户的信息
    check.getLoginCheck(that)

/**传用户数据 */
     
    wx.onSocketOpen(function (res) {
      console.log("2",res)
      socketOpen = true
   
        sendSocketMessage()
      
      socketMsgQueue = []
    })
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)


    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (that.userInfoReadyCallback) {
                 that.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    


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
    appImgUrl:'https://www.chuanshoucs.com/ImgRegCompany/'
  }
})
//www.chuanshoucs.com "http://localhost/Maven_Project/", https://www.chuanshoucs.com/RegCompany/ RegCompany