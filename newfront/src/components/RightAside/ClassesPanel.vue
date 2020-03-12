<template lang="html">
  <v-expansion-panel>
    <v-expansion-panel-header class='text-uppercase subtitle-1 font-weight-bold'>
      Classes
      <template v-slot:actions><v-icon color="">$expand</v-icon></template>
    </v-expansion-panel-header>
    <v-divider />
    <v-expansion-panel-content>
      <v-container fluid>
        <v-combobox
          outlined
          :items='classesItems'
          prepend-inner-icon='mdi-plus'
          v-model='newClass'
          dense
          @keyup.enter.native='addClass'/>
        <div v-for='cl, index in selectedEl.classes' :key='index'>
          <v-row class='subtitle-1 my-2 px-5'>
            {{cl}} <v-spacer />
            <v-btn icon color='grey lighten-1' @click='removeClass(index)'>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-row>
          <v-divider />
        </div>
      </v-container>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import ProjectStore from '@/projectStore'

export default {
  data () {
    return {
      classesItems: [
        'ma-', 'pa-', 'float-right', 'float-left', 'elevation-', 'inline', 'block',
        'flex', 'flex-row', 'flex-column', 'justify-start', 'justify-end',
        'justify-center', 'justify-space-between', 'justify-space-around',
        'align-start', 'align-end', 'align-center', 'align-baseline', 'align-stretch',
        'mx-auto', 'ml-auto', 'mr-auto', 'flex-nowrap', 'flex-wrap', 'flex-wrap-reverse',
        'align-content-start', 'align-content-end', 'align-content-center',
        'align-content-space-between', 'align-content-space-around',
        'align-content-stretch'
      ],
      newClass: null,
    }
  },
  computed: {
    selectedEl: () => ProjectStore.store.selectedEl
  },
  methods: {
    addClass () {
      ProjectStore.addClass(this.newClass)
      this.newClass = null
    },
    removeClass (index) {
      ProjectStore.removeClass(index)
    }
  }
}
</script>

<style lang="css">
</style>
