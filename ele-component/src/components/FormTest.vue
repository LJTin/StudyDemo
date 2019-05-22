<template>
  <div>
    <h1>仿饿了么组件</h1>
    <e-form :model='model' :rules='rules' ref="eLoginForm">
      <e-form-item label='用户名' prop='username'>
        <e-input v-model='model.username'></e-input>
      </e-form-item>
      <e-form-item label='密码' prop='password'>
        <e-input v-model='model.password'></e-input>
      </e-form-item>
    </e-form>
    
    
    <hr>
    <h1>饿了么表单组件</h1>
    <el-form :model="model" :rules="rules" ref="loginForm" >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm('loginForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import EInput from './EInput'
import EFormItem from './EFormItem'
import EForm from './EForm'
export default {
  data(){
    return {
      model:{
        username:'',
        password:''
      },
      rules:{
        username:[{required:true,message:'请填写用户名'}],
        password:[{required:true,message:'请填写密码'}],
}
    }
  },
  methods:{
    submitForm(form){
      this.$refs[form].validate(valid=>{
        if(valid){
          alert('成功')
        }else{
          alert('失败')
        }
      })
    }
  },
  components:{
    EInput,
    EFormItem,
    EForm
  }
}
</script>
