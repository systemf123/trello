<template>
  <section class="container">
    <div v-if="getBoards.length">
      Создано {{getBoards.length}} доска/досок
    </div>
    <div v-if="getBoardList.length">
      Создано {{getBoardList.length}} список/списков
    </div>
    <div v-if="getBoardList.length">
      Создано {{countElements}} элемент/элементов
    </div>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'BoardList',
    data() {
      return {
        isActive: true
      }
    },
    computed: {
      ...mapGetters([
        'getBoardList',
        'getBoards'
      ]),
      countElements() {
        return this.getBoardList.reduce((acc, current) => {
          return acc += current.items.length
        }, 0)
      }
    }
  }
</script>