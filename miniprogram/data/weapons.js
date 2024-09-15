import allWeaponData from './weapon/all-weapons-youxiwang.js'

// const allWeaponData = require('./weapon/all-weapons-youxiwang.js')

function findAllWeaponByWeaponCategory(category){
  console.log(allWeaponData)
  const list = allWeaponData.filter(item=>{
    return item.type === category
  })
  return list
}

export default {
  guijianshi: [{
    id: 'duanjian',
    label: '短剑',
    children: findAllWeaponByWeaponCategory('短剑')
  },{
    id: 'taidao',
    label: '太刀',
    children: findAllWeaponByWeaponCategory('太刀')
  },{
    id: 'dunqi',
    label: '钝器',
    children: findAllWeaponByWeaponCategory('钝器')
  },{
    id: 'jujian',
    label: '巨剑',
    children: findAllWeaponByWeaponCategory('巨剑')
  },{
    id: 'guangjian',
    label: '光剑',
    children: findAllWeaponByWeaponCategory('光剑')
  },],
  gedoujia: [{
    id: 'shoutao',
    label: '手套',
    children: findAllWeaponByWeaponCategory('手套')
  },{
    id: 'bikai',
    label: '臂铠',
    children: findAllWeaponByWeaponCategory('臂铠')
  },{
    id: 'zhua',
    label: '爪',
    children: findAllWeaponByWeaponCategory('爪')
  },{
    id: 'quantao',
    label: '拳套',
    children: findAllWeaponByWeaponCategory('拳套')
  },{
    id: 'dongfanggun',
    label: '东方棍',
    children: findAllWeaponByWeaponCategory('东方棍')
  }],
  shenqiangshou: [{
    id: 'zuolunqiang',
    label: '左轮枪',
    children: findAllWeaponByWeaponCategory('左轮枪')
  },{
    id: 'zidongshouqiang',
    label: '自动手枪',
    children: findAllWeaponByWeaponCategory('自动手枪')
  },{
    id: 'buqiang',
    label: '步枪',
    children: findAllWeaponByWeaponCategory('步枪')
  },{
    id: 'shoupao',
    label: '手炮',
    children: findAllWeaponByWeaponCategory('手炮')
  },{
    id: 'shounu',
    label: '手弩',
    children: findAllWeaponByWeaponCategory('手弩')
  }],
  mofashi: [{
    id: 'mao',
    label: '矛',
    children: findAllWeaponByWeaponCategory('矛')
  },{
    id: 'gunbang',
    label: '棍棒',
    children: findAllWeaponByWeaponCategory('棍棒')
  },{
    id: 'mozhang',
    label: '魔杖',
    children: findAllWeaponByWeaponCategory('魔杖')
  },{
    id: 'fazhang',
    label: '法杖',
    children: findAllWeaponByWeaponCategory('法杖')
  },{
    id: 'saoba',
    label: '扫把',
    children: findAllWeaponByWeaponCategory('扫把')
  }],
  shengzhizhe: [{
    id: 'guangzhang',
    label: '光杖',
    children: findAllWeaponByWeaponCategory('光杖')
  },{
    id: 'lingzhu',
    label: '灵珠',
    children: findAllWeaponByWeaponCategory('灵珠')
  },{
    id: 'tuteng',
    label: '图腾',
    children: findAllWeaponByWeaponCategory('图腾')
  },{
    id: 'liandao',
    label: '镰刀',
    children: findAllWeaponByWeaponCategory('镰刀')
  },{
    id: 'zhanfu',
    label: '战斧',
    children: findAllWeaponByWeaponCategory('战斧')
  }],
}