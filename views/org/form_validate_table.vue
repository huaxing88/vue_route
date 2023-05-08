<template>
  <div class="boxShadow">
   <div style="margin-top: 20px"> 
    <el-table
     :data="tables"
     ref="multipleTable"
     tooltip-effect="dark"
     style="width: 100%"
     @selection-change='selectArInfo'>
     <el-table-column type="selection" width="45px"></el-table-column>
     <el-table-column label="序号" width="62px" type="index">
     </el-table-column>
     <template v-for='(col) in titleData'>
      <el-table-column
       sortable
       :show-overflow-tooltip="true"
       :prop="col.dataItem"
       :label="col.dataName"
       :key="col.dataItem"
       width="124px">
      </el-table-column>
     </template>
     <el-table-column label="操作" width="80" align="center">
      <template slot-scope="scope">
       <el-button size="mini" class="del-com" @click="delTabColOne()" ><i class="iconfont icon-shanchu"></i></el-button>
      </template>
     </el-table-column>
    </el-table>
   </div>
  </div>
 </template>

<script>
export default {
  data () {
   return {
    tables: [{
     xiaoxue: '福兰',
     chuzhong: '加芳',
     gaozhong: '蒲庙',
     daxue: '西安',
     yanjiusheng: '西安',
     shangban: '北京'
    }, {
     xiaoxue: '南坊',
     chuzhong: '礼泉',
     gaozhong: '礼泉',
     daxue: '西安',
     yanjiusheng: '西安',
     shangban: '南坊'
    }, ],
    titleData: [{
     dataItem: 'xiaoxue',
     dataName: '小学'
    }, {
     dataItem: 'chuzhong',
     dataName: '初中'
    }, {
     dataItem: 'gaozhong',
     dataName: '高中'
    }, {
     dataItem: 'daxue',
     dataName: '大学'
    }, {
     dataItem: 'yanjiusheng',
     dataName: '研究生'
    }, {
     dataItem: 'shangban',
     dataName: '上班'
    }]
   }
  }
}
</script>