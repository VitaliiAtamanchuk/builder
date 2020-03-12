<template lang="html">
  <div>
    <v-simple-table class='full-width projects-table'>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Project name</th>
            <th class="text-left">Last modified</th>
            <th class="text-left">Created</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in projects" :key="item.id" class='cursor-pointer' @contextmenu="show($event, item)" @click='openProject(item)'>
            <td>
              <v-text-field
                v-if='isRename && item.id === currentProject.id'
                @keyup.enter='saveRename'
                @click.stop=''
                v-model='renameValue'
                autofocus
                placeholder='Enter name'
                hint='On Enter save'
                persistent-hint/>
              <template v-else>
                {{ item.name }}
              </template>
            </td>
            <td :title='item.updated_at'>{{ item.updated_at | timeAgoF }}</td>
            <td :title='item.created_at'>{{ item.created_at | timeAgoF }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <v-menu v-model="showMenu" :position-x="x" :position-y="y" absolute :transition='null'>
      <v-list dark>
        <v-list-item @click="openProject(currentProject)">
          <v-list-item-title>Open</v-list-item-title>
        </v-list-item>
        <v-divider/>
        <v-list-item @click="startRename">
          <v-list-item-title>Rename</v-list-item-title>
        </v-list-item>
        <v-list-item @click="deleteProject(currentProject)">
          <v-list-item-title>Delete</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

  </div>
</template>

<script>
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

export default {
  props: ['projects'],
  filters: {
    timeAgoF (value) {
      return timeAgo.format(Date.parse(value))
    }
  },
  data () {
    return {
      renameValue: null,
      isRename: false,
      currentProject: null,
      showMenu: false,
      x: 0,
      y: 0
    }
  },
  methods: {
    openProject (project, openInNewTab=false) {
      const routeData = {name: 'project', params: {id: project.id}}
      this.$router.push(routeData)
    },
    show (e, project) {
      e.preventDefault()
      this.currentProject = project
      this.showMenu = false
      this.x = e.clientX
      this.y = e.clientY
      this.$nextTick(() => {this.showMenu = true})
    },
    deleteProject (project) {
      this.$deleteProject(project.id).then(resp => {
        this.$root.$snackbar('Project have been successfully deleted.')
        this.$emit('refreshList')
      })
    },
    startRename (project) {
      this.renameValue = this.currentProject.name
      this.isRename = true
    },
    saveRename () {
      this.$renameProject(this.currentProject.id, this.renameValue)
        .then(resp => {
          this.isRename = false
          this.renameValue = null
          this.currentProject = null
          this.$root.$snackbar('Project have been successfully renamed.')
          this.$emit('refreshList')
        })
    }
  }
}
</script>

<style lang="css">
  .projects-table {
    background-color: transparent!important;
  }
</style>
