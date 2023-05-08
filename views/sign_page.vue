<template>
  <div class="admin-view">
    <section class="admin-view">
      <el-form ref="adminForm" :model="adminForm" label-width="110px">
        <el-row>
          <el-col :span="7">
            <el-form-item label="电子签认名称">
              <el-input
                v-model="adminForm.name"
                placeholder="填写电子签认名称"
                clearable
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="完成状态">
              <el-select v-model="adminForm.status" placeholder="请选择完成状态">
                <el-option label="已完成" value="1"></el-option>
                <el-option label="未完成" value="0"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="员工姓名">
              <el-input
                v-model="adminForm.username"
                placeholder="填写员工姓名"
                clearable
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="归属公司">
              <select-company
                v-model="adminForm.hr_com"
                :placeholder="'请选择归属公司'"
              ></select-company>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="签发负责人">
              <el-input
                v-model="adminForm.creator"
                placeholder="填写签发负责人"
                clearable
              ></el-input>
            </el-form-item>
          </el-col>
          <el-button
            type="primary"
            icon="el-icon-search"
            style="margin-left: 40px"
            >搜索</el-button
          >
        </el-row>
      </el-form>
    </section>
    <section>
      <el-table :data="adminList" style="width: 100%" v-loading="tableLoading">
        <el-table-column
          prop="id"
          label="ID"
          align="center"
          width="70px"
        ></el-table-column>
        <el-table-column
          prop="username"
          label="员工姓名"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="电子签认名称"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="group"
          label="归属小组"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="hr_com"
          label="归属公司"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="group_leader_name"
          label="团队负责人"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="creator"
          label="签发负责人"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="createTime"
          label="签发时间"
          align="center"
        ></el-table-column>
        <el-table-column label="是否完成签署" align="center">
          <template slot-scope="scope">
            <el-tag :type="scope.row.isPublish ? 'success' : 'danger'">{{
              scope.row.isPublish ? "已完成" : "未完成"
            }}</el-tag>
            <el-button
              type="text"
              v-show="scope.row.isPublish"
              @click="resetSigned(scope.row)"
              >重置</el-button
            >
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="180px">
          <template slot-scope="scope">
            <el-button type="text" @click="checkDetail(scope.row)" size="small"
              >查看</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </section>
    <section>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </section>
  </div>
</template>

<script>
import SelectCompany from '/src/common-comps/select_company.vue'
export default {
  data() {
    return {
      adminForm: {},
      adminList: [
        {
          id: 1,
          name: "员工安全协议1",
          username: "郭亚琴",
          group: "公共研发中心/前端技术一组",
          hr_com: "合同制",
          secondary_group_leader: "张晨曦",
          group_leader_name: "张晨曦",
          creator: "龙军",
          createTime: "2017-06-27",
          isPublish: false,
        },
        {
          id: 2,
          name: "员工安全协议2",
          username: "郭亚琴",
          group: "公共研发中心/前端技术一组",
          hr_com: "合同制",
          secondary_group_leader: "张晨曦",
          group_leader_name: "张晨曦",
          creator: "龙军",
          createTime: "2017-06-27",
          isPublish: true,
        },
      ],
      currentPage: 1,
      pageSize: 10,
      total: 0,
    };
  },
  components: {
    SelectCompany,
  },
  mounted() {},
  methods: {
    // 切换页面
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    // 改变当前页面的pageSize
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
    },
    // 重置
    resetSigned(row) {
      console.log(row);
    },
    // 查看详情
    checkDetail(row) {
      console.log(row);
    },
  },
};
</script>
<style scoped>
.admin-view {
  width: 100%;
  padding: 20px 40px;
}
.admin-pagination {
  margin: 20px 0;
  text-align: center;
}
</style>