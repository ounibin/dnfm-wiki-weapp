// page/weapon/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 0,
    active: 0,
    items: [{ text: '分组 1' }, { text: '分组 2' }],
    activeCollapse: ['1'],
  },

  onSidebarChange (e) {
    const i = e.detail
    console.log(`ny----onSidebarChange: `, i)
    this.setData({
      activeKey: i
    })
  },
  onCollapseChange (e) {
    const val = e.detail
    console.log(`ny----onCollapseChange: `, val)
    this.setData({
      activeCollapse: val
    })
    const arr = [0,1]
    arr.some((item) => item===1)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})