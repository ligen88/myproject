<template>
  <div>
      <canvas ref="code" id="code"></canvas>
      <button @click="usemy">点我</button>
  </div>
</template>

<script>
import qrcode from "qrcode"
export default {
    name:"linlin",
    methods:{
        usemy(){
            let opts = {
                    errorCorrectionLevel: "H",//容错级别
                    type: "image/png",//生成的二维码类型
                    quality: 0.3,//二维码质量
                    margin: 12,//二维码留白边距
                    width: 200,//宽
                    height: 180,//高
                    text: "http://www.xxx.com",//二维码内容
                    color: {
                        dark: "#333333",//前景色
                        light: "#fff"//背景色
                    }
                };
                this.QRCodeMsg = "http://www.baidu.com"; //生成的二维码为URL地址js
                let msg = document.getElementById("code");
                // 将获取到的数据（val）画到msg（canvas）上
                qrcode.toCanvas(msg, this.QRCodeMsg, opts, function (error) {
                   if(error) console.log(error);
                });
        }
    }
}
</script>

<style>
</style>