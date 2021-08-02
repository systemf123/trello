<template>
    <b-navbar>
        <template #start>
            <router-link tag="b-navbar-item" to="/">Главная &#128549;</router-link>
            <router-link tag="b-navbar-item" to="/boards">Создание доски</router-link>
            <router-link tag="b-navbar-item" to="/boardList">Статистика</router-link>
        </template>
    </b-navbar>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>

</style>