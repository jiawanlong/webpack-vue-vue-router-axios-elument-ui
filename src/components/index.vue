<template>
    <div>
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <returnhead title="哈哈哈哈哈哈哈哈哈哈"></returnhead>
      首页
      <h1 v-on:click="seaBlog">点击跳转路由传参</h1>
    </div>
</template>

<script>
import { searchBlogByT } from "../api/api.js";
import returnhead from "./common/returnhead.vue";

export default {
  components: {
    returnhead
  },
  data() {
    return {
      title: "首页"
    };
  },
  filters: {},
  mounted() {},
  methods: {
    initBlog() {
      var _this = this;
      // 用api
      searchBlogByT("all").then(res => {});
    },
    seaBlog() {
      // 路由传值
      this.$router.push({
        name: "blog",
        params: {
          title: this.title
        }
      });
    },
    addNewBlog() {}
  }
};
</script>

<style scoped>
</style>
