<template>
  <el-select
    v-model="selected"
    filterable
    :clearable="clearable"
    :loading="loading"
    :disabled="disabled"
    :placeholder="placeholder"
    :allow-create="allowCreate"
    :style="{width}"
    @clear="onClear"
  >
    <el-option v-for="item in dataList" :key="item.company_id" :value="item.name" :label="item.name" />
  </el-select>
</template>

<script>

export default {
  name: 'SelectCompany',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100%'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    allowCreate: {
      type: Boolean,
      default: false
    },
    excludeByName: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selected: '',
      loading: false,
      dataList: []
    }
  },
  watch: {
    selected() {
      this.$emit('change', this.selected || null)
    },
    value: {
      immediate: true,
      handler() {
        this.selected = this.value
      }
    }
  },
  created() {
    this.query()
  },
  methods: {
    reset() {
      this.selected = null
    },
    onClear() {
      this.selected = null
    },
    async query() {
      this.dataList = []
    }
  }
}
</script>
