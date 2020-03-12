<template>
  <div class='fill-height'>
    <v-overlay v-if='loading' :opacity='0.1' :value="loading">
      <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    />
    </v-overlay>

    <div v-else class='fill-height'>
      <AppBar />
      <RightAside />
      <LeftAside />
      <MainContent/>
    </div>

  </div>
</template>

<script>
import AppBar from '@/components/AppBar'
import RightAside from '@/components/RightAside'
import LeftAside from '@/components/LeftAside'
import MainContent from '@/components/MainContent'
import ProjectStore from '@/projectStore'

export default {
  props: ['id'],
  provide () {
    return {
      id: this.id
    }
  },
  components: {AppBar, RightAside, LeftAside, MainContent},
  data () {
    return {
      loading: false
    }
  },
  created () {
    let eventSource = new EventSource(`/api/project/${this.id}/get`)
    eventSource.onmessage = (event) => {
      if (!ProjectStore.store.saving && this.loading) {
        console.log('get')
        ProjectStore.store.project = JSON.parse(event.data).project
      }
      this.loading = false
    }
  },
  methods: {
    fetchProject () {
      this.$getProject(this.id)
        .then(resp => {
          ProjectStore.store.project = resp.data.project
          this.loading = false
        })
    }
  }
}
</script>
