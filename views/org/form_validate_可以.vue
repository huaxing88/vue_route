<template>
  <div class="left_Box">
    <div class="btnTool" style="text-align: right">
      <el-button type="primary" size="mini" @click="addDomain"
        >新增行</el-button
      >
      <el-button
        type="primary"
        size="mini"
        @click="clear_btn('dynamicValidateForm')"
        >清空</el-button
      >
      <el-button
        type="primary"
        size="mini"
        @click="submitForm('dynamicValidateForm')"
        >存为模板</el-button
      >
    </div>
    <div>
      <el-form
        :model="dynamicValidateForm"
        ref="dynamicValidateForm"
        label-width="100px"
        :inline="true"
        class="demo_dynamic"
      >
        <div
          v-for="(domain, index) in dynamicValidateForm.domains"
          :key="index"
          class="dv_hang"
        >
          <el-form-item
            :key="domain.key"
            :prop="'domains.' + index + '.lx'"
            :rules="{
              required: true,
              message: '不能为空',
              trigger: 'blur',
            }"
          >
            <el-input
                  size="small"
                  v-model="domain.lx"
                  maxlength="15"
                  autocomplete="off"
                  style="width: 100%"
                ></el-input>
          </el-form-item>

          <el-form-item
            :key="domain.key1"
            :prop="'domains.' + index + '.qsfw'"
            :rules="{
              required: true,
              message: '不能为空',
              trigger: 'blur',
            }"
          >
            <label>时间范围</label>
            <el-input-number
              v-model="domain.qsfw"
              :min="0"
              :precision="2"
              :step="0.1"
              size="small"
            ></el-input-number>
            <!-- <el-input v-model="domain.qsfw" size="small"></el-input> -->
          </el-form-item>

          <el-form-item
            :key="domain.key2"
            :prop="'domains.' + index + '.zzfw'"
            :rules="{
              required: true,
              message: '不能为空',
              trigger: 'blur',
            }"
          >
            <label>至 </label>
            <el-input-number
              v-model="domain.zzfw"
              :min="0"
              :precision="2"
              :step="0.1"
              size="small"
            ></el-input-number>
            <!-- <el-input v-model="domain.zzfw" size="small"></el-input> -->
          </el-form-item>

          <el-form-item
            :key="domain.key3"
            :prop="'domains.' + index + '.zsxs'"
            :rules="{
              required: true,
              message: '不能为空',
              trigger: 'blur',
            }"
          >
            <label>折算比例</label>
            <el-input-number
              v-model="domain.zsxs"
              :min="0"
              :precision="2"
              :step="0.1"
              size="small"
            ></el-input-number>
            <!-- <el-input v-model="domain.zsxs" size="small"></el-input> -->
            <el-button
              @click.prevent="removeDomain(domain)"
              size="small"
              class="delhang_class"
              >删除行</el-button
            >
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        domains: [
          {
            lx: "", //状态符
            qsfw: "", //起始范围
            zzfw: "", //截止范围
            zsxs: "", //折算比例
          },
        ],
      },
    };
  },
  methods: {
    removeDomain(item) {
      //删除行
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      //新增行
      this.dynamicValidateForm.domains.push({
        lx: "", //状态符
        qsfw: "", //起始范围
        zzfw: "", //截止范围
        zsxs: "", //折算比例
        key: Date.now(),
      });
    },
    submitForm(formName) {
      //保存按钮
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.dynamicValidateForm.domains);
          this.savemoban(this.dynamicValidateForm.domains);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    clear_btn(formName) {
      this.$refs[formName].resetFields();
    },
    savemoban(domainsdata) {
      //存为模板
      let params = {
        zsgs: domainsdata,
      };
      this.servicept
        .post("/sbdZhzbFx/saveCaclueFormula", params)
        .then((res) => {
          if (res.data.msg == "成功") {
            this.$message.success("成功！");
          } else {
            this.$message.error("失败！");
          }
        })
        .catch((res) => {});
    },
  },
};
</script>