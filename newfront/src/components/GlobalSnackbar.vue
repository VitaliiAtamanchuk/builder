<template lang="html">
  <v-snackbar v-model="snackbar">
    {{ msg }}
    <v-btn color="pink" text @click="snackbar = false">
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  data () {
    return {
      snackbar: false,
      msg: ''
    }
  },
  methods: {
    show (msg) {
      this.msg = msg
      this.snackbar = true
    }
  }
}
</script>

<style lang="css">
</style>
