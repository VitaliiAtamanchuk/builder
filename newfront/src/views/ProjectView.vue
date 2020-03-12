<template lang="html">
  <v-app>

    <v-app-bar app clipped-left clipped-right class='elevation-0' dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-btn icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <div class='grow text-center'>
        <v-toolbar-title>Application</v-toolbar-title>
      </div>
      <v-btn icon class='mr-10'>
        <v-icon>mdi-play</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped fixed permanent width='300'>
      <!-- <v-tabs vertical hide-slider>
        <v-tab><v-icon left>mdi-account</v-icon></v-tab>
        <v-tab><v-icon left>mdi-lock</v-icon></v-tab>
        <v-tab><v-icon left>mdi-access-point</v-icon></v-tab>
        <v-tab><v-icon left>mdi-file-tree</v-icon></v-tab>

        <v-tab-item>
          Pages
        </v-tab-item>
        <v-tab-item>
          <ul>
            <li @click='addEl(el)' v-for='el in elements' :key='el'>{{el}}</li>
          </ul>
        </v-tab-item>
        <v-tab-item>
          Snippets
        </v-tab-item>
        <v-tab-item>
          <ul class='tree-element--conn'>
            <TreeElements :active.sync='selectedElement' :item='el' v-for='(el, index) in addedElements' :key='index'/>
          </ul>
        </v-tab-item>
      </v-tabs> -->
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <v-icon class='pl-3 pr-2'>mdi-file-multiple</v-icon> Pages
          </template>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <v-icon class='pl-3 pr-2'>mdi-format-list-bulleted</v-icon> Elements
          </template>
          <ul>
            <li @click='addEl(el)' v-for='el in elements' :key='el'>{{el}}</li>
          </ul>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <v-icon class='pl-3 pr-2'>mdi-file-tree</v-icon> Current Page DOM
          </template>
          <el-tree
            empty-text='No Data'
            :data="addedElements"
            node-key="id"
            default-expand-all
            draggable>
          </el-tree>
        </el-collapse-item>
      </el-collapse>
    </v-navigation-drawer>

    <v-navigation-drawer v-model="drawer" app clipped fixed right width='300'>
      <div v-if='selectedElement'>
        {{selectedElement}}
        <div class='bottom-border py-2 px-5'>
          <h3 class='mb-5'>Attributes</h3>
          <v-autocomplete
            v-model="newAttr"
            :items="attributes"
            outlined
            dense
            @keyup.enter='addAttr'
            placeholder="Add attr"/>

          {{selectedElement.attrs}}
          <v-row class='align-center' v-for='attrValue, attr in selectedElement.attrs'>
            <v-text-field :label='attr' outlined dense hide-details v-model='selectedElement.attrs[attr]' />
          </v-row>
          <!-- <v-btn-toggle color="primary"
            dense>
            <v-btn>
              <v-icon>mdi-format-letter-case</v-icon>
            </v-btn>
            <v-btn>
              <v-icon>mdi-format-letter-case-lower</v-icon>
            </v-btn>
            <v-btn>
              <v-icon>mdi-format-letter-case-upper</v-icon>
            </v-btn>
            <v-btn>
              <v-icon>mdi-alpha-n</v-icon>
            </v-btn>
          </v-btn-toggle>
          <v-btn icon><v-icon>mdi-align-horizontal-left</v-icon></v-btn>
          <v-btn icon><v-icon>mdi-align-horizontal-right</v-icon></v-btn>
          <v-btn icon><v-icon>mdi-align-vertical-bottom</v-icon></v-btn>
          <v-btn icon><v-icon>mdi-align-vertical-center</v-icon></v-btn>
          <v-btn icon><v-icon>mdi-align-vertical-top</v-icon></v-btn>
          <v-btn title='' icon><v-icon>mdi-align-horizontal-center</v-icon></v-btn> -->
        </div>
      </div>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid fill-height>
        <div v-if='!addedElements.length' class='mx-auto'>
          <h3 class='mx-auto'>No Elements added</h3>
        </div>
        <div v-else id='frame-container'>
          <PageFrame>
            <template v-for='(el, index) in addedElements'><VueElement :el='el'/></template>
          </PageFrame>
        </div>
        <!-- Heelo
        #E4E4E4 - gray
        #F5F5F5 - white-gray
        #1492E6 - blue
        #CACACA - disabled color
        #666666 - color -->
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
import PageFrame from './PageFrame'
import VueElement from './VueElement'
import TreeElements from './TreeElements'
import shortid from 'shortid'

export default {
  components: {PageFrame, VueElement, TreeElements},
  data () {
    return {
      activeNames: ['3'],
      newAttr: null,
      attributes: ['accept', 'accesskey', 'autocapitalize', 'autocomplete', 'contenteditable', 'id', 'class'],
      drawer: null,
      elements: [
        'h1', 'h2', 'h3', 'div', 'span', 'text'
      ],
      selectedElement: null,
      addedElements: []
    }
  },
  methods: {
    addEl (el) {
      this.addedElements.push(this.elementFactory(el))
    },
    elementFactory (el) {
      if (el === 'text') {
        return {
          id: shortid.generate(),
          label: el,
          isText: true,
          value: 'Text'
        }
      }
      return {
        id: shortid.generate(),
        tag: el,
        label: el,
        text: el,
        attrs: {},
        children: [this.elementFactory('text')]
      }
    },
    addAttr () {
      this.selectedElement.attrs[this.newAttr] = ''
      this.newAttr = null
    },
  }
}
</script>

<style lang="scss">
.bottom-border {
  border-bottom: 0.3rem solid #E4E4E4;
}

.v-app-bar.v-app-bar--fixed {
  background-color: #F5F5F5;
  border-bottom: 0.3rem solid #E4E4E4;
}
.theme--light.v-application {
  background-color: #E4E4E4!important;
}
.theme--light.v-navigation-drawer {
  background-color: #F5F5F5;
}
.v-navigation-drawer__border {
  width: 0px!important;
}

.v-tabs {
  height: 100%;
}
.theme--light.v-tabs > .v-tabs-bar {
  background-color: #F5F5F5;
  border-right: 0.3rem solid #E4E4E4;
}
.theme--light.v-tabs-items {
  background-color: #F5F5F5;
}
.v-tab {
  width: 40px!important;
  padding: 0px!important;
  min-width: 40px!important;
  max-width: 40px!important;
  & .v-icon--left {
    margin-right: 0px!important;
  }
}

#frame-container {
  background-color: white;
  height: 100%;
  width: 100%;
}

.tree-element--conn {
  .item {
    cursor: pointer;
  }
  .bold {
    font-weight: bold;
  }
  ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }
  li {
    cursor: pointer;
    padding: 6px 8px;
    user-select: none;
    &:hover {
      background-color: rgba(0,0,0,0.04);
    }
  }
}

</style>
