export default {
  state: {
    boards: [],
    boardList: []
  },
  getters: {
    getBoards(store) {
      return store.boards
    },
    getBoardList(store) {
      return store.boardList
    },
    /*getBoardItemsList(store) {
      return store.boardList
    }*/
  },
  mutations: {
    setBoards(store, payload) {
      store.boards.push(payload)
    },
    setBoardList(store, payload) {
      store.boardList.push(payload)
    },
    boardsDelete(store, payload) {
      store.boards = store.boards.filter(item => item.idBoard !== payload)
      store.boardList = store.boardList.filter((item) => item.boardId !== (payload + 1))
    },
    setBoardListDelete(store, payload) {
      store.boardList = store.boardList.filter(item => !(item.boardId === payload.boardId && item.listId === payload.listId))
    },
    addItemToList(store, {item, boardId}) {
      store.boardList = store.boardList.map((itemThat, index) => {
        if (itemThat.boardId === boardId && item.listId === itemThat.listId) {
          itemThat.items.push(item)
        }
        return itemThat
      })
    }
  },
  actions: {
    actionBoard({commit}, payload) {
      commit('setBoards', payload)
    },
    actionBoardList({commit}, payload) {
      commit('setBoardList', payload)
    },
    actionBoardDelete({commit}, payload) {
      commit('boardsDelete', payload)
    },
    actionBoardListDelete({commit}, payload) {
      commit('setBoardListDelete', payload)
    },
    actionBoardAddItem({commit}, payload) {
      commit('addItemToList', payload)
    }
  }
}