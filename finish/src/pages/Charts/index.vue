<template>
    <div>
        <div id="main"></div>
    </div>
</template>

<script>
export default {
    name:"Charts",
    mounted(){
        var chartDom = document.getElementById("main");
        var myChart = echarts.init(chartDom);
        var option = {
        xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            },
        ],
        };
        myChart.setOption(option);
    }
}

</script>

<style>
    #main{
        height: 400px;
        width: 400px;
    }
</style>