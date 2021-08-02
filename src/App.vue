<template>
  <div id="app">
    <div class="container">
      <Header/>
      <component :is="layout">
        <keep-alive max="5">
          <router-view :key="$route.fullPath" />
        </keep-alive>
      </component>
    </div>
  </div>
</template>

<script>
  import HomeLayout from './layout/HomeLayout';
  import MainBoardLayout from './layout/MainBoardLayout';
  import Header from '@/components/Header'

  export default {
    computed: {
      layout() {
        return (this.$route.meta.layout || 'HomeLayout')
      }
    },
    components: {
      Header,
      HomeLayout,
      MainBoardLayout
    }
  }
</script>

<style lang="scss">
@import "~buefy/dist/buefy.min.css";
</style>
