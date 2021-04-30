<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="4">
        <Logo />
      </v-col>
      <v-col cols="4">
        <Solves />
      </v-col>
      <v-col cols="4">
        <UserInfo />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <Actions />
        <Notifications class="mt-5" />
      </v-col>
      <v-col cols="6">
        <CompetitionView />
        <Timeleft class="mt-5" />
      </v-col>
      <v-col cols="3">
        <Scoreboard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style></style>
