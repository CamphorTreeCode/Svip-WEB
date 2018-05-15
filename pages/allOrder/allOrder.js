// pages/maintain/maintain.js
//时间插件所用数据


const date = new Date()
const years = []
const months = []
const days = []
const hours = []
const minutes = []
var thisMon = date.getMonth();
var thisDay = date.getDate();

for (let i = 2017; i <= date.getFullYear() + 1; i++) {
  years.push(i)
}

for (let i = 0; i <= 11; i++) {
  var k = i;
  if (0 <= i && i < 9) {
    k = "0" + (i + 1);
  } else {
    k = (i + 1);
  }
  months.push(k)
}
if (0 <= thisMon && thisMon < 9) {
  thisMon = "0" + (thisMon + 1);
} else {
  thisMon = (thisMon + 1);
}
if (0 <= thisDay && thisDay < 10) {
  thisDay = "0" + thisDay;
}

var totalDay = mGetDate(date.getFullYear(), thisMon);
for (let i = 1; i <= 31; i++) {
  var k = i;
  if (0 <= i && i < 10) {
    k = "0" + i
  }
  days.push(k)
}
function mGetDate(year, month) {
  var d = new Date(year, month, 0);
  return d.getDate();
}



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
    value: [0, 0, 0],
    //时间插件所需数据
    years: years,
    year: date.getFullYear(),
    months: months,
    month: thisMon,
    days: days,
    day: thisDay,
    value: [1, thisMon - 1, thisDay - 1, 0, 0],
    valueList: [
      { orderNumber: '1', orderName: '小浣熊HM-305A酸奶机家用全自动小浣熊HM-305A酸奶机家用全自动', orderMoney: '35' },
      { orderNumber: '2', orderName: '小浣熊HM-305A酸奶机家用全自动小浣熊HM-305A酸奶机家用全自动', orderMoney: '35' },
      { orderNumber: '3', orderName: '小浣熊HM-305A酸奶机家用全自动小浣熊HM-305A酸奶机家用全自动', orderMoney: '35' },
      { orderNumber: '4', orderName: '小浣熊HM-305A酸奶机家用全自动小浣熊HM-305A酸奶机家用全自动', orderMoney: '35' },
      { orderNumber: '5', orderName: '小浣熊HM-305A酸奶机家用全自动小浣熊HM-305A酸奶机家用全自动', orderMoney: '35' },
      { orderNumber: '6', orderName: '小浣熊HM-305A酸奶机家用全自动小浣熊HM-305A酸奶机家用全自动', orderMoney: '35' },
      { orderNumber: '7', orderName: '小浣熊HM-305A酸奶机家用全自动小浣熊HM-305A酸奶机家用全自动', orderMoney: '35' }
      ],
    //调回顶部所需数据
    scrollTop: {
      scroll_top: 0,
      goTop_show: false
    }  
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
  //滑动事件
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]],
    })
    var totalDay = mGetDate(this.data.year, this.data.month);
    var changeDate = [];
    for (let i = 1; i <= totalDay; i++) {
      var k = i;
      if (0 <= i && i < 10) {
        k = "0" + i
      }
      changeDate.push(k)
    }
    this.setData({
      days: changeDate
    })
  },
  onLoad: function (options) {

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
  onReachBottom: function (e) {
  
      
  },
  scrolltolower:function(){
    console.info('触发事件')
    var valueList = this.data.valueList;
     var getValueList = [
      { orderNumber: '123458970123456', orderName: '小浣熊HM-305A酸奶机家用全自动小浣熊HM-305A酸奶机家用全自动', orderMoney: '35' },
      { orderNumber: '123458970123456', orderName: '小浣熊HM-305A酸奶机家用全自动小浣熊HM-305A酸奶机家用全自动', orderMoney: '35' },
      { orderNumber: '123458970123456', orderName: '小浣熊HM-305A酸奶机家用全自动小浣熊HM-305A酸奶机家用全自动', orderMoney: '35' },
      { orderNumber: '123458970123456', orderName: '小浣熊HM-305A酸奶机家用全自动小浣熊HM-305A酸奶机家用全自动', orderMoney: '35' },
      { orderNumber: '123458970123456', orderName: '小浣熊HM-305A酸奶机家用全自动小浣熊HM-305A酸奶机家用全自动', orderMoney: '35' },
      { orderNumber: '123458970123456', orderName: '小浣熊HM-305A酸奶机家用全自动小浣熊HM-305A酸奶机家用全自动', orderMoney: '35' },
      { orderNumber: '123458970123456', orderName: '小浣熊HM-305A酸奶机家用全自动小浣熊HM-305A酸奶机家用全自动', orderMoney: '35' }
    ]
    var newValueList = valueList.concat(getValueList)
    this.setData({
      valueList: newValueList

    })

  },
 //跳转顶部事件
  scrollTopFun: function (e) {
    if (e.detail.scrollTop > 300) {//触发gotop的显示条件  
      this.setData({
        'scrollTop.goTop_show': true
      });
      
    } else {
      this.setData({
        'scrollTop.goTop_show': false
      });
    }
  },

  goTopFun: function (e) {
    var _top = this.data.scrollTop.scroll_top;//发现设置scroll-top值不能和上一次的值一样，否则无效，所以这里加了个判断  
    if (_top == 1) {
      _top = 0;
    } else {
      _top = 1;
    }
    this.setData({
      'scrollTop.scroll_top': _top
    });
    
    
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
function sleep(numberMillis) {
  var now = new Date();
  var exitTime = now.getTime() + numberMillis;
  while (true) {
    now = new Date();
    if (now.getTime() > exitTime)
      return;
  }
}



