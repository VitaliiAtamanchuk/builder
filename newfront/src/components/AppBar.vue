<template lang="html">
  <v-app-bar class='app-bar elevation-0' app color="primary" dark clipped-left clipped-right>
    <div class="d-flex align-center">
      <v-btn text :to='{name: "projects"}' exact>
        <v-icon>mdi-arrow-left</v-icon>
        Projects
      </v-btn>
    </div>

    <div class="grow text-center">
      <v-btn color='primary' :loading='savingProject' @click='save'>Save</v-btn>
      {{projectTitle}} / {{pageTitle}}
    </div>

    <v-btn icon dark @click='togglePreview'>
      <v-icon v-if='isPreview'>mdi-eye-off</v-icon>
      <v-icon v-else>mdi-eye</v-icon>
    </v-btn>
    <v-btn :loading='loading' text @click='download()'>
      <span class="mr-2">Download</span>
      <v-icon>mdi-download</v-icon>
    </v-btn>

  </v-app-bar>
</template>

<script>
import ProjectStore from '@/projectStore'

export default {
  inject: ['id'],
  data () {
    return {
      loading: false,
    }
  },
  computed: {
    projectTitle: () => ProjectStore.store.project.name,
    pageTitle: () => ProjectStore.getPageTitle,
    savingProject: () => ProjectStore.store.saving,
    isPreview: () => ProjectStore.store.isPreview
  },
  methods: {
    togglePreview: () => ProjectStore.togglePreview(),
    save () {
      ProjectStore.save(this.$updateProject)
        .then(resp => {
          this.$root.$snackbar('Successfully saved project.')
        })
    },
    download () {
      this.loading = true
      this.$downloadProject(this.id)
        .then(resp => {
          return
          var headers = resp.headers
          var blob = new Blob([resp.data],{type:headers['content-type']})
          var link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          var filename = ""
          var disposition = headers['content-disposition']
          if (disposition && disposition.indexOf('attachment') !== -1) {
              var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
              var matches = filenameRegex.exec(disposition)
              if (matches != null && matches[1]) filename = matches[1].replace(/['"]/g, '')
          }
          link.download = filename
          link.click()
          link.remove()
        })
        .finally(() => {this.loading = false})
    },
  }
}
</script>

<style lang='scss'>
  .v-app-bar.v-app-bar--fixed.app-bar {
    background-color: #2c2c2c !important;
  }
</style>
