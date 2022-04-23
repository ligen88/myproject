<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    text-color="black"
    active-text-color="rgb(103, 100, 243)"
  >
    <el-menu-item index="1">我的问卷</el-menu-item>
    <el-menu-item index="2" @click="userManage">个人中心</el-menu-item>
    <el-menu-item index="3"><a target="_blank">用户管理</a></el-menu-item>
    <!--用户信息-->
    <el-header>
      <el-dropdown>
        <i class="el-icon-user-solid"></i>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/home/userinfo">
            <el-dropdown-item>我的帐号</el-dropdown-item></router-link
          >
          <el-dropdown-item>修改信息</el-dropdown-item>
          <el-dropdown-item @click.native="quit">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>用户信息</span>
    </el-header>
  </el-menu>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex2: "",
    };
  },
  methods: {
    userManage() {
      this.$router.push("/home/userinfo");
    },
    handleSelect() {
      console.log("header");
    },
    myinfo() {
      this.$router.push("/home/userinfo");
    },
    quit() {
      this.$notify({
        title: "成功",
        message: "你已经成功退出",
        type: "success",
      });
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped lang="less">
#head {
  height: 60px;
  line-height: 60px;
}
.el-menu {
  display: block;
  .el-header {
    text-align: right;
    font-size: 14px;
    .el-icon-user-solid {
      margin-right: 10px;
      color: black;
    }
    span {
      line-height: 60px;
      color: #000;
    }
  }
}
</style>