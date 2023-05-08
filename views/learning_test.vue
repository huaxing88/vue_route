<template>
  <div v-if="formData.state_info && formData.state.label">
    <el-row>
      <div v-for="(item, index) in formData.field_list" :key="'key' + index">
        <el-col :span="item.label.span ? item.label.sapn : 12">
            <el-form-item 
            :label="item.field_name"
            :prop="item.field_key"
            :rules="item.field_key === 'ldap_id' ? 1 : 2"
            v-if="item.field_key == 'ldap_id'"
            >
            <el-input 
            :placeholder="item.label.placeholder"
            class="input-width"
            style="width: 90%"
            :disabled="item.field_attribute === 1"
            v-if="item.field_type_id == 5"
            >

            </el-input>

            </el-form-item>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {},
    };
  },
};
</script>