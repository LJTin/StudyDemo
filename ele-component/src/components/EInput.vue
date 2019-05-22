<template>
  <div>
    <input :type="type" :value='value' @input='onInput'>
  </div>
</template>
<script>
export default {
  props:{
    value:{
      type:String,
      default:''
    },
    type:{
      type:String,
      default:'text'
    }
  },
  methods:{
    onInput(e){
      //派发事件，通知父组件输入值发生了变化
      this.$emit('input',e.target.value)
      // 通知父组件做校验
      this.$parent.$emit('validate')
    }
  }
}
</script>
