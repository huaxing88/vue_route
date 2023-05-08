<template>
  <div
    style="width: 100%; margin-bottom: 10px"
  >
    <el-form ref="virtualIPform" :model="virtualIPform" :rules="rules">
      <el-table
        :data="virtualIPform.virtualIP"
      >
        <el-table-column label="序号" type="index" width="50px">
        </el-table-column>
        <el-table-column prop="outsideIP" label="外网IP">
          <div class="item" slot-scope="scope">
            <el-form-item
              :prop="'virtualIP.' + scope.$index + '.outsideIP'"
              :rules="rules.checkIP"
            >
              <el-input
                class="item__input"
                v-model="scope.row.outsideIP"
                placeholder="请输入内容"
              >
              </el-input>
            </el-form-item>
            <div  class="item__txt">
              {{ scope.row.outsideIP }}
            </div>
          </div>
        </el-table-column>
        <el-table-column prop="networkIP" label="内网IP">
          <div class="item" slot-scope="scope">
            <el-form-item
              :prop="'virtualIP.' + scope.$index + '.networkIP'"
              :rules="rules.checkIP"
            >
              <el-input
                class="item__input"
                v-model="scope.row.networkIP"
                placeholder="请输入内容"
              >
              </el-input>
            </el-form-item>
            <div class="item__txt">
              {{ scope.row.networkIP }}
            </div>
          </div>
        </el-table-column>
        <el-table-column prop="natIP" label="NAT网关IP">
          <div class="item" slot-scope="scope">
            <el-form-item
              :prop="'virtualIP.' + scope.$index + '.natIP'"
              :rules="rules.checkIP"
            >
              <el-input
                class="item__input"
                v-model="scope.row.natIP"
                placeholder="请输入内容"
              ></el-input>
            </el-form-item>
            <div class="item__txt">
              {{ scope.row.natIP }}
            </div>
          </div>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="120"
        >
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
    <div slot="append" class="append-more">
      <span style="cursor: pointer" @click="add">添加一行...</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkVIp = (rule, value, callback) =>{
      let p = new RegExp(/^(([1-9]?\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}([1-9]?\d|1\d{2}|2[0-4]\d|25[0-5])$/)
      if (!value || p.test(value)){
        return callback()
      } else {
        return callback(new Error('请输入正确的IP'))
      }
    }
    return {
      virtualIPform: {
        virtualIP: [
          {
            outsideIP: "",
            networkIP: "",
            natIP: "",
          },
        ],
      },
      rules:{
          requiredIP:[
            {required:true,message:'不能为空'},
            {validator:checkVIp,trigger:['change','blur']}
          ],
          optionalIP:{ validator:checkVIp,trigger:['change','blur']}
        },
      editProp: ["outsideIP", "networkIP", "natIP"],
    };
  },
  methods: {},
};
</script>