<template>
    <div>
        <h1 class="title is-1">{{titlePage}}</h1>
            <router-view/>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: "MainBoardLayout",
    components: {},
    data() {
      return {
        title: 'Мои доски',
        nameBoard: ''
      }
    },
    computed: {
      ...mapGetters(['getBoards']),
      titlePage() {
        let title =  this.$route.meta.title || this.title
        if (this.nameBoard) {
          title += ' ' + this.nameBoard
        }
        return title
      },
    },
    methods: {
      getName() {
        const id = this.$route.params.id
        const curBoardName = this.getBoards.filter(item => item.idBoard == id)
        if (curBoardName.length) {
          this.nameBoard = curBoardName[0].name
        }
      }
    },
    watch: {
      '$route.params.id': {
        handler: function(id) {
          if (id) {
            this.getName()
          }
        },
        deep: true,
        immediate: true
      }
    }
  }
</script>

<style scoped>

</style>