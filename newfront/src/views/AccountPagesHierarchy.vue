<template lang="html">
  <div class="ma-10">
    <h1 class='mb-4'>Pre made pages hierarchy <Add /></h1>

    <v-row>
      <v-card width='400' class='ma-4 grey lighten-4'>
        <v-card-title class='white'>Card #1</v-card-title>
        <v-card-text class='pa-4'>
          <v-treeview :items="tree" item-key="name" open-on-click>
            <template v-slot:prepend="{ item, open }">
              <v-icon>mdi-file-outline</v-icon>
            </template>
          </v-treeview>
        </v-card-text>
      </v-card>

      <v-card width='400' class='ma-4 grey lighten-4'>
        <v-card-title class='white'>Card #2</v-card-title>
        <v-card-text class='pa-4'>
          <v-treeview :items="tree" item-key="name" open-on-click>
            <template v-slot:prepend="{ item, open }">
              <v-icon>mdi-file-outline</v-icon>
            </template>
          </v-treeview>
        </v-card-text>
      </v-card>

      <v-card width='400' class='ma-4 grey lighten-4'>
        <v-card-title class='white'>Card #3</v-card-title>
        <v-card-text class='pa-4'>
          <v-treeview :items="tree" item-key="name" open-on-click>
            <template v-slot:prepend="{ item, open }">
              <v-icon>mdi-file-outline</v-icon>
            </template>
          </v-treeview>
        </v-card-text>
      </v-card>

      <v-card width='400' class='ma-4 grey lighten-4'>
        <v-card-title class='white'>Card #4</v-card-title>
        <v-card-text class='pa-4'>
          <v-treeview :items="tree" item-key="name" open-on-click>
            <template v-slot:prepend="{ item, open }">
              <v-icon>mdi-file-outline</v-icon>
            </template>
          </v-treeview>
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import Add from '@/components/Admin/Add'

export default {
  components: {Add},
  data () {
    return {
      tree: [
        {name: 'Landing', children: [{name: 'Front'}, {name: 'Terms'}, {name: 'Privacy'}]},
        {name: 'Auth', children: [{name: 'Login'}, {name: 'Register'}, {name: 'Password Forgot'}, {name: 'Password Reset'}, {name: 'Activate account'}]},
        {name: 'Account', children: [{name: 'Home'}, {name: 'Profile'}]},
      ]
    }
  }
}
</script>

<style lang="css">
</style>
