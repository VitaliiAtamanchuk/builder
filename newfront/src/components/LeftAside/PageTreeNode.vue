<template lang="html">
  <draggable
    v-bind="dragOptions"
    tag="div"
    class="dragAreaTree item-container"
    :list='list'
    :value="value"
    @input="emitter">
    <div class="item-group" v-for='(el, index) in realValue' :key='el.index'>
      <div class="item">
        <v-flex @click='selectEl(el)':class='{"active-node": selectedElId === el.id}' class="d-flex justify-between node" align-center>
          <span>
            <v-icon size='19' @click.stop='toggleOpen(index)' v-if='!!el.children.length && opened[index]'>mdi-menu-down</v-icon>
            <v-icon size='19' @click.stop='toggleOpen(index)' v-if='!!el.children.length && !opened[index]'>mdi-menu-right</v-icon>
            <v-icon class='ml-1' size='19'>mdi-file</v-icon>
            <span class='font-weight-medium'>{{el.title}}</span> - <span class='font-italic'>"{{el.path}}"</span>
          </span>

          <v-spacer/>
          <span class='el-tree-actions'>
            <v-btn @click.stop='editPage(el)' icon class='elevation-0' small>
              <v-icon size='17'>mdi-pencil</v-icon>
            </v-btn>
            <v-btn @click.stop='deleteEl(el)' icon class='elevation-0' small>
              <v-icon size='17'>mdi-delete</v-icon>
            </v-btn>
          </span>

        </v-flex>
        <NestedDndNode
          v-if='opened[index]'
          class="item-sub"
          :list='el.children'/>
      </div>
    </div>
  </draggable>
</template>

<script>
import draggable from "vuedraggable"
import {mapState} from 'vuex'
import * as _ from 'lodash'
import Vue from 'vue'
import ProjectStore from '@/projectStore'

export default {
  name: 'NestedDndNode',
  components: {draggable},
  props: {
    value: {
      required: false,
      type: Array,
      default: null
    },
    list: {
      required: false,
      type: Array,
      default: null
    }
  },
  data () {
    return {
      opened: [],
      selectedElId: null,
    }
  },
  computed: {
    selectedEl: () => ProjectStore.store.selectedPage,
    dragOptions() {
      return {
        animation: 0,
        group: "builder",
        disabled: false,
        ghostClass: "ghost",
      }
    },
    realValue() {
      this.opened = Array(this.value ? this.value.length : this.list.length).fill(true)
      return this.value ? this.value : this.list
    },
    noEls () {
      return !this.realValue.length
    }
  },
  watch: {
    selectedEl () {
      this.selectedElId = !!this.selectedEl ? this.selectedEl.id : null
    }
  },
  methods: {
    editPageOpen (item) {
      this.$parent.editPageOpen(item)
    },
    toggleOpen (index) {
      Vue.set(this.opened, index, !this.opened[index])
    },
    selectEl (item) {
      const theSame = item.id === this.selectedElId
      this.selectedElId = theSame ? null : item.id
      ProjectStore.selectPage(theSame ? null : item)
      this.$root.$sandboxRouter.push({name: item.name})
    },
    emitter(value) {
      this.$emit("input", value)
    },
    deleteEl (item) {
      ProjectStore.deletePage(item.id)
    },
    editPage (item) {
      this.$parent.editPageOpen(item)
    }
  }
}
</script>

<style lang="scss">
.item-container {
  /* max-width: 20rem; */
  margin: 0;
}
.item {
  /* padding: 0.8rem; */
  /* border: solid black 1px; */
  /* background-color: #fefefe; */
}
.item-sub {
  margin: 0 0 0 0.8rem;
}

.node {
  margin-bottom: 2px;
  border-radius: 1px;
  cursor: pointer;
  min-height: 30px;
  border-radius: 5px;
  /* color: white; */
  /* border: 1px solid #424242; */
  & * {
    /* color: white !important; */
  }
}

.el-tree-actions {
  display: none;
}

.node:hover {
  border: 1px solid #E0E0E0;
  & .el-tree-actions {
    display: initial;
  }
}

.node.active-node {
  background-color: #477dc6 !important;
  & .el-tree-actions {
    display: initial;
  }
  &:hover {
    border: none;
  }
}

.dragAreaTree {
  position: relative;
  z-index: 2;
}
.drop-con {
  border: 1px dashed #0088F8 !important;
  box-sizing: border-box !important;
  background: rgba(0, 136, 249, 0.05) !important;
}
</style>
