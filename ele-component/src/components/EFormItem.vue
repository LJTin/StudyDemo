<template>
  <div>
    <label v-if='label'>{{label}}</label>
    <!-- input占位符 -->
    <slot></slot>  
    <!-- 展示错误信息 -->
    <p class="error" v-if='error'>{{error}}</p>
  </div>
</template>
<script>
import Schema from 'async-validator'
export default {
  inject:['form'],
  props:{
    label:{
      type:String,
      default:''
    },
    prop:{
      type:String
    }
  },
  data(){
    return {
      error:''
    }
  },
  mounted(){
    // 监听校验事件
    this.$on('validate',this.validate)
  },
  methods:{
    // 执行具体的校验
    
    validate(){
      // 1.获取校验规则
      const rules = this.form.rules[this.prop];
      // 2.获取数据模型
      const value = this.form.model[this.prop];
      //3.校验对象
      const descriptor = {[this.prop]:rules}
      //4.创建校验器
      const schema = new Schema(descriptor)
      //5.校验
      schema.validate({[this.prop]:value},errors=>{
        if(errors){
          this.error = errors[0].message
        }else{
          this.error = ''
        }
      })
    }
  }
}
</script>
<style scoped>
.error{
  color:red;
  font-size:12px;
}
</style>
