<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
    <template v-for="(item,index) in newMenuList" >
      <el-menu-item :key="index + 'single'" v-if="index == 0">{{ item.name }}</el-menu-item>
      <el-submenu  :key="index + 'single'"  v-if="index == 1" index="">
        <template slot="title">{{ item.name }}</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item :key="index + 'single'" disabled  v-if="index == 2">{{ item.name }}</el-menu-item>
      <el-menu-item :key="index + 'single'"  v-if="index == 3"
        ><a href="https://www.ele.me" target="_blank">{{ item.name }}</a></el-menu-item
      >
    </template>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',  //默认激活，当前激活菜单的 index
        activeIndex2: '1',
        newMenuList: [{'name': '处理中心'}, {'name': '我的工作台'}, {'name': '消息中心'}, {'name': '订单管理'}]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<!-- <template>
  <el-container>
    <el-aside width="220px">
      <el-menu
        :default-active="activeMenu"
        class="el-menu-vertical-demo"
        background-color="#08112A"
        text-color="#777F91"
        active-text-color="#CFD1D6"
        :unique-opened="true"
      >
        <template v-for="(item,index) in newMenuList" >
          <template v-if="item.children.length == 0">
            <el-menu-item :key="index + 'single'" v-if="item.permission ? checkPermission([item.permission]) : true">
              <div class="sidebarIcon"
                :style="{background: 'url(../../assets/img/controlDeskIcon/'+ item.icon+'.svg) no-repeat'}"></div>
              <span slot="title" style="width:100%">
                <router-link :to="item.path">
                  <span class="router-name">
                    {{ item.name }}
                  </span>
                </router-link>
              </span>
            </el-menu-item>
          </template>
          <template v-else>
            <el-submenu :key="index + 'child'" :index="item.path" v-if="item.permission ? checkPermission([item.permission]) : true">
              <template slot="title">
                <div class="sidebarIcon" :style="{background: 'url(../../assets/img/controlDeskIcon/'+ item.icon+'.svg) no-repeat'}"></div>
                <span>{{ item.name }}</span>
              </template>
              <template v-for="subitem in item.children">
                <el-menu-item :key="subitem.path" v-if="subitem.permission ? checkPermission([subitem.permission]) : true" :index="subitem.path">
                  <span slot="title" class="submenu">
                    <router-link :to="subitem.path">
                      <span class="collection-name">{{ subitem.name }}</span>
                    </router-link>
                    <span style="z-index: 999;font-size: 24px;" @click="collectionMenu(subitem)">
                      <i class="el-icon-star-on" v-if="subitem.isCollection" style="color:#F69624;"></i>
                      <i class="el-icon-star-off" v-else ></i>
                    </span>
                  </span>
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
        </template>
      </el-menu>
    </el-aside>
    <el-container>
        <router-view :group_tree="group_tree" :userList="userList"></router-view>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'ControlDesk',
  data () {
    return {
      activeMenu: '1',
      group_tree: [],
      userList: [],
      teamList: [],
      curUser: null,
      leaderInfo: {},
      userListMap: {},
      userAllListMap: {},
      collectionType: {
        members: true,
      },
      show: true,
      isInsiders: false,
      collectionsList: [],
      newMenuList: [{'children':[], "url":"/ControlDesk/auth","title":"工单申请"},{"url":"/ControlDesk/flow","title":"工单状态"}]
    }
  },
}
</script> -->