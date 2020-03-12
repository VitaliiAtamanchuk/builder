import Vue from 'vue'
import API from '@/plugins/api'
import * as _ from 'lodash'

Vue.use(API)

const deleteEl = (els, id) => {
  els.forEach((el, index) => {
    if (el.id === id) return els.splice(index, 1)
    if (el.hasOwnProperty('children')) deleteEl(el.children, id)
  })
}

const editText = (els, id, txt) => {
  els.forEach(el => {
    if (el.id === id) {
      return Vue.set(el, 'text', txt)
    }
    if (el.hasOwnProperty('children')) editText(el.children, id, txt)
  })
}

const deletePage = (pages, id) => {
  pages.forEach((page, index) => {
    if (page.id === id) return pages.splice(index, 1)
    if (page.hasOwnProperty('children')) deletePage(page.children, id)
  })
}

const editPage = (pages, newPage) => {
  pages.forEach((page, index) => {
    if (page.id === newPage.id) {
      page.title = newPage.title
      page.name = newPage.name
      page.path = newPage.path
      return
    }
    if (page.hasOwnProperty('children')) editPage(page.children, newPage)
  })
}

class ProjectStore {
  store = new Vue({
    data () {
      return {
        project: null,
        selectedPage: null,
        selectedEl: null,
        saving: false,
        isPreview: false
      }
    }
  })


  // GETTERS
  get noPages () {
    if (this.store.project) {
      return !this.store.project.data.pages.length
    }
    return true
  }
  get pages () {return this.store.project.data.pages}
  get data () {return this.store.selectedPage.data}
  get hasSelectedPage () {return !!this.store.selectedPage}
  get hasSelectedEl () {return !!this.store.selectedEl}
  get getPageTitle () {return !!this.store.selectedPage ? this.store.selectedPage.title : ''}

  togglePreview () {this.store.isPreview = !this.store.isPreview}
  selectPage (page) {this.store.selectedPage = page}
  selectEl (el) {this.store.selectedEl = el}
  startSaving () {this.store.saving = true}
  deselectEl () {this.store.selectedEl = null}
  deleteEl (id) {deleteEl(this.store.selectedPage.elements, id)}
  editEl (id, txt) {editText(this.store.selectedPage.elements, id, txt)}
  setProp (name, value) {Vue.set(this.store.selectedEl.props[name], 'value', value)}
  removeProp (name) {Vue.delete(this.store.selectedEl.props[name], 'value')}
  addClass (name) {Vue.set(this.store.selectedEl, 'classes', [...this.store.selectedEl.classes, name])}
  removeClass (index) {this.store.selectedEl.classes.splice(index, 1)}
  removeClassByName (name) {this.store.selectedEl.classes = this.store.selectedEl.classes.filter(c => c !== name)}

  save (apiCall) {
    this.saving = true
    return apiCall(this.store.project.id, this.store.project.data)
      .then(resp => {
        this.saving = false
        return resp
      })
  }
  deletePage (id) {deletePage(this.store.project.data.pages, id)}
  editPage (page) {editPage(this.store.project.data.pages, page)}
}

const instance = new ProjectStore()
export default instance
