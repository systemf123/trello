<template>
    <section>
        <button class="button is-primary is-medium"
                @click="isComponentModalActive = true">
            Новая доска
        </button>

        <b-modal :active.sync="isComponentModalActive" has-modal-card>
            <form @submit.prevent="save" action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Новая доска</p>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Название доски">
                            <b-input
                                    type="text"
                                    v-model="newName"
                                    placeholder="название доски"
                                    required>
                            </b-input>
                        </b-field>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button" type="button" @click="isComponentModalActive = false">Отмена</button>
                        <button class="button" type="button" @click="save">Сохранить</button>
                    </footer>
                </div>
            </form>
        </b-modal>
    </section>

</template>

<script>
    import {randomUid} from '../utils';
    import {mapActions } from 'vuex'

  export default {
    data() {
      return {
        isComponentModalActive: false,
        newName: ''
      }
    },
    methods: {
      save($event) {
        if (this.newName) {
          this.actionBoard({idBoard: randomUid(), name: this.newName})
          this.newName = ''
          this.isComponentModalActive = false
        }
      },
      ...mapActions([
        'actionBoard'
      ])
    }
  }
</script>