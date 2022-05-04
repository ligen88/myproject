<template>
  <div class="login-container">
    <h2>登录页面</h2>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="帐号" prop="name">
        <el-input
          type="username"
          v-model="ruleForm.name"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button 
        type="primary" 
        @click="submitForm('ruleForm')"
        :disabled="sub"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
    <p>
      还没有帐号？点我前去<router-link to="/logreg/register">注册</router-link>
    </p>
  </div>
</template>

<script>
import request from "@/api/requset";
import throttle from 'lodash/throttle'
export default {
  name: "Login",
  data() {
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入帐号"));
      } else {
        if (this.ruleForm.checkName !== "") {
          this.$refs.ruleForm.validateField("name");
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.name !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        pass: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入帐号", trigger: "blur" },
          {
            min: 6,
            max: 10,
            message: "长度在6-10个字符之间且不要输入特殊字符",
            trigger: "blur",
          },
        ],
        pass: [
          { validator: validatePass, trigger: "blur" },
          {min:6,max:16,message:"长度在6-16个字符之间且不要输入特殊字符",trigger:'blur'}
        ],
      },
    };
  },
  methods: {
    submitForm:throttle(function(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          request
            .post("http://127.0.0.1:8088/api/login", {
              username: this.ruleForm.name,
              password: this.ruleForm.pass,
            })
            .then((res) => {
              if(res.status==200){
                    const user = JSON.stringify(res);
                    localStorage.setItem("user", user);
                    this.$notify({
                        title: "成功",
                        message: "用户登录成功",
                        type: "success",
                    });
                    this.$router.replace("/home/questionlist");
              }
              else{
                  this.$notify({
                        title: "出错了",
                        message: "用户帐号或者密码不正确,请于5秒后重试",
                        type: "error",
                    });
                   this.$router.replace("/").catch(err =>{});
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },5000)
  },
  computed:{
      sub(){
          return !(this.ruleForm.name&&this.ruleForm.pass)
      }
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem("user"));
    this.ruleForm.name = user.username;
    this.ruleForm.pass = user.password;
    request.post("http://127.0.0.1:8088/api/verify").then((res)=>{
        if(res.status==200){
             this.$notify({
                        title: "成功",
                        message: "用户登录成功",
                        type: "success",
                    });
            this.$router.replace('/home/questionlist');
        }
    });
  },
};
</script>

<style scoped lang="less">
.login-container {
  h2 {
    margin-left: 15%;
    color: rgb(104, 94, 192);
    display: block;
    text-align: center;
    font-size: 30px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
  .el-form {
    margin-left: 10%;
    margin-top: 10%;
    width: 80%;
    .el-button {
      width: 320px;
    }
  }
  p {
    margin-left: 15%;
    text-align: center;
  }
}
</style>