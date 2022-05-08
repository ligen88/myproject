<template>
  <div>
    <el-container class="outer">
      <el-aside width="20%">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu 
              default-active="1"
              class="el-menu-vertical-demo"
            >
              <el-menu-item index="1">
                  <i class="el-icon-user"></i>
                  <span slot="title">个人信息</span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">测试2</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">测试3</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">测试4</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
          </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Userinfo",
  components: {},

  data() {
    return {
        isCollapse:true,
    };
  },
  methods: {},
};
</script>

<style scoped lang=less>
.el-container {
  height: 800px;
  .el-aside {
    overflow: hidden;
    width: 15%;
    height: 800px;
  }
  .el-main {
    background-color: #f0f5f2;
  }
  .el-header {
    background-color: rgb(97, 111, 240);
  }
  .el-footer {
    background-color: #bfa;
  }
}
</style>