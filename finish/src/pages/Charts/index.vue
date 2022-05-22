<template>
    <div class="charts">
        <el-main>
            <h1>{{qlist.title}}</h1>
            <el-tag>{{qlist.id}}</el-tag>
            <div class="questionCard" >
                <el-card class="box-card" shadow="hover" v-show="!item.isdel" v-for="item,index in qlist.question" :key="index">
                    <div slot="header" class="clearfix">
                        <el-tag>{{item.title}}</el-tag>
                    </div>
                    <div v-show="item.type=='radio'||item.type=='checkbox'">
                        <el-table :data="item.option" style="width: 100%">
                        <el-table-column label="选项" width="300">
                            <template slot-scope="scope">
                            <span style="margin-left: 10px">{{
                                scope.row.title
                            }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="数量" width="300">
                            <template slot-scope="scope">
                            <div slot="reference" class="name-wrapper">
                                <el-tag size="medium">{{ scope.row.num }}</el-tag>
                            </div>
                            </template>
                        </el-table-column>
                        </el-table>
                        <el-button @click="show(index)">点我显示</el-button>
                        <div :id="'img'+index" class="chart"></div>
                    </div>
                     <div v-show="item.type=='textarea'">
                         {{item.text}}
                     </div>
                </el-card>
            </div>
        </el-main>
    </div>
</template>

<script>
import * as echarts from "echarts";
export default {
    name:"Charts",
    data() {
        return {
            data1:[],
            data3:[],
            data2:[],
            qlist:'',
            account:'',
            optionnum:'',
        }
    },
    methods:{
        show(index){
            var chartDom = document.getElementById("img"+index);
            var myChart = echarts.init(chartDom);
            var option = {
            xAxis: {
                type: "category",
                data: this.data3,
            },
            yAxis: {
                type: "value",
            },
            series: [
                {
                    data: this.data2,
                    type: "bar",
                },
            ],
            };
            myChart.setOption(option);
            },
  
        setpie(){
                var chartDom = document.getElementById('pie');
                var myChart = echarts.init(chartDom);
                var option = {
                tooltip: {
                    trigger: 'item'
                },
                series: [
                    {
                    name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    data:this.data1,
                    emphasis: {
                        itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                    }
                ]
                };
                myChart.setOption(option);
                }
    },
    mounted(){
        this.qlist=this.$route.params.item;
        console.log(this.qlist);
        let dataw=this.qlist.question;
        for(let i in dataw){
            if(dataw[i].isdel==false){
                for(let j in dataw[i].option){
                    this.data1.push(dataw[i].option[j])
                }
            }
        }
          for(let i in this.data1){
                this.data3.push(this.data1[i].title);
                this.data2.push(this.data1[i].num);
        }
        console.log(this.data1);
    }
}

</script>

<style scoped lang="less">
.charts{
    
    h1{
        font-size: 30px;
        text-align: center;
    }
    .el-main{
        height: 800px;
        width: 70%;
        margin: 0 auto;
        .el-tag{
            float: left;
            margin:0 auto;
        }
        .questionCard{
            .box-card{
                margin:30px 0px;
                width: 100%;
                #bar{
                    float: left;
                    height: 100px;
                    width: 100px;
                }
                #pie{
                    float: right;
                    height: 100px;
                    width: 100px;
                }
            }
        }
        .chart{
            position: relative;
            margin: 30px 0px 0px 30px;
            height: 300px;
            width: 300px;
        }
}

}
    
</style>