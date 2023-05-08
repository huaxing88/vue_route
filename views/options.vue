<template>
  <div>
    <el-form ref="assignInfoForm" :model="assignInfo" label-width="80px"     size="small"
    style="width:70%">
      <el-form-item
        label="角色名称"
        prop="name"
        :rules="[
          { required: true, message: '请输入角色名称', trigger: 'change' },
        ]"
      >
        <el-input
          v-model="assignInfo.name"
          clearable
          placeholder="请填写角色名称"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="归属小组"
        prop="name"
        :rules="[
          { required: true, message: '请输入角色名称', trigger: 'change' },
        ]"
      >
        <el-input
          v-model="assignInfo.name"
          clearable
          placeholder="请填写角色名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="授权用户">
        <el-select
          v-model="assignInfo.users"
          placeholder="请选择用户"
          multiple
          style="width: 100%"
          clearable
        >
          <el-option
            v-for="item in groupUserList"
            :key="item.uid"
            :label="item.name"
            :value="item.uid"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="角色备注">
        <el-input
          v-model="assignInfo.comment"
          type="textarea"
          clearable
          :autosize="{ minRows: 2, maxRows: 4 }"
          placeholder="请填写角色备注"
        ></el-input>
      </el-form-item>
      <el-form-item label="是否发布">
        <el-switch v-model="noticeInfo.is_public" style="margin-left:12px;"> </el-switch>
      </el-form-item>
      <el-form-item v-if="noticeInfo.is_public" label="推送企业微信">
        <el-switch v-model="is_publish" @change="select_permissions" style="margin-left:12px;">
        </el-switch>
      </el-form-item>
      <el-form-item v-if="is_publish" label="推送方式">
        <el-radio-group v-model="publish_type">
          <el-radio label="Test">测试推送信息</el-radio>
          <el-radio label="Formal">正式推送信息</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="查看权限">
        <el-radio-group v-model="noticeInfo.permissions">
          <el-radio label="all">全员可见</el-radio>
          <el-radio label="group" :disabled="is_publish">按小组选择</el-radio>
          <el-radio label="member" :disabled="is_publish">按人员选择</el-radio>
        </el-radio-group>
      </el-form-item>
      <section>
        <div v-if="noticeInfo.permissions === 'group'">
          <el-form-item label="已选择小组">
            <div>{{ groupNameStr }}</div>
            <el-button type="primary" @click="showSelectGroupDialog"
              >选择可见小组</el-button
            >
          </el-form-item>
        </div>
      </section>
      <section>
        <div v-if="noticeInfo.permissions === 'member'">
          <el-form-item label="已选择人员">
            <div>{{ memberNameStr }}</div>
            <el-button type="primary" @click="showSelectMemberDialog"
              >选择可见人员</el-button
            >
          </el-form-item>
        </div>
      </section>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "assignRoleVue",
  data() {
    return {
      noticeInfo: {
        content: "",
      }, // 公告信息
      is_publish: false, //是否推送企业微信
      publish_type: "", //
      assignVisible: false,
      dialogType: "", // 弹框类型
      assignInfo: {
        name: "",
        group_id: "",
        users: [],
        comment: "",
      },
      groupUserList: [
        { uid: 1, name: "huaxing" },
        { uid: 2, name: "huaxing1" },
        { uid: 3, name: "huaxing" },
      ],
      usersList: [], // 人员列表
      currentGroup: "", // 当前组
      submitLoading: false, // 确定按钮loading
    };
  },
  methods: {
    // 切换权限
    select_permissions() {
      if (this.is_publish === true) {
        this.noticeInfo.permissions = "all";
        this.publish_type = "Test";
      } else {
        this.noticeInfo.permissions = "";
        this.publish_type = "";
      }
    },
    // changeGroupUser(e, item) {
    //   console.log('e', e, 'item', item)
    //   apiTool.get(`account/sms_members_simplify?detail_uid=${e}`).then(res => {
    //     this.formData.field_list.forEach((element, index) => {
    //       if (element.field_key === 'group'){
    //         let flagindex = element
    //         if (res.data.result) {
    //           flagindex.field_value = res.data.result.group
    //         } else{
    //           flagindex.field_value = ''
    //         }
    //         this.$set(this.formData, index, flagindex)
    //       }
    //     })
    //   })
    // },
    // changeGroupUser11(e) {
    //   apiTool.get(`account/sms_members_simplify?detail_uid=${e}`).then(res => {
    //     this.form.leader_group_id = res.data.result.group_id
    //     console.log(res.data.result.group_id)
    //   })
    // }
  },
  //   props: ["groupUserList"],
};
</script>

<style>
.el-form-item {
  display: flex;
    justify-content: left;
    /* align-items: left; */
}
</style>