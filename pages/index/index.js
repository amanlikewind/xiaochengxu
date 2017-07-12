//index.js
//获取应用实例
var app = getApp()
Page({
  onLoad(options){
    this.setData({
      userName: options.userName
    })
  },
  data: {
    userName:"123",
    currentTab:0,
     arr: [
        { 
          img: "../../imgs/pic01.jpg", 
          text:"小丸子呀小丸子"},
        { 
           img: "../../imgs/pic02.jpg",
          text:"萌萌哒小丸子"},
        { 
           img: "../../imgs/pic03.jpg",
          text: "小丸子啊萌萌哒"},
        { 
           img: "../../imgs/pic04.jpg",
          text: "小丸子呀小丸子" },
        {
           img: "../../imgs/pic02.jpg",
           text: "萌萌哒小丸子"},
        {
           img: "../../imgs/pic03.jpg",
           text: "小丸子啊萌萌哒"},
        {
           img: "../../imgs/pic04.jpg",
           text: "小丸子呀小丸子"},
        {
           img: "../../imgs/pic01.jpg",
           text: "小丸子呀小丸子"
        },
     ],
     life: [
        {
           img: "../../imgs/img01.jpg",
           text: "徐云龙争顶！"
        },
        {
           img: "../../imgs/img02.jpg",
           text: "马志奇向教练示意对手拉扯武磊进球后腿抽筋"
        },
        {
           img: "../../imgs/img02.jpg",
           text: "徐云龙争顶！"
        },
        {
           img: "../../imgs/img01.jpg",
           text: "马志奇向教练示意对手拉扯武磊进球后腿抽筋"
        },
        {
           img: "../../imgs/img02.jpg",
           text: "马志奇向教练示意对手拉扯武磊进球后腿抽筋"
        },
        {
           img: "../../imgs/img01.jpg",
           text: "徐云龙争顶！"
        },
        {
           img: "../../imgs/img02.jpg",
           text: "马志奇向教练示意对手拉扯武磊进球后腿抽筋"
        },
        {
           img: "../../imgs/img01.jpg",
           text: "马志奇向教练示意对手拉扯武磊进球后腿抽筋"
        },
     ]
     
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var that = this;
      that.setData({
        currentTab: e.target.dataset.current-0
      })
  }
})
