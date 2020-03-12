<template lang="html">
  <div class='pa-5'>
    <v-autocomplete v-model='preset' item-text='name' item-id='name' outlined label='Select Preset' :items="items">
      <template v-slot:item="{ item }">
        <v-layout column class='pt-3'>
          <h4>{{item.name}}</h4>
          <p>{{item.description}}</p>
        </v-layout>
      </template>
    </v-autocomplete>
  </div>
</template>

<script>
import ProjectStore from '@/projectStore'

export default {
  data () {
    return {
      items: [
        {name: 'Basil', description: 'Basil allows users to browse recipes curated by a group of chefs and bartenders. Its brand and app are designed to be approachable, direct, and delightfully surprising.'},
        {name: 'Crane', description: 'Crane is a travel app that helps users find and book travel, lodging, and restaurant options that match their input preferences. The Crane app is both functional (used for booking reservations) and informative (allowing users to explore and learn about new experiences).'},
        {name: 'Fortnightly', description: 'Fortnightly is an app that covers the news on a variety of topics. The app’s focus is on content, specifically article copy and photography. Fortnightly’s brand is designed to provide a variety of content in a way that puts the content itself at the forefront of the user experience. Branding is expressed through the Fortnightly logo, typographic system, and appearances of purple (the app’s secondary color) in an otherwise grayscale app. This subtle approach ensures that brand will be noticeable when it is expressed through color or typography.'},
        {name: 'Owl', description: 'Owl is an educational app that provides courses for people who want to explore and learn new skills in design, art, architecture, and fashion. The Owl brand uses bold color, shape, and typography to express its brand attributes: energy, daring, and fun.'},
        {name: 'Rally', description: 'Rally is a personal finance app that tracks spending habits, and generates insights and alerts related to your finances. Rally is designed to display a large amount of densely organized information in a manageable way. Users are invited to identify patterns in the data presented, by cross-referencing and investigating information.'},
        {name: 'Reply', description: 'Reply is an app that helps individuals and groups communicate. It’s designed for clarity, legibility, intuition, and ease-of-use. Reply’s brand projects friendliness, competence, and a hint of quirkiness.'},
        {name: 'Shrine', description: 'The Shrine app provides an online marketplace featuring lifestyle and fashion items from promoted labels. Shrine’s brand aesthetic is modern, elegant, and sophisticated. Shrine is the unifying concept behind the various brands and products showcased.'},
      ]
    }
  },
  computed: {
    hasSelectedPage: () => ProjectStore.hasSelectedPage,
    preset: {
      get () {
        return ProjectStore.store.project.data.preset
      },
      set (value) {
        ProjectStore.store.project.data.preset = value
      }
    }
  }
}
</script>

<style lang="css">
</style>
