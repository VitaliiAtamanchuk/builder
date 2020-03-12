<template lang="html">
  <v-navigation-drawer v-model='drawer' app fixed left clipped width='360'>

    <div style='height: 35%;min-height: 35%; overflow-y: scroll'>
      <v-tabs height='70' hide-slider active-class='black--text font-weight-medium'>
        <v-tab class='text-capitalize title'>Pages</v-tab>
        <v-tab class='text-capitalize title'>Elements</v-tab>
        <v-tab class='text-capitalize title'>Snippets</v-tab>
        <v-tab class='text-capitalize title'>Presets</v-tab>
        <v-divider/>

        <v-tab-item>
          <v-divider/>
          <PageTreeview/>
        </v-tab-item>
        <v-tab-item>
          <v-divider/>
          <Elements/>
        </v-tab-item>
        <v-tab-item>
          <v-divider/>
          <Snippets/>
        </v-tab-item>
        <v-tab-item>
          <v-divider/>
          <PresetsTab/>
        </v-tab-item>
      </v-tabs>
    </div>

    <v-divider />

    <div v-if='hasSelectedPage' style='height: 64%; min-height: 64%; overflow-y: scroll'>
      <v-tabs height='35' active-class='black--text font-weight-medium' right>
        <v-tab class='text-capitalize subtitle-1'>Data</v-tab>
        <v-tab class='text-capitalize subtitle-1'>Treeview</v-tab>

        <v-tab-item><v-jsoneditor v-model="pageData" :plus="false" height="55vh" /></v-tab-item>
        <v-tab-item><ElsTreeview /></v-tab-item>
      </v-tabs>
    </div>

  </v-navigation-drawer>
</template>

<script>
import PageTreeview from './PageTreeview'
import Elements from './_Elements'
import Snippets from './_Snippets'
import ElsTreeview from './ElsTreeview'
import PresetsTab from './PresetsTab'
import ProjectStore from '@/projectStore'

export default {
  components: {PageTreeview, Elements, Snippets, ElsTreeview, PresetsTab},
  data () {
    return {
      drawer: true
    }
  },
  computed: {
    isPreview: () => ProjectStore.store.isPreview,
    hasSelectedPage: () => ProjectStore.hasSelectedPage,
    pageData: {
      get () {
        return ProjectStore.store.selectedPage.data
      },
      set (value) {
        ProjectStore.store.selectedPage.data = value
      }
    }
  },
  watch: {
    isPreview () {
      this.drawer = !this.isPreview
    }
  }
}
</script>

<style lang="css">
</style>
