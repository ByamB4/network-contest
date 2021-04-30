<template>
  <v-app>
    <AppView />
  </v-app>
</template>

<script>
export default {
  components: {
    AppView: () => import("./AppView")
  }
}
</script>

<style></style>
