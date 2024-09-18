// components/weapon-detail/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    detail: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  created () {
    console.log('detail', this.data.detail)
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})