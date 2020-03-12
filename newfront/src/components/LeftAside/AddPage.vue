<template lang="html">
  <v-dialog v-model='dialog' max-width="400">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" text color='grey darken-2'><v-icon>mdi-plus</v-icon>Add</v-btn>
    </template>

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
  data () {
    return {
      dialog: false,
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
    }
  },
  methods: {
    open () {
      this.dialog = true
    },
    submit () {
      this.$emit('onadd', {
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
