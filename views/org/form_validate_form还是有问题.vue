<template>
  <div class="candidatesFirstFormDialog">
    <div>符合全部以下条件，相应的指标数据在小程序端不显示且不会触发报警</div>
    <el-form
      :model="conditionsRulesForm"
      ref="addCondition"
      :rules="conditionsFormRules"
      style="margin-left: 40px; margin-bottom: 55px; margin-top: 40px"
    >
      <div
        v-for="(item, index) in conditionsRulesForm.iotDataList"
        :key="index"
      >
        <el-row>
          <el-col :span="4" style="margin-right: 10px">
            <el-form-item
              class="monitorNumber"
              label="指标："
              :prop="'iotDataList.' + index + '.monitorNumber'"
              :rules="conditionsFormRules.monitorNumber"
            >
              <el-select
                style="width: 60%"
                v-model="item.monitorNumber"
                size="small"
              >
                <el-option
                  v-for="item in ruleContentSelect2"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4" style="margin-right: 10px">
            <el-form-item
              class="filterConditionType"
              label="监测值："
              :prop="'iotDataList.' + index + '.filterConditionType'"
              :rules="conditionsFormRules.filterConditionType"
            >
              <el-select
                style="width: 50%"
                v-model="item.filterConditionType"
                size="small"
              >
                <el-option
                  v-for="item in monitoringValueList"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="2" style="margin-right: 10px">
            <el-form-item
              class="filterConditionValue"
              :prop="'iotDataList.' + index + '.filterConditionValue'"
              :rules="conditionsFormRules.filterConditionValue"
            >
              <el-input
                size="small"
                v-model="item.filterConditionValue"
                maxlength="15"
                autocomplete="off"
                style="width: 100%"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" style="margin-right: 10px; width: 17.6%">
            <el-form-item
              label="隐藏指标："
              class="filteredMonitorNumber"
              :prop="'iotDataList.' + index + '.filteredMonitorNumber'"
              :rules="conditionsFormRules.filteredMonitorNumber"
            >
              <el-select
                style="width: 50%"
                v-model="item.filteredMonitorNumber"
                size="small"
              >
                <el-option
                  v-for="item in ruleContentSelect2"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5" style="margin-right: 10px; width: 21.8%">
            <el-form-item
              label="条件状态："
              :prop="'iotDataList.' + index + '.status'"
              :rules="conditionsFormRules.status"
            >
              <el-switch
                class="tablescope"
                v-model="item.status"
                :active-value="true"
                :inactive-value="false"
                active-color="#fe000c"
                active-text="开"
                inactive-text="关"
                inactive-color="#bdbdbd"
                style="width: 60%"
              />
            </el-form-item>
          </el-col>
          <!-- 删除按钮 -->
          <el-col :span="1">
            <el-tooltip
              class="item"
              effect="dark"
              content="删除"
              placement="top"
            >
              <el-button
                @click="delConditions(index)"
                style="
                  border: none;
                  background: none;
                  padding: 0px;
                  margin-top: 4px;
                "
              >
                <i class="el-icon-remove-outline" style="font-size: 20px"></i>
              </el-button>
            </el-tooltip>
          </el-col>
        </el-row>
      </div>
      <div>
        <el-tooltip
          class="item"
          effect="dark"
          content="添加条件"
          placement="top"
        >
          <el-button
            @click="addConditions"
            style="
              cursor: pointer;
              width: 83%;
              color: #fe000c;
              border: 1px dashed #fe000c;
              height: 40px;
              padding: 0px;
              margin-top: 10px;
              margin-left: 20px;
              font-size: 26px;
            "
          >
            +
          </el-button>
        </el-tooltip>
      </div>
    </el-form>
    <div
      slot="footer"
      class="dialog-footer"
      style="text-align: center; position: absolute; bottom: 30px; width: 100%"
    >
      <el-button type="danger" plain @click="handleEditCancel" size="small"
        >取消</el-button
      >
      <el-button
        style="margin-top: 12px"
        type="danger"
        @click="handleEditSave('addCondition')"
        size="small"
        >保存</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      conditionsRulesForm: {
        iotDataList: [
          {
            monitorNumber: "", // 指标
            filterConditionType: "", //检测值
            filterConditionValue: "", // 隐藏指标
            lubricationPointNumber: "", // 润滑点编号
            status: true, // 状态
          },
        ],
      }, // 过滤条件表单
    };
  },
  methods: {
    //条件设立中添加一行
    addConditions() {
      if (this.conditionsRulesForm.iotDataList.length <= 10) {
        this.conditionsRulesForm.iotDataList.push({
          monitorNumber: "", // 指标
          filterConditionType: "", //检测值类型
          filterConditionValue: "", // 检测值
          lubricationPointNumber: "", // 润滑点编号
          filteredMonitorNumber: "", // 隐藏指标
          status: true, // 状态
        });
      } else {
        this.$message("最多可添加十项条件");
      }
    },
  },
};
</script>