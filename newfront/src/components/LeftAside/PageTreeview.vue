<template lang="html">
  <div class="pa-2">
    <AddPage ref='addPage' @onadd='addPage' />
    <EditPage :item='item' ref='editPage' @submit='submitEdit' />
    <PageTreeNode v-if='pages.length' v-model='pages'/>
    <div v-else>
      <p class='text-center grey--text text--darken-1'>
        <span class='title grey--text text--darken-3'>No pages here.</span></br>
        Create your first page.</br>
        <v-btn dark color='grey darken-2' @click='$refs.addPage.open()'>Create</v-btn>
      </p>
    </div>
  </div>
</template>

<script>
import shortid from 'shortid'
import PageTreeNode from './PageTreeNode'
import ProjectStore from '@/projectStore'
import AddPage from './AddPage'
import EditPage from './EditPage'

export default {
  components: {AddPage, PageTreeNode, EditPage},
  data () {
    return {
      item: null,
    }
  },
  computed: {
    pages: {
      get () {
        return ProjectStore.store.project.data.pages
      },
      set (value) {
        ProjectStore.store.project.data.pages = value
      }
    }
  },
  methods: {
    addPage (page) {
      this.pages.unshift({id: shortid.generate(), title: page.title, name: page.name, path: page.path, elements: [], children: [], data: {}})
    },
    editPageOpen (item) {
      this.item = item
      this.$refs.editPage.open()
    },
    submitEdit (item) {
      ProjectStore.editPage(item)
    }
  }
}
</script>

<style lang="css">
</style>
