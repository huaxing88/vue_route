<template>
  <div>
    <el-dialog
        title="提示"
        :visible.sync='resetVisible'
        width="30%"          :before-close="handleClose">
        <span>确认重置表单数据？</span>
        <span slot="footer" class="dialog-footer">
        <el-button>取消</el-button>
        <el-button>确认</el-button>
        </span>
    </el-dialog>
  </div>
</template>
  
  <script>
export default {
  methods: {
    // 不懂，就这么看着写
    handleClose (done) {
        this.$confirm('返回重新编辑？').then(_ => {
                        console.log(_)
            done()
        }).catch(_ => {
            console.log(_)
        })
        },
  },
};
</script>