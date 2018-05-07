<template>
  <div>
      <a href="#" v-on:click="getRouterInfo">click</a>
  </div>
</template>
<script>
export default {
    methods:{
        getRouterInfo:function(){
            console.log(this.$router.currentRoute);
        }
    }
}
</script>
