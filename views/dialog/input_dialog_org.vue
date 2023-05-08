<template>
    <div>
      <el-button type="text" @click="showDialog">
        打开嵌套表单的 Dialog
      </el-button>
  
      <el-dialog title="活动" :visible.sync="dialogVisible">
        <el-form :model="form">
          <el-form-item label="活动名称" label-width="80px">
            <el-input ref="nameInput" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动内容" label-width="80px">
            <el-input v-model="form.content"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dialogVisible: false,
        form: {
          name: '',
          content: ''
        }
      }
    },
    methods: {
      showDialog() {
        this.dialogVisible = true
        // 如果弹框显示，则自动聚焦
        this.$nextTick(() => {
          this.$refs.nameInput.focus()
        })
      }
    }
  }
  </script>