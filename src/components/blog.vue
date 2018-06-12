<template>
    <div>
      blog
    </div>
</template>

<script>
export default {
  mounted() {
    // 获取路由传递过来的值
    if (this.$route.params.title) {
      alert(this.$route.params.title+"传过来的");
    } else {
      alert("直接打开的");
    }
  },
  data() {
   return{

   }
  },
  methods: {}
};
</script>

<style scoped>

</style>
