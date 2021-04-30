<template>
  <div>
    <v-progress-linear color="success" value="38" height="16">
      <template v-slot:default="{ value }">
        <span v-text="Math.ceil(value) + '%'" />
      </template>
    </v-progress-linear>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
