<template>
  <el-container>  
    <el-header>
        <el-button type="primary" icon="el-icon-search" @click="searchOne">搜索</el-button>
        <el-input v-model="search" placeholder="请输入要查询的内容"></el-input>
    </el-header>
    <el-divider></el-divider>
      <el-main> 
        <div class="questionCard" v-for="item in 6" :key="item.id" >
            <el-card class="box-card" shadow="hover" v-if="!item.isdel">
            <div slot="header" class="clearfix">
                <span>标题</span>
                <div class="tags">         
                <el-tag size="mini" type="info">详情</el-tag>
                <el-tag size="mini" type="warning">状态</el-tag>
                <el-tag size="mini" type="info">数量</el-tag>
                <el-tag size="mini" type="danger">时间信息</el-tag>
                </div>
            </div>
            <div class="questionAbout">
                <el-link @click="qdesign(item)" icon="el-icon-edit">问卷设计</el-link>
                <el-link icon="el-icon-document" @click="qsta(item)">问卷统计</el-link>
                <el-link icon="el-icon-share" @click="qwrite(item)">问卷填写</el-link>
            </div>
           <div class="crud">
                <el-button type="primary" icon="el-icon-close" @click="stop(item)">停止</el-button>
                <el-button type="primary" icon="el-icon-open" @click="send(item)">发布</el-button>
                <el-button type="primary" icon="el-icon-delete" @click='delqlist(item)'>删除</el-button>
          </div>
            </el-card>
        </div>
      </el-main>
  </el-container>
</template>

<script>
export default {
  name: "ModelManage",
  data() {
    return {
      search: "",
      qlist:[{}]
    };
  },
  methods: {
    searchOne() {},
  },
};
</script>

<style scoped lang="less">
.el-container {
    margin: 0 auto;
    height: 800px;
    width: 75%;
  .el-header {
     margin-top:20px;
    .el-button {
     width: 100px; 
     float: right;
    }
    .el-input {
      width: 300px;
      float: right;
    }
  }
  .el-main {
      .box-card{
          margin: 30px;
      }
  }

}
</style>