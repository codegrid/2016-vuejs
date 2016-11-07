import memos from './data'
export const state = {
  memos
}

export const actions = {
  addMemo(newMemo) {
    newMemo = Object.assign({}, newMemo)
    const id = state.memos.reduce((prev, memo) => {
        return prev < memo.id ? memo.id : prev
      }, 0) + 1
    newMemo.id = id
    newMemo.tags = newMemo.tags.trim().split(' ')
    state.memos.push(newMemo)
  },
  removeMemo(id) {
    const index = state.memos.findIndex((memo) => {
      return memo.id === id
    })
    state.memos.splice(index, 1)
  },
  updateMemo(newMemo) {
    newMemo.id = parseInt(newMemo.id, 10)
    const index = state.memos.findIndex((memo) => {
      return memo.id === newMemo.id
    })
    newMemo.tags = newMemo.tags.trim().split(' ')
    state.memos.splice(index, 1, newMemo)
  }
}

export const getters = {
  memoById(id) {
    return state.memos.find((memo) => {
      return memo.id === parseInt(id, 10)
    })
  },
  nextId() {
    return state.memos.reduce((prev, memo) => {
      return prev < memo.id ? memo.id : prev
    }, 0) + 1
  },
  allTags() {
    return state.memos.reduce((tags, memo) => {
      memo.tags.forEach((tag) => {
        if (!tags.includes(tag)) {
          tags.push(tag)
        }
      })
      return tags
    }, [])
  }
}
