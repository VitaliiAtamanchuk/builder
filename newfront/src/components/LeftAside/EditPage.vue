<template lang="html">
  <v-dialog v-model='dialog' max-width="400">

    <v-card>
      <v-form ref="form" @submit.prevent='submit'>
        <v-card-title class="headline">Add a new page</v-card-title>
        <v-card-text>
          <v-text-field autofocus outlined class='mt-8' v-model='title' label='Title' />
          <v-text-field outlined v-model='name' label='Name' />
          <v-text-field outlined v-model='path' label='Path' />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="dialog = false">Close</v-btn>
          <v-btn color="green darken-1" text type="submit">Add</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>

  </v-dialog>
</template>

<script>
export default {
  props: ['item'],
  data () {
    return {
      dialog: false,
      id: null,
      title: null,
      name: null,
      path: null,
    }
  },
  watch: {
    dialog () {
      this.name = null
      this.title = null
      this.path = null
      this.id = this.item.id
      this.title = this.item.title
      this.name = this.item.name
      this.path = this.item.path
    }
  },
  methods: {
    open () {
      this.dialog = true
    },
    submit () {
      this.$emit('submit', {
        id: this.id,
        title: this.title,
        name: this.name,
        path: this.path,
      })
      this.dialog = false
    }
  }
}
</script>

<style lang="css">
</style>
