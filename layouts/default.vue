<template>
  <v-app>
    <AppView />
  </v-app>
</template>

<script>
export default {
  components: {
    AppView: () => import("~/layouts/AppView")
  }
}
</script>

<style></style>
