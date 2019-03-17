<template>
  <div id="app">
    <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper" />
            欢迎
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people" />
            开始点名
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-stats" />
                设置
            </template>
            <MenuGroup title="一些设置。">
                <MenuItem name="3-1">学生管理</MenuItem>
                <MenuItem name="3-2">考勤查询</MenuItem>
                <MenuItem name="3-3">下载考勤文件</MenuItem>
            </MenuGroup>
        </Submenu>
    </Menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld
    },
    data () {
      return {
        theme1: 'light'
      }
    }
  }
</script>

