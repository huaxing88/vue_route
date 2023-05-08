<!--  -->
<template>
  <div>
      和：{{sum}}
      <button @click="add">+</button>
  </div>
</template>

<script>
export default {
   name:'',
   props:['init'],
   data () {
    return {
        sum:this.init
    };
   },
   methods: {
       add() {
           this.sum++
       }
   },
}
</script>
<style lang='scss' scoped>
</style>

// 使用props的值
<count :init="9"></count>
