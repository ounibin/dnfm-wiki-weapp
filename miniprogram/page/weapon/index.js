import roleList from '../../data/roles.js'
import weaponList from '../../data/weapons.js'

const defaultSelectRoleId = 'guijianshi'
const defaultRightPanelData = weaponList[defaultSelectRoleId]
const defaultActiveCollapseList = defaultRightPanelData.map((item)=>item.id)
console.log(defaultRightPanelData)
console.log(defaultActiveCollapseList)

Page({
  /**
   * 页面的初始数据
   */
  data: {
    roleList: roleList,
    selectId: defaultSelectRoleId,
    rightPanelData: defaultRightPanelData,
    activeCollapseList: defaultActiveCollapseList,
    showWeaponDetail: false,
    weaponDetail: {}
  },

  onSidebarChange (e) {
    const i = e.detail
    const selectId = roleList[i].id
    const weapons = weaponList[selectId]
    // console.log(selectId, '该职业的所有weapons', JSON.stringify(weapons))
    const allWeaponIdList = weapons.map((item)=>item.id)
    this.setData({
      selectId,
      rightPanelData: weapons,
      activeCollapseList: allWeaponIdList
    })
  },
  onCollapseChange (e) {
    const val = e.detail
    console.log(`折叠某类武器: `, val)
    this.setData({
      activeCollapseList: val
    })
  },

  onClickWeaponItem  (e) {
    const detail = e.currentTarget.dataset.detail
    console.log(`ny----onClickWeaponItem: `, detail)
    
    this.setData({
      weaponDetail: detail,
      showWeaponDetail: true
    })
  },


  onClickHideWeaponDetail () {
    
    this.setData({
      showWeaponDetail: false
    })
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