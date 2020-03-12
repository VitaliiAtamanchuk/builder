<template lang="html">
  <v-dialog v-model='dialog' max-width="400">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" depressed dark v-on="on" class='mb-3'>Add a new project</v-btn>
    </template>

    <v-card>
      <v-form ref="form" @submit.prevent='submit'>
        <v-card-title class="headline">Add a new project</v-card-title>
        <v-card-text>
          <v-text-field autofocus outlined class='mt-8' v-model='name' label='Name' />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" text @click="dialog = false">Close</v-btn>
          <v-btn color="primary darken-1" text type="submit">Add</v-btn>
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
      name: null
    }
  },
  watch: {
    dialog () {
      this.name = null
    }
  },
  methods: {
    submit () {
      this.$createProject(this.name)
        .then(resp => {
          this.$root.$snackbar('Project have been successfully created.')
          this.$emit('onadd')
          this.dialog = false
        })
    }
  }
}
</script>

<style lang="css">
</style>
