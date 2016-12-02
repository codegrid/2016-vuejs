import memos from './memos'
const state = {
  memos
}

const util = {
  // memos の中のメモで一番大きい id に 1 を足した値を返す
  nextId(memos) {
    return memos.reduce((id, memo) => {
        return id < memo.id ? memo.id : id
      }, 0) + 1
  },
  findIndex(memos, id) {
    return memos.findIndex((memo) => {
      return memo.id === parseInt(id, 10)
    })
  }
}

// state に変更を加える処理は mutations で行う
const mutations = {
  addMemo(newMemo) {
    newMemo.id = util.nextId(state.memos)
    state.memos.push(newMemo)
  },
  removeMemo(id) {
    const index = util.findIndex(memos, id)
    state.memos.splice(index, 1)
  },
  updateMemo(memo) {
    const index = util.findIndex(memos, memo.id)
    state.memos.splice(index, 1, memo)
  }
}

// commitを経由してmutationsを呼ぶ
const commit = (mutationsName, ...args) => {
  // 存在しないmutationsが指定されたらエラー
  if (!mutations[mutationsName]) {
    throw Error(`${mutationsName} is not defined in mutations.`)
  }
  mutations[mutationsName](...args)
}

export default {
  state,
  commit
}
