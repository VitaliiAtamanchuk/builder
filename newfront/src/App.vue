<template>
  <v-app>
    <router-view/>
    <GlobalSnackbar ref='snackbar' />
  </v-app>
</template>

<script>
import GlobalSnackbar from '@/components/GlobalSnackbar'

export default {
  components: {GlobalSnackbar},
  data: () => ({
  }),
  mounted() {
    this.$root.$snackbar = this.$refs.snackbar.show
  },
};
</script>

<style lang='css'>
html {
  overflow-y: auto !important;
}
.dragArea {
  position: relative;
  z-index: 2;
}

.ghost {
  background: red;
  opacity: .5;
}
</style>
