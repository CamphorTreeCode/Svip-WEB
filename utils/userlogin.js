
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
            url: app.globalData.appUrl + 'user/addUser', //仅为示例，并非真实的接口地址
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
module.exports = {
  login: login,

}
