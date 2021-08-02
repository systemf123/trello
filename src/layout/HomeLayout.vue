<template>
    <div>
        <h1 class="title is-1">{{titlePage}}</h1>
        <router-view/>
    </div>
</template>

<script>
  export default {
    name: "HomeLayout",
    data() {
      return {
        title: 'Главная'
      }
    },
    computed: {
      titlePage() {
        return this.$route.meta.title || this.title
      }
    }
  }
</script>

<style scoped>

</style>