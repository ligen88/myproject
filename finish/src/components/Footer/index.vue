<template>
      <el-footer id=footer>
        <span title="点我">@问卷调查，问你所想</span>
        <span id="icp">鲁ICP备2022011653号</span>
      </el-footer>
</template>

<script>
    export default {
        name:"Footer"
    }
</script>

<style scoped lang="less">
    #footer{
        position:fixed;
        left: 45%;
        bottom:1%;
        span{
            font-size:20px;
            color:rgba(5, 5, 5, .4);
            display: block;
            text-align: center;
        }
        #icp{
            font-size:12px;
        }
    }
</style>