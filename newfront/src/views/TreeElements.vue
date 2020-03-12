<template lang="html">
  <li @click='selectElemet'>
    <div :class="{bold: hasChildren, 'primary--text': isSelected}" @click="toggle">
      {{ item.tag }}
      <span v-if="hasChildren">[{{ isOpen ? '-' : '+' }}]</span>
    </div>
    <ul v-show="isOpen" v-if="hasChildren">
      <tree-item
        class="item"
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"/>
    </ul>
  </li>
</template>

<script>
export default {
  props: ['item', 'active'],
  data: function () {
    return {
      isOpen: false
    }
  },
  computed: {
    hasChildren () {return this.item.children && this.item.children.length},
    isSelected () {return this.active && this.active.id === this.item.id}
  },
  methods: {
    toggle () {
      if (this.hasChildren) {
        this.isOpen = !this.isOpen
      }
    },
    selectElemet (el) {
      this.$emit('update:active', this.item)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
