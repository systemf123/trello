<template>
  <div class="container">
    <div class="columns is-variable bd-klmn-columns is-1">
      <div class="column is-3">
        <div class="bd-notification is-primary">
          <NewBoardList/>
        </div>
      </div>
      <div class="column is-9">
        <div class="columns columns-wrap">
          <template v-if="currentBoardList && currentBoardList.length">
        <div v-for="(boardList, i) of currentBoardList" class="column is-4" :key="boardList.listId">
          <div class="bd-notification is-primary">
            <div class="card">
              <header class="card-header card-content-inner">
                <p class="card-header-title">
                  {{boardList.name}}
                </p>
                <button @click="deleteElement(boardList.boardId, boardList.listId)" type="button" aria-label="Close notification" class="delete close-position"></button>
              </header>
              <div class="card-content">
                <div class="content">
                  <input type="text" class="input" @keypress="addElement($event, {index: i, listId: boardList.listId})">
                  <br>
                  <br>
                  <draggable v-model="boardList.items" group="people" @start="drag=true" @end="drag=false">
                    <b-field v-if="boardList.items.length" v-for="(item, i) of boardList.items" :key="boardList.listId + i">
                      <div class="element-item is-success" :class="{active: item.active}">
                        {{item.name}}
                        <i @click="checkItem(item)" class="icon-check">&#10004;</i>
                      </div>
                    </b-field>
                  </draggable>
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
  import draggable from 'vuedraggable'
  import NewBoardList from '../components/NewBoardList';

  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "Board",
    components: {
      NewBoardList,
      draggable
    },
    data() {
      return {
        boardIndex: this.$route.params.id
      }
    },
    computed: {
      ...mapGetters(['getBoardList']),
      currentBoardList() {
        return this.getBoardList.filter(item => item.boardId === this.boardIndex)
      }
    },
    methods: {
      addElement($event, {index, listId}) {
        // добавить по индексу в список элементы
        if ($event.which == 13) {
          this.actionBoardAddItem( {item: {listBoardId: index, listId, name: $event.target.value, active: true}, boardId: this.boardIndex} )
          $event.target.value = ''
        }
      },
      deleteElement(boardId, listId) {
        this.actionBoardListDelete({boardId, listId})
      },
      checkItem(item) {
        item.active = false
      },
      ...mapActions([
        'actionBoardListDelete',
        'actionBoardAddItem'
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
  .element-item {
    position: relative;
    background-color: #66ff66;
    box-shadow: 0px 4px 6px -3px #000000bf;
    padding: 5px 10px;
    text-align: center;
    cursor: move;
  }
  .element-item:after {
    content: '';
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    height: 2px;
    width: 0;
    background-color: #000;
    transition: width .5s;
  }
  .element-item:not(.active)::after {
    width: 92%;
  }
  .element-item:not(.active) {
    caret-color: transparent;
  }
  .element-item:not(.active) .icon-check {
    cursor: default;
  }
  .icon-check {
    float: right;
    font-size: 20px;
    cursor: pointer;
    margin: -2px 5px 0 0;
  }
  .field.sortable-chosen.sortable-ghost {
    visibility: hidden;
  }
</style>