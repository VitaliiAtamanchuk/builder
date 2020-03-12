<template>
  <div>
    <v-app-bar app class='projects-app-bar'>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app fixed permanent left width='260'>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Frontend Builder
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list dense nav>
        <v-list-item link :to='{name: "projects"}' exact>
          <v-list-item-icon><v-icon>mdi-file-powerpoint-outline</v-icon></v-list-item-icon>
          <v-list-item-content><v-list-item-title>Projects</v-list-item-title></v-list-item-content>
        </v-list-item>
        <v-list-item link :to='{name: "pagesHierarchy"}'>
          <v-list-item-icon><v-icon>mdi-file-tree</v-icon></v-list-item-icon>
          <v-list-item-content><v-list-item-title>Pages Hierarchy</v-list-item-title></v-list-item-content>
        </v-list-item>
        <v-list-item link :to='{name: "pageLayouts"}'>
          <v-list-item-icon><v-icon>mdi-file-multiple-outline</v-icon></v-list-item-icon>
          <v-list-item-content><v-list-item-title>Page layouts</v-list-item-title></v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view />
    </v-content>

  </div>
</template>

<script>
export default {
  data () {
    return {
      title: ""
    }
  },
  created () {
    this.title = this.$route.meta.title
  },
  watch: {
    '$route':  {
      handler () {
        this.title = this.$route.meta.title
      }
    }
  }
}
</script>

<style lang='scss'>
  .projects-app-bar {
    box-shadow: 0 1px 0 0 #e5e5e5 !important;
  }
  .v-data-table th.text-left {
    text-align: left!important;
  }
  .cursor-pointer {
    cursor: pointer;
  }
</style>
