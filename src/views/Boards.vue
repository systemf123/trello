<template>
  <div class="container">
    <div class="columns is-variable bd-klmn-columns is-1">
      <div class="column is-3">
        <div class="bd-notification is-primary">
          <NewBoardModal/>
        </div>
      </div>
      <div class="column is-9">
        <div class="columns columns-wrap">
          <template v-if="getBoards.length">
            <div v-for="(board, i) of getBoards" class="column is-3" :key="board.name + i">
              <div class="bd-notification is-primary">
                <div class="card">
                  <div class="card-content card-content-inner">
                    <div class="content">
                      <router-link :to="`/boards/my_board/${board.idBoard}/`">{{board.name}}</router-link>
                      <button @click="deleteElem(board.idBoard)" type="button" aria-label="Close notification" class="delete close-position"></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NewBoardModal from '../components/NewBoardModal';

  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "Board",
    components: {
      NewBoardModal
    },
    computed: {
      ...mapGetters(['getBoards'])
    },
    methods: {
      deleteElem(i) {
        this.actionBoardDelete(i)
      },
      ...mapActions([
        'actionBoardDelete'
      ])
    }
  }
</script>

<style scoped lang="scss">
  .columns-wrap {
    flex-wrap: wrap;
  }
  .card-header-title {
    padding: .75rem 2rem .75rem 1rem;
  }
  .card-content-inner {
    position: relative;
  }
  .close-position {
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>