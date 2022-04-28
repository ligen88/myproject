<template>
  <div class="logreg-container">
      <div class="main">
        <router-view></router-view>
        </div>
  </div>
</template>

<script>
export default {
    name:"LogReg",    
}

</script>

<style lang="less">
    .logreg-container{
        height:900px;
        width: 100%;
        background-image: linear-gradient(to bottom right,#afb1fc, #fcc2c2);
        .main{
            height: 55%;
            width: 28%;
            position: absolute;
            left:35%;
            top:20%
        }
    }
</style>