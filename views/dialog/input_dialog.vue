<template>
  <div>
    <el-button type="text" @click="showDialog">
      打开嵌套表单的 Dialog
    </el-button>

    <el-dialog title="活动" :visible.sync="dialogVisible">
      <el-form>
        <el-form-item label="是否发布">
          <el-switch v-model="noticeInfo.is_public"> </el-switch>
        </el-form-item>
        <el-form-item v-if="noticeInfo.is_public" label="推送企业微信">
          <el-switch v-model="is_publish" @change="select_permissions">
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
            <el-radio label="member" :disabled="is_publish"
              >按人员选择</el-radio
            >
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
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      noticeInfo: {
        content: "",
      }, // 公告信息
      is_publish: false, //是否推送企业微信
      publish_type: "", //
      dialogVisible: false,
      form: {
        name: "",
        content: "",
      },
    };
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
      // 如果弹框显示，则自动聚焦
      this.$nextTick(() => {
        this.$refs.nameInput.focus();
      });
    },
  },
};
</script>

<style>
.parent-dialog .el-dialog {
  /* 居中弹框 */
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 !important;
  transform: translate(-50%, -50%);
  /* // 防止超出视窗 */
  max-height: calc(100% - 30px);
  max-width: calc(100% - 30px);
  /* //实现body内部滚动 */
  display: flex;
  flex-direction: column;
}
.el-dialog__body {
    overflow: auto;
  }
</style>