<template>
  <div class="register-container">
    <h2>注册页面</h2>
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
          type="name"
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
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
      </el-form-item>
    </el-form>
     <p>已经有帐号了？点我前去<router-link to="/logreg/login">登录</router-link></p>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        name: "",
      },
      rules: {
           name:[
              {required:true,message:'请输入帐号',trigger:'blur'},
              {min:6,max:10,message:"长度在6-10个字符之间且不要输入特殊字符",trigger:'blur' }],
        pass: [
          { validator: validatePass, trigger: "blur" },
          {
            min: 6,
            max: 10,
            message: "长度在6-10个字符之间且不要输入特殊字符",
            trigger: "blur",
          },
        ],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped lang="less">
.register-container {
  h2 {
      margin-left:15% ;
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
     .el-button{
        width: 320px;
    }
  }
  p{
      margin-left:15% ;
      text-align: center;
  }
}
</style>