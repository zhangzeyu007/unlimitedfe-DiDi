/*
 * @Description:
 * @Author: 张泽雨
 * @Date: 2022-05-07 15:40:55
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-05-07 19:19:57
 * @FilePath: \unlimitedfe\src\store\modules\case.js
 */

const state = {
  newCase: {
    list: [],
    template_name: '',
    index: 0
  }
}

const mutations = {
  SET_NEW_CASE: (state, newCase) => {
    if (newCase.list) {
      state.newCase.list = newCase.list
    }
    if (newCase.template_name) {
      state.newCase.template_name = newCase.template_name
    }
    if (newCase.index >= 0) {
      state.newCase.index = newCase.index
    }
  }
}
const actions = {
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

