<template>
  <div id="app">
    <p>{{ num }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1
    }
  },
  methods: {
    increment() {
      this.num += 1
    }
  }
}
</script>

<style>

</style>