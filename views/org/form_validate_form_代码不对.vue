<template>
  <el-form :model="instance.items" ref="data" label-width="auto">
    <el-table
      :data="instance.items.filter((data) => handleAdd)"
      tooltip-effect="dark"
      size="small"
      ref="table"
    >
      <template>
        <el-table-column label="人员" align="center" width="420px">
          <template slot-scope="scope">
            <el-form-item
              :prop="scope.$index + '.checkedPersons'"
              :rules="{
                required: true,
                message: '至少要选择一个人员',
                trigger: 'change',
              }"
            >
              <el-checkbox-group
                v-model="instance.items[scope.$index].checkedPersons"
              >
                <el-checkbox
                  v-for="name in xxxPersons"
                  :label="name"
                  :key="name"
                  >{{ name }}</el-checkbox
                >
              </el-checkbox-group>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="时间" align="center">
          <template slot-scope="scope">
            <el-form-item
              :prop="scope.$index + '.time'"
              :rules="rules.requireTime"
            >
              <el-date-picker
                v-model="instance.items[scope.$index].time"
                placeholder="请选择"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                style="width: 100%"
                type="date"
              ></el-date-picker>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="备注" align="center">
          <template slot-scope="scope">
            <el-form-item
              :prop="scope.$index + '.remark'"
              :rules="{
                required: true,
                message: '备注不能为空',
                trigger: 'blur',
              }"
            >
              <el-input
                v-model="instance.items[scope.$index].remark"
                type="textarea"
                :autosize="{ minRows: 5, maxRows: 10 }"
                maxlength="256"
              ></el-input>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="要求" align="center">
          <template slot-scope="scope">
            <el-form-item
              :prop="scope.$index + '.require'"
              :rules="{
                required: true,
                message: '要求不能为空',
                trigger: 'blur',
              }"
            >
              <el-input
                v-model="instance.items[scope.$index].require"
                type="textarea"
                :autosize="{ minRows: 5, maxRows: 10 }"
                maxlength="256"
              ></el-input>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="备注2" align="center">
          <template slot-scope="scope">
            <el-form-item
              :prop="scope.$index + '.remark2'"
              :rules="{
                required: true,
                message: '备注2不能为空',
                trigger: 'blur',
              }"
            >
              <el-input
                v-model="instance.items[scope.$index].remark2"
                type="textarea"
                :autosize="{ minRows: 5, maxRows: 10 }"
                maxlength="256"
              ></el-input>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              @click="handleDelete(scope.$index)"
              type="text"
              size="small"
              >移除</el-button
            >
          </template>
        </el-table-column>
      </template>
    </el-table>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      rules: {
        requireTime: [
          { required: true, message: "请输入要求时间", trigger: "blur" },
          {
            validator: (rule, value, callback) => {
              var inputTime = value;
              let requireTime = this.item.requestTime;
              //用户输入的时间大于要求时间
              if (inputTime > requireTime) {
                callback(new Error("不能大于要求时间"));
              }
              callback();
            },
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 添加行
    handleAdd() {
      let row = {
        name: "",
        checkedPersons: [],
        time: "",
        remark: "",
        require: "",
        remark2: "",
      };
      this.instance.items.push(row);
    },
    handleDelete(index) {
      this.instance.items.splice(index, 1);
    },
  },
};
</script>