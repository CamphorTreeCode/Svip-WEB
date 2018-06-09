//表单验证
function yanzheng(franchiseList) {
  if (franchiseList.franchisename == '') {
    wx.showToast({
      title: '请填写姓名',
      icon: 'none',
      duration: 2000
    })
    return false;
  }
  if (franchiseList.franchiseconsumption == '') {
    wx.showToast({
      title: '请选择消费平台',
      icon: 'none',
      duration: 2000
    })
    return false;
  }
  if (franchiseList.franchiseordernmuber == '') {
    wx.showToast({
      title: '请填写订单号',
      icon: 'none',
      duration: 2000
    })
    return false;
  }
  if (franchiseList.franchisephone == '') {
    wx.showToast({
      title: '请填写联系电话',
      icon: 'none',
      duration: 2000
    })
    return false;
  } else {
    if (/[\u4E00-\u9FA5]/g.test(franchiseList.franchisephone)) {
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
  if (franchiseList.franchiseapplyreason == '') {
    wx.showToast({
      title: '请填写申请理由',
      icon: 'none',
      duration: 2000
    })
    return false;
  }
  return true;
}

// pages/ApplicationToJoin/ApplicationToJoin.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    platform: '',
    franchiseDetailsImg: '',
    franchiseDetailsContent: '',
    franchiseState:false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var franchiseDetails = this
    var franchiser = this
    var that =this
    //申请加盟页面信息
    wx.request({
      url: app.globalData.appUrl + 'WXCentre/findFranchiseDetails',
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
        xcxuser_name: "xcxuser_name"
      },
      success: function (res) {
        console.info(res);
        // console.info(res.data[0].franchisedetailscontent);
        franchiseDetails.setData({
          franchiseDetailsContent: res.data[0].franchisedetailscontent,
          franchiseDetailsImg: res.data[0].franchisedetailsimg,
        })
      }
    })
    //查询用户的openid
    wx.request({
      url: app.globalData.appUrl + 'WXCentre/findOpenidState',
      data:{
        openid :app.returnOpenId()
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
        xcxuser_name: "xcxuser_name"
      },
      success: function (res) {
        console.info(res);
        if (res.data[0]!=null){
          that.setData({
            franchiseState: res.data[0].franchisestate == 1 || res.data[0].franchisestate == 0 ? true : false,
            franchuseNum: res.data[0].franchisestate
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
  choosePlatform: function (e) {
    console.info(e.target.dataset.value)
    wx.navigateTo({
      url: '/pages/platform/platform',
    })


  },
  formSubmit: function (e) {
    console.info('触发事件')
    console.info(e)
    var that = this;
    var franchiseList = e.detail.value
    franchiseList.openid = app.returnOpenId()
    franchiseList.franchiseconsumption = franchiseList.franchiseconsumption == "淘宝" ? '1' : franchiseList.franchiseconsumption == "天猫"?'0':''
    franchiseList.readstate=0;
    franchiseList.franchisestate=0;
    franchiseList.formId=e.detail.formId;
    if (yanzheng(franchiseList)){
      wx.request({
        url: app.globalData.appUrl + 'WXCentre/addFranchiserMsg',
        data: franchiseList,
        header: {
          'content-type': 'application/x-www-form-urlencoded', // 默认值
          xcxuser_name: "xcxuser_name"
        },
        success: function (res) {
          console.info(res);
        if(res.data){
          wx.showToast({
            title: '提交成功！',
            icon: 'none',
            duration: 2000
          })
          that.setData({
            franchiseState: res.data.franchiseState,
            franchuseNum:0
          })
        }
        }
      })
   } 



    
  },
})
