<template lang="html">
  <draggable
    v-bind="dragOptions"
    tag="div"
    class="dragAreaTree item-container"
    :list='list'
    :value="value"
    @input="emitter">
    <!-- <div v-if='noEls' class='drop-con text-center'>Drop here</div> -->
    <div class="item-group" v-for='(el, index) in realValue' :key='el.index'>
      <div class="item">
        <v-flex @click='selectEl(el)' @mouseover='mouseoverHandler(el)' @mouseleave='mouseleaveHandler(el)' :class='{"active-node": selectedElId === el.id}' class="d-flex justify-between node" align-center>
          <span>
            <v-icon size='19' @click.stop='toggleOpen(index)' v-if='!!el.children.length && opened[index]'>mdi-menu-down</v-icon>
            <v-icon size='19' @click.stop='toggleOpen(index)' v-if='!!el.children.length && !opened[index]'>mdi-menu-right</v-icon>
            <v-icon class='ml-1' size='19' v-if="el.isText">mdi-format-text</v-icon>

            <v-text-field clearable autofocus @click.stop v-if='editTextItem && editTextItem.id === el.id' v-model='editTextItem.text' @keyup.enter='saveText(el)'/>
            <template v-else>
              <span class='subtitle-2 font-weight-light' @dblclick='editTextItem=el' v-if='el.isText'>{{el.text}}</span>
              <span class='font-weight-bold' v-else>{{el.name}}</span>
            </template>
           </span>

          <v-spacer/>
          <span class='el-tree-actions'>
            <v-btn v-if='el.isText' @click.stop='editTextItem=el' icon class='elevation-0' small>
              <v-icon size='17'>mdi-pencil</v-icon>
            </v-btn>
            <v-btn @click.stop='deleteEl(el)' icon class='elevation-0' small>
              <v-icon size='17'>mdi-delete</v-icon>
            </v-btn>
          </span>

        </v-flex>
        <NestedDndNode
          v-if='!el.isText && opened[index]'
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
      infoBoxEL: null,
      editTextItem: null,
      selectedElId: null,
      elToHighlight: null,
      prevItemStyle: {}  // id: style
    }
  },
  computed: {
    selectedEl: () => ProjectStore.store.selectedEl,
    dragOptions() {
      return {
        animation: 0,
        group: "builder",
        disabled: false,
        ghostClass: "ghost",
        // handle: ".drag-handler",
        // draggable: '.drag-handler'
      }
    },
    // this.value when input = v-model
    // this.list  when input != v-model
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
    toggleOpen (index) {
      // console.log('roggl')
      // console.log(this.opened[index])
      Vue.set(this.opened, index, !this.opened[index])
      // this.opened[index] = !this.opened[index]
      // console.log(this.opened[index])
    },
    selectEl (item) {
      if (!item.isText) {
        const theSame = item.id === this.selectedElId
        this.selectedElId = theSame ? null : item.id
        ProjectStore.selectEl(theSame ? null : item)
      }
    },
    emitter(value) {
      this.$emit("input", value)
    },
    mouseoverHandler (item) {
      var el = this.$root.$canvasDoc.getElementById(item.id)
      if (el && this.elToHighlight === null) {
        var rect = el.getBoundingClientRect()
        this.elToHighlight = this.$root.$canvasDoc.createElement('div')
        this.elToHighlight.style.position = 'absolute'
        this.elToHighlight.style.top = rect.top
        this.elToHighlight.style.left = rect.left
        this.elToHighlight.style.width = rect.right - rect.left + 'px'
        this.elToHighlight.style.height = rect.bottom - rect.top + 'px'
        this.elToHighlight.style.background = '#63b2f3ab'
        this.elToHighlight.style.zIndex = 10000
        this.$root.$canvasDoc.body.appendChild(this.elToHighlight)

        this.infoBoxEL = document.createElement('div')
        this.infoBoxEL.style.position = 'absolute'
        this.infoBoxEL.style.top = 0
        this.infoBoxEL.style.left = 0
        this.infoBoxEL.style.zIndex = 10000
        this.infoBoxEL.style.background = '#262626'
        this.infoBoxEL.style.opacity = 0.95
        this.infoBoxEL.style.maxWidth = '320px'
        this.infoBoxEL.style.minWidth = '280px'
        this.infoBoxEL.style.color = 'white'
        const filteredProps = _.pickBy(item.props, prop => prop.hasOwnProperty('value') && prop.value !== null)
        const propsHtml = Object.values(filteredProps).map(prop => `<li>${prop.name}=${prop.value}</li>`).join('')
        this.infoBoxEL.innerHTML = `
          <div style='padding: 30px 30px 40px 50px;'>
            <div>
              <h3>Classes: </h3>
              ${item.classes.join(', ')}
            </div>
            <div style='padding-top: 20px'>
              <h3>Props: </h3>
              <ul class='margin-left: 50px;'>${propsHtml}</ul>
            </div>
          </div>
        `
        document.body.appendChild(this.infoBoxEL)
      }
    },
    mouseleaveHandler (item) {
      if (this.elToHighlight !== null) {
        this.elToHighlight.remove()
        this.elToHighlight = null
        this.infoBoxEL.remove()
        this.infoBoxEL = null
      }
    },
    deleteEl (item) {
      this.items = []
      ProjectStore.deleteEl(item.id)
      if (this.elToHighlight !== null) {
        this.elToHighlight.remove()
        this.elToHighlight = null
        this.infoBoxEL.remove()
        this.infoBoxEL = null
      }
    },
    saveText (item) {
      ProjectStore.editEl(item.id, this.editTextItem.text)
      this.editTextItem = null
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
  & * {
    color: white;
  }
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
