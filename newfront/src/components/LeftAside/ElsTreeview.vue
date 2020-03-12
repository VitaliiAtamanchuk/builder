<template lang="html">
  <div class="pa-2">
    <ElsTreeNode v-if='elements.length' v-model='elements'/>
    <div v-else>
      No Elements
    </div>
  </div>
</template>

<script>
import ElsTreeNode from './ElsTreeNode'
import ProjectStore from '@/projectStore'

export default {
  components: {ElsTreeNode},
  computed: {
    elements: {
      get () {
        return ProjectStore.store.selectedPage.elements
      },
      set (value) {
        ProjectStore.store.selectedPage.elements = value
      }
    }
  }
}
</script>

<style lang="css">
</style>
