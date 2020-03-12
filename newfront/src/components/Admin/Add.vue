<template lang="html">
  <v-dialog v-model='dialog' max-width="600">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" depressed dark v-on="on" class='mb-3'>Add a new</v-btn>
    </template>

    <v-card>
      <v-form ref="form" @submit.prevent='submit'>
        <v-card-title class="headline">Add a new pages hierarchy</v-card-title>
        <v-card-text>

          <v-text-field autofocus outlined class='mt-8' v-model='name' label='Name' />

          <v-label>Pages:</v-label>
          <div class="grey lighten-3 pa-4">
            <PageTree v-model='tree' />
            tree
          </div>

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
import PageTree from '@/components/PageTree'

export default {
  components: {PageTree},
  data () {
    return {
      tree: [
        {name: 'Landing', children: [{name: 'Front'}, {name: 'Terms'}, {name: 'Privacy'}]},
        {name: 'Auth', children: [{name: 'Login'}, {name: 'Register'}, {name: 'Password Forgot'}, {name: 'Password Reset'}, {name: 'Activate account'}]},
        {name: 'Account', children: [{name: 'Home'}, {name: 'Profile'}]},
      ],
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
    }
  }
}
</script>

<style lang="css">
</style>
