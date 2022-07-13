<template>
  <div class="layout">
    <sHeader></sHeader>
    <router-view></router-view>

    <!-- <Footer></Footer> -->
  </div>
</template>

<script lang="ts">
  import sHeader from '~/layout/Header.vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Layout',
    components: {
      sHeader,
    },
  });
</script>

<style lang="less">
  .wrap {
    height: 100vh;
  }
  .fm1 {
    font-family: 'Josefin Sans', sans-serif;
  }
  .fm2 {
    font-family: sans-serif;
  }
</style>
