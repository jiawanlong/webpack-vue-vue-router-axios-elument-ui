<template>
    <div>
       <h2>我是组组建传过来的{{title}}</h2>
    </div>
</template>

<script>
export default {
  name: "returnhead",
  props:['title'],
  beforeCreate() {},
  created() {},
  mounted() {},
  updated() {},
  data() {
    return {};
  },
  methods: {
    
  }
};
</script>

<style scoped>
</style>
