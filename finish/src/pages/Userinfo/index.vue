<template>
  <div>
    <Header />
    <h2>1123</h2>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Userinfo",
  data() {
    return {
      user: [
        {
          name: "",
          id: "",
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
</style>