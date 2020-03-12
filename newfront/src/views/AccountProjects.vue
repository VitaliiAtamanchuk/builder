<template>
  <div class="ma-10">
    <Add @onadd='fetchProjects' />
    <List @refreshList='fetchProjects' :projects='projects' />
  </div>
</template>

<script>
import Add from '@/components/Projects/Add'
import List from '@/components/Projects/List'

export default {
  components: {Add, List},
  data () {
    return {
      projects: []
    }
  },
  created () {
    this.fetchProjects()
  },
  methods: {
    fetchProjects () {
      this.$projects()
        .then(resp => {
          this.projects = resp.data.projects
        })
    }
  }
}
</script>

<style lang='scss'>
  .projects-app-bar {
    box-shadow: 0 1px 0 0 #e5e5e5 !important;
  }
  .v-data-table th.text-left {
    text-align: left!important;
  }
  .cursor-pointer {
    cursor: pointer;
  }
</style>
