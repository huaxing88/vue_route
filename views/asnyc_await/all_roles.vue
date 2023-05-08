<template>
  <div>
    <el-table v-loading="loading" :data="dataList" border>
      <el-table-column label="角色名" prop="name" :formatter="emptyStringFormatter.table"></el-table-column>
      <el-table-column label="角色描述" prop="comment" :formatter="emptyStringFormatter.table"></el-table-column>
    </el-table>
    <div class="dx-flex justify-end mt-10">
      <el-pagination
        :current-page="queryForm.paging.page"
        :page-size="queryForm.paging.per_page"
        :total="queryForm.paging.total_record"
        :sizes="paging.sizes"
        :layout="paging.layout"
        @current-change="pageIndexChange"
        @size-change="pageSizeChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  },
  mounted() {

  },
  methods: {
    async queryImpl() {
      try {
        const res = await AccountService(this.queryForm)
        this.setResult(res.result.userGroupInfos, res.result.paging.tatal_record)
      } catch (e) {
        console.error(e);
        
      }
    }
  },
}

</script>
<style scoped lang='less'>
</style>