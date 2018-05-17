
function login(that){
  wx.login({
    success: function (res) {
      var jscode = res.code
      wx.getUserInfo({
        success: function (res) {
         var app =getApp()
         var user = app.globalData.user[0]  
         console.log("<<<<<<<<<", user, app.globalData.appUrl)
          var userInfo = res.userInfo
          user.nickname = userInfo.nickName
          user.avatarurl = userInfo.avatarUrl
          user.gender = userInfo.gender //性别 0：未知、1：男、2：女
          user.province = userInfo.province
          user.city = userInfo.city
          user.country = userInfo.country
          user.language = userInfo.language
          user.jscode = jscode;
          var users = JSON.stringify(user)
          
          wx.request({
            url: app.globalData.appUrl + 'WXUser/addUser', //仅为示例，并非真实的接口地址
            data: users,
            header: {
              'content-type': 'application/json' // 默认值
            },
            

            method: "post",
            success: function (res) {
              console.log(res)
            }
          })
        }
      })

    }
  })
/**传用户数据 */
}

//获取openid
function getOpenid() {
  // 登录
  wx.login({
    success: res => {
      var app = getApp()
      try {
        var value = wx.getStorageSync('openid')
        if (value) {

        } else {
          wx.request({
            url: app.globalData.url + 'WxUser/getOpenid', //仅为示例，并非真实的接口地址
            data: { jscode: res.code },
            method: "get",
            header: {
              // 'content-type': 'application/x-www-form-urlencoded' // 默认值
              'content-type': 'application/json', // 默认值

            },
            success: function (res) {
              console.log(res)

              try {
                wx.setStorageSync('openid', res.data.openId)
              } catch (e) {
              }
            }

          })
        }
      } catch (e) {
        // Do something when catch error
      }


    }
  })
}

module.exports = {
  login: login,
  getOpenid: getOpenid,
}
