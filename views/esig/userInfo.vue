<template>
  <div class="userinfo">
    <el-card class="sign-userinfo">
      <el-descriptions title="用户信息" :column="3" size="medium">
      <el-descriptions-item lable="姓名">{{userInfo.name}}</el-descriptions-item>
      <el-descriptions-item lable="团队负责人">{{userInfo.group_leader_name}}</el-descriptions-item>
      <el-descriptions-item lable="是否完成签署">
        <el-tag :type="userInfo.is_signed ? 'success' : 'danger'">{{userInfo.is_signed ? '已完成' : '未完成'}}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item lable="归属小组">{{userInfo.group}}</el-descriptions-item>
      <el-descriptions-item lable="签认负责人">{{userInfo.esig_name}}</el-descriptions-item>
      <el-descriptions-item lable="归属公司">{{userInfo.hr_com}}</el-descriptions-item>
      <el-descriptions-item lable="入职时间">{{userInfo.entry_time}}</el-descriptions-item>
    </el-descriptions>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      default: () => null
    }
  },
  methods: {

  },
}

</script>
<style scoped lang='less'>
.sign-userinfo {
  margin-bottom: 20px;
}
</style>