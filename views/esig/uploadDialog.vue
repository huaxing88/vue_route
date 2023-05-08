<template>
  <div class="upload-dialog">
    <el-dialog title="上传签署文件" :visible.sync="uploadDialogVisible" top="7vh" 
    @close="closeDialog" :close-on-click-modal="false" custom-class="sign-detail-dialog">
      <userinfo-vue ref="userinfoVue" :userInfo="uploadInfo"></userinfo-vue>
      <el-card>
        <section class="esign-upload">
          <el-upload name="safety">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">点击或将拖拽到这里上传</div>
            <div class="el-upload__text tip">
              <span>仅支持</span>
              <span class="text-primary">单个文件</span>
              <span>上传，且该文件不能超过</span>
              <span class="text-primary">20MB</span>
            </div>
          </el-upload>
        </section>
        <section class="upload-preview" v-show="pdfSrc">
          <iframe src="pdfSrc" width="100%" height="700px"></iframe>
        </section>
      </el-card>
      <div class="dialog-footer" slot="footer">
        <el-button @click="closeDialog" :loading="dialogLoading">取消</el-button>
        <el-button type="primary" @click="uploadSignFile" :loading="dialogLoading">上传文件</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import userInfoVue from './userInfo.vue';
export default {
  data () {
    return {
      uploadDialogVisible: false,
      dialogLoading: false,
      uploadInfo: {},
      pdfSrc: '',
      fileInfo: {}
    }
  },
  components: {
    userInfoVue
  },
  mounted() {

  },
  methods: {
    showUploadDialog(row) {
      this.uploadDialogVisible = true
      this.uploadInfo = row
      if (row.file) {
        this.pdfSrc = 'https://portal-dev.ctyuncdn.cn${row.file}'
        console.log(this.pdfSrc)
      }
    },
    closeDialog() {
      this.uploadDialogVisible = false
      this.uploadInfo = {}
      this.pdfSrc = ''
      this.fileInfo = {}
    },
    uploadSignFile(option) {
      console.log('upladEsignFile', option)
      this.pdfSrc = this.getObjectURL(option.file)
      this.fileInfo = option
      console.log('pdfSrc', this.pdfSrc)
    }
  },
}

</script>
<style scoped lang='less'>
.upload-dialog .esign-upload {
  text-align: center;
}
</style>

<style scoped lang='less'>
.upload-dialog .el-dialog__body {
  max-height: 70vh;
  overflow: auto;
}
.upload-dialog .el-upload__input {
  display: none;
}
</style>