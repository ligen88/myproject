<template>
  <div id="register">
         <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
        <div class="title-container">
            <h3 class="title">注册页面</h3>
        </div>

        <el-form-item prop="username">
            <span class="svg-container">
            <svg-icon icon-class="user" />
            </span>
            <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="请输入您的用户名"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
            />
        </el-form-item>

        <el-form-item prop="password">
            <span class="svg-container">
            <svg-icon icon-class="password" />
            </span>
            <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="请输入您的密码"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
            />
            <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
            </span>
        </el-form-item>

        <el-button type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>
            <p class="tips">已经有帐号？点我去<a @click="goLogin">登录</a></p>
        </el-form>
  </div>
</template>

<script>
    export default {
    name: "Register",
    data() {
        return {
            name:"",
            password:"",
            loginForm:[]
        }
    },
    methods:{
       handleLogin(){
           this.$router.push('/home')
       },
       goLogin(){
           this.$router.push('/logreg/login');
       },
       loginRules(){

       },
       passwordType(){},
       showPwd(){},
       loading(){},
    },
    };
</script>

<style scoped lang="less">

  .bg{
      margin: auto;
      position: absolute;
      height: 60%;
      top:10%;
      left: 30%;
      min-width: 40%;
      min-height: 30%;
      background-color: rgba(224, 226, 223, 0.8);
    }  
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    text-align: center;
    font-size:14px;
    color: rgb(19, 18, 18);
    margin-bottom: 10px;
    a{
        color: rgb(14, 13, 13);
        text-decoration: blue;
    }
    a:hover{
        color: rgb(33, 115, 148);
    }
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: #889aa4;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: rgb(46, 112, 199);
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }


</style>