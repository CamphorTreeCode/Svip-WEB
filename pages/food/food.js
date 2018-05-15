Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:"0",
    food:[
      {
        title: "浓汤类", text: "更多", icon: "https://www.chuanshoucs.com/ServerImg/2018-05-11/516e646e-0821-4721-98f3-90b04e90802c.png", image: [{ image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/b1355788-4166-4486-80aa-8bd39c485227.png" }, { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/9ba14f6c-539f-482a-a8b7-b871c0b7f591.png" }, { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/f5fe56f7-c113-4f38-af6e-4471f96cc05d.png" }, { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/afc00479-31b2-4bd5-ad85-7bf62131a2e8.png" }]
      },
      {
        title: "豆浆类", text: "更多", icon: "https://www.chuanshoucs.com/ServerImg/2018-05-11/5a1e0c1e-4201-4dbe-9866-211f6b4a7a2a.png", image: [{ image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/4ea80653-48da-432d-b192-2b23fbebf9c5.png" }, { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/39d03d2d-6697-4874-97a8-2096dfbb3d6a.png" }, { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/2b7e1814-b6de-4df6-9a40-01e3875ea963.png" }, { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/7438519c-cef7-4c62-8f7a-45c9094b2a32.png" }]
      },
      {
        title: "米糊类", text: "更多", icon: "https://www.chuanshoucs.com/ServerImg/2018-05-11/d40898fe-5cc1-45ce-9702-6a0fd0d4b3a3.png", image: [{ image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/e250889c-7025-478e-81fb-774f79991194.png" }, { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/1af38024-4974-4d85-9fc8-4cc5e53e8a6f.png" }, { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/8350ba4f-4569-4adf-99d2-b70e925dfeba.png" }, { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/0be87017-9992-4c7f-8f91-92f484d53bfa.png" }]
      },
      {
        title: "果汁类", text: "更多", icon: "https://www.chuanshoucs.com/ServerImg/2018-05-11/6b68fbb5-6790-4a98-ada2-c88e6ddbcd08.png", image: [{ image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/5aed5aba-d008-421c-adbc-cb7797b634fa.png" }, { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/f0486d07-f296-4070-bea9-f52c6a15ed32.png" }, { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/3c33f684-fb26-4b0a-9555-af2029b6b9e8.png" }, { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/cf51c2e7-5642-4348-8a0f-ea1000319733.png" }]
      },
      {
        title: "烘焙类", text: "更多", icon: "https://www.chuanshoucs.com/ServerImg/2018-05-11/c8c97fa1-0a3e-49f2-9df2-35a2569719d1.png", image: [{ image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/5147a4c5-f024-4c3f-9f96-47e977f87a72.png" }, { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/17a72f09-70fd-4c64-a48a-c1c146d24e99.png" }, { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/a51a93c2-6343-4d93-b4a0-4e5821c5d579.png" }, { image: "https://www.chuanshoucs.com/ServerImg/2018-05-11/a9ac5686-9c05-4f5c-ad5d-e28d71c6cd84.png" }]
      }



    ]
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

  operation: function (e) {
    var index = e.currentTarget.dataset.index
    console.log(index)
    if(index==0){
      wx.navigateTo({
        url: '/pages/food/fooddetail/fooddetail'
      })
    }
    if (index == 1) {
      wx.navigateTo({
        url: '/pages/food/fooddetail/fooddetail'
      })
    }
    if (index == 2) {
      wx.navigateTo({
        url: '/pages/food/fooddetail/fooddetail'
      })
    }
    if (index == 3) {
      wx.navigateTo({
        url: '/pages/food/fooddetail/fooddetail'
      })
    }
    if (index == 4) {
      wx.navigateTo({
        url: '/pages/food/fooddetail/fooddetail'
      })
    }




   }

})