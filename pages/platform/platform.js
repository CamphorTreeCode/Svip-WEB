// pages/platform/platform.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    platform: [
       { platformImg: '/img/ApplicationToJoin/tianmao@2x.png', platformName: '天猫' },
       { platformImg: '/img/ApplicationToJoin/jingdong@2x.png ', platformName: '京东' },
       { platformImg: '/img/ApplicationToJoin/taobao@2x.png ', platformName: '淘宝' },
       { platformImg: '/img/ApplicationToJoin/suningyigou@2x.png ', platformName: '苏宁易购' },
       { platformImg: '/img/ApplicationToJoin/weishangyouxuan@2x.png ', platformName: '微商优选' },
       { platformImg: '/img/ApplicationToJoin/jumeiyoupin@2x.png ', platformName: '聚美优品' },
       { platformImg: '/img/ApplicationToJoin/yihaodian@2x.png ', platformName: '1号店' },
       { platformImg: '/img/ApplicationToJoin/xiaoxiong@2x.png ', platformName: '网易考拉海购' },
       { platformImg: '/img/ApplicationToJoin/aixin@2x.png  ', platformName: '拼多多' },
       ],
    check: ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none']
  
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
  
  },
  checkPlatform:function(e){
    /* 多选样式
    var index = e.currentTarget.dataset.index
    var checkList=this.data.check
    
    
    if(this.data.check[index]=='none'){
      checkList[index] = 'block'
      this.setData({
        check: checkList,
      })
      return false; 
    }
    if (this.data.check[index] == 'block') {
      checkList[index] = 'none'
      this.setData({
        check: checkList,
      })

    }*/
    
    /*单选样式*/
    var index = e.currentTarget.dataset.index
    var checkList = ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none']
    if (this.data.check[index] == 'none') {
      checkList[index] = 'block'
      console.info()
      this.setData({
        check: checkList,
      })
      return false;
    }
    if (this.data.check[index] == 'block') {
      checkList[index] = 'none'
      this.setData({
        check: checkList,
      })

    }


    
  },
  submitPlarform:function(e){
    var check = this.data.check
    var platform = []
    for (var i = 0; i < check.length; i++) {
      if (check[i] == 'block') {
        platform.push(this.data.platform[i].platformName)
      }

    }
    if(platform.length==0){
      
      wx.showModal({
        title: '提示',
        content: '你需要选择一个平台',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }else{
            console.log('用户点击取消')
          }
        }
      })
      return false;
    }
    let pages = getCurrentPages();//当前页面
    let prevPage = pages[pages.length - 2];//上一页面
    console.info(platform)
    prevPage.setData({
      platform: platform
    });
    console.info(prevPage.data.platform)
    wx.navigateBack({//返回
      delta: 1
    })
     
  }
})