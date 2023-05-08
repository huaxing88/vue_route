<template>
  <div class="table_form">
    <el-form
      style="margin: 0 auto"
      ref="virtualIPform"
      :model="virtualIPform"
      :rules="virtualIPform.rules"
    >
      <el-table :data="virtualIPform.virtualIP">
        <el-table-column label="序号" type="index" width="50px">
        </el-table-column>
        <el-table-column prop="networkIP" label="内网IP">
          <div class="block_item" slot-scope="scope">
            <el-form-item
              :prop="'virtualIP.' + scope.$index + '.networkIP'"
              :rules="virtualIPform.rules.requiredIP"
            >
              <el-input
                class="item__input"
                v-model="scope.row.networkIP"
                placeholder="请填写内网IP"
              >
              </el-input>
            </el-form-item>
            <div v-show="virtualIPform.field_attribute === 1" class="item__txt">
              {{ scope.row.networkIP }}
            </div>
          </div>
        </el-table-column>
        <el-table-column prop="outsideIP" label="外网IP">
          <div class="block_item" slot-scope="scope">
            <el-form-item
              :prop="'virtualIP.' + scope.$index + '.outsideIP'"
              :rules="virtualIPform.rules.optionalIP"
            >
              <el-input
                class="item__input"
                v-model="scope.row.outsideIP"
                placeholder="请填写外网IP"
              >
              </el-input>
            </el-form-item>
            <div v-show="virtualIPform.field_attribute === 1" class="item__txt">
              {{ scope.row.outsideIP }}
            </div>
          </div>
        </el-table-column>
        <el-table-column prop="natIP" label="NAT网关IP">
          <div class="block_item" slot-scope="scope">
            <el-form-item
              :prop="'virtualIP.' + scope.$index + '.natIP'"
              :rules="virtualIPform.rules.optionalIP"
            >
              <el-input
                class="item__input"
                v-model="scope.row.natIP"
                placeholder="请填写NAT网关IP"
              ></el-input>
            </el-form-item>
            <div v-show="virtualIPform.field_attribute === 1" class="item__txt">
              {{ scope.row.natIP }}
            </div>
          </div>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="
                deleteRow(scope.$index, virtualIPform.virtualIP)
              "
              type="text"
              size="small"
            >
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
    <div
      style="border-bottom: 1px solid #ebeef5"
      slot="append"
      class="append-more"
    >
      <span
        class="el-icon-circle-plus-outline"
        style="cursor: pointer; color: #b0b3b5"
        @click="add"
        >添加一行...</span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkVIp = (rule, value, callback) => {
      let p = new RegExp(
        /^(([1-9]?\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}([1-9]?\d|1\d{2}|2[0-4]\d|25[0-5])$/
      );
      if (!value || p.test(value)) {
        return callback();
      } else {
        return callback(new Error("请输入正确的IP"));
      }
    };
    return {
      virtualIPform: {
        virtualIP: [
          {
            outsideIP: "",
            networkIP: "",
            natIP: "",
          },
        ],
        field_attribute: 2,
        rules: {
          requiredIP: [
            { required: true, message: "不能为空" },
            { validator: checkVIp, trigger: ["change", "blur"] },
          ],
          optionalIP: { validator: checkVIp, trigger: ["change", "blur"] },
        },
      },
      editProp: ["outsideIP", "networkIP", "natIP"],
    };
  },
  methods: {
    /** click移除一行 */
    deleteRow(index, rows) {
      if (this.virtualIPform.virtualIP.length === 1) {
        this.$message("只有一条数据，无法删除");
      } else {
        rows.splice(index, 1);
      }
    },
    /** click添加一行 */
    add() {
      this.virtualIPform.virtualIP.push({
        outsideIP: "",
        networkIP: "",
        natIP: "",
      });
    },
  },
};
</script>

<style>
.cascader .el-cascader-panel .el-radio {
  width: 100%;
  height: 100%;
  z-index: 10;
  position: absolute;
  top: 0;
  right: 0;
}
.cascader .el-cascader-panel .el-radio__input {
  visibility: hidden;
}
.cascader .el-cascader-panel .el-cascader-node__postfix {
  top: 10px;
}
.table_form {
  width: 80%;
  margin: 10px auto;
}
.table_form .el-form-item--small.el-form-item {
  margin-top: 18px;
}
</style>

<style lang='scss' scoped>
  .block_item{
    .item__input{
      width: 100%;
    }
    .item__txt{
      box-sizing: border-box;
      line-height: 24px;
      padding: 0 9px;
    }
  }
</style>