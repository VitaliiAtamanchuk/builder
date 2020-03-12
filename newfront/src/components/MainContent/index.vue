<template lang="html">
  <v-content app class='fill-height'>
    <v-container fluid class='fill-height'>

      <div v-if='!hasSelectedPage'>
        <h2 class='grey--text text--darken-1 mx-auto'>No Page Selected</h2>
      </div>
      <CustomFrame class='pa-5'>
        <v-app id="inspire" class='elevation-5'>
          <!-- <template v-for='(el, index) in selectedPage.elements'>
            <CanvasEl :el='el' :key='index'/>
          </template> -->
        </v-app>
      </CustomFrame>

    </v-container>
  </v-content>
</template>

<script>
import CustomFrame from './CustomFrame'
import CanvasEl from './CanvasEl'
import {mapGetters, mapState} from 'vuex'
import ProjectStore from '@/projectStore'

export default {
  components: {CustomFrame, CanvasEl},
  computed: {
    hasSelectedPage: () => ProjectStore.hasSelectedPage,
    selectedPage: () => ProjectStore.store.selectedPage
  }
}
</script>

<style lang="css">
#canvas {
  background-color: white;
  height: 100%;
  width: 100%;
}
#inspire {
  height: 100%;
  width: 100%;
  background-color: white !important;
}
html {
  overflow-y: auto !important;
}
</style>
