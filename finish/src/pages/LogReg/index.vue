<template>
  <div class="logreg-container">
    <div class="bg">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    name:"LogReg",    
}

</script>

<style scoped lang="less">
.logreg-container {
  overflow: hidden;
  min-height: 900px;
  min-width: 900px;
  width: 100%;
  background-image: url("../../assets/preview.jpg");
  background-size:100% 100%;
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
  .logreg-form {
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


}
</style>