<template>
  <div>
    <Header />
        <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import request from '@/api/requset';
export default {
  name: "Home",
  components:{
      Header,
      Footer
  },
//   mounted(){
//        request.get("http://127.0.0.1:8088/api/userinfo").
//        then((res)=>{
//            console.log(res);
//     });
//   }
};
</script>

<style scoped lang="less">
    
</style>