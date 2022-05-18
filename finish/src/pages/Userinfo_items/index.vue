<template>
  <el-container>
    <el-main>
      <p>个人信息</p>
      <el-link type="danger" @click="editinfo">编辑信息</el-link>
      <el-dialog
        title="提示"
        :visible.sync="visible"
        width="30%"
        center
      >
       <span>用户电话</span> <el-input v-model="phone" placeholder=""></el-input>
       <span>用户名</span> <el-input v-model="nickname" placeholder=""></el-input>
       <span>用户地址</span><el-input v-model="address" placeholder=""></el-input>
       <span>用户备注</span><el-input v-model="info" placeholder=""></el-input>
        
        <span slot="footer" class="dialog-footer">
          <el-button @click="visible = false">取 消</el-button>
          <el-button type="primary" @click="visible = false">确 定</el-button>
        </span>
      </el-dialog>
      <el-divider></el-divider>
      <el-descriptions class="margin-top" :column="1" border>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            用户名
          </template>
          {{ nickname }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            手机号
          </template>
          {{ phone }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            备注
          </template>
          <el-tag size="small"> {{ info }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            联系地址
          </template>
          {{ address }}
        </el-descriptions-item>
      </el-descriptions>
      <div id="main"></div>
    </el-main>
  </el-container>
</template>


<script>
import * as echarts from "echarts";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "items",
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    ...mapState("user", [ "nickname", "address", "info"]),
    phone:{
        get(){
            return this.$store.state.user.phone
        },
        set(value){
            return value
        }
        
    }
  },
  methods: {
    editinfo() {
      this.visible = true;
    },
  },
  mounted() {
      console.log(this);
    this.$store.dispatch('user/getuserinfo')
  }
};
</script>

<style scoped lang="less">
.el-container {
  height: 750px;
  .el-link {
    font-size: 15px;
    display: block;
    float: right;
  }
  .el-main {
    background-color: #fff;

    p {
      font: normal bold 25px "Helvetica Neue", Helvetica, "PingFang SC",
        "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
    #main {
      height: 300px;
      width: 400px;
    }
  }
}
</style>