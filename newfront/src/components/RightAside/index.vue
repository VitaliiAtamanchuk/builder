<template lang="html">
  <v-navigation-drawer v-model='drawer' app fixed right clipped width='360'>

    <div v-if='hasSelectedEl'>
      <v-layout class='pl-6 pt-5 title' align-baseline>
        Selected - <v-chip label class='mb-4 ml-3 primary lighten-1' dark close @click:close="deselect">{{ProjectStore.store.selectedEl.name}}</v-chip>
      </v-layout>
      <v-expansion-panels :value='[0,1,2]' multiple accordion class='ml-1'>
        <PropsPanel />
        <ClassesPanel />
        <StylePanel />
      </v-expansion-panels>
    </div>

  </v-navigation-drawer>
</template>

<script>
import ProjectStore from '@/projectStore'
import PropsPanel from './PropsPanel'
import ClassesPanel from './ClassesPanel'
import StylePanel from './StylePanel'

export default {
  components: {PropsPanel, ClassesPanel, StylePanel},
  data () {
    return {
      drawer: true,
      tab: null,
      ProjectStore,
    }
  },
  computed: {
    isPreview: () => ProjectStore.store.isPreview,
    hasSelectedEl: () => ProjectStore.hasSelectedEl
  },
  watch: {
    isPreview () {
      this.drawer = !this.isPreview
    }
  },
  methods: {
    deselect: () => ProjectStore.deselectEl()
  }
}
</script>

<style lang="css">
</style>
