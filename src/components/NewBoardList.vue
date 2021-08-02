<template>
    <section>
        <div>
            <b-button
                    label="Добавить список"
                    :disabled="isActive"
                    @click="isActive = true" />
            <br>
            <br>
            <b-notification
                    type="is-info"
                    v-model="isActive"
                    aria-close-label="Close notification">
                <b-field label="Добавление нового списка">
                    <input class="input" @keypress="save" placeholder="Новый список" v-model="listName"></input>
                </b-field>
            </b-notification>
        </div>
    </section>

</template>

<script>
    import {randomUid} from '../utils';
    import {mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        isActive: false,
        listName: ''
      }
    },
    mounted() {
      if (!this.getBoards.length) {
        this.$router.push('/')
      }
    },
    computed: {
      ...mapGetters([
        'getBoards'
      ])
    },
    methods: {
      save($event) {

        if ($event.which == 13) {
          if (this.listName) {
            this.actionBoardList({listId: randomUid(), name: this.listName, items: [], boardId: this.$route.params.id})
            this.listName = ''
            this.isActive = false
          }
        }
      },
      ...mapActions([
        'actionBoardList'
      ])
    }
  }
</script>