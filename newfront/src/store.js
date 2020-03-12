import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedPage: null,
    project: null,
    selectedEl: null
  },
  getters: {
    noPages (state) {
      if (state.project) {
        return !state.project.data.pages.length
      }
      return true
    },
    pages (state) {
      return state.project.data.pages
    },
    data: state => state.selectedPage.data,
    hasSelectedPage: state => !!state.selectedPage,
    hasSelectedEl: state => !!state.selectedEl
  },
  mutations: {
    SET_PROJECT (state, project) {
      state.project = project
    },
    SET_PAGES (state, pages) {
      state.project.data.pages = pages
    },
    SET_DATA (state, data) {
      state.selectedPage.data = data
    },
    SELECT_PAGE (state, page) {
      state.selectedPage = page
    },
    ADD_EL (state, el) {
      state.selectedPage.elements.push(el)
    },
    SET_PAGE_ELS (state, els) {
      state.selectedPage.elements = els
    },
    SELECT_EL (state, el) {
      state.selectedEl = el
    }
  },
  actions: {
    updateProjectData({state}, {vm}) {
      vm.$updateProject(state.project.id, state.project.data)
    }
  }
})
