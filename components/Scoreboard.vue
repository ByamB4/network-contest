<template>
  <v-card rounded="lg" elevation="3" class="overflow">
    <v-card-title>
      <v-row>
        <v-col cols="6">
          <h3 class="col-dark">Scoreboard</h3>
        </v-col>
        <v-col cols="6" class="d-flex justify-end">
          <v-switch v-model="show" class="mt-0" color="indigo" dense inset />
        </v-col>
      </v-row>
    </v-card-title>
    <v-row class="py-0 my-0 mt-n5" no-gutters>
      <v-col cols="12" align="center" class="py-0 my-0">
        <v-divider width="95%" class="d-none d-sm-block" />
      </v-col>
    </v-row>

    <v-card-text v-if="show">
      <div
        v-for="(sc, _) in scores"
        :key="_"
        class="f-17"
        :class="{ margin15: _ > 0 }"
      >
        <v-row class="f-s-bold">
          <v-col cols="1" align="center">
            <span class="black--text opacity-70" v-text="_ + 1" />
          </v-col>
          <v-col cols="6">
            <span class="col-blue" v-text="sc.name" />
          </v-col>
          <v-col cols="3" align="end">
            <span class="black--text opacity-70" v-text="sc.school" />
          </v-col>
        </v-row>
        <v-divider width="95%" class="mt-2 d-none d-sm-block opacity-50" />
      </div>
    </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <span class="col-gray f-18">View full rating</span>
      <v-icon class="ml-2" color="#3246D3">mdi-arrow-right-drop-circle</v-icon>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: true,
    scores: [
      {
        name: "Ebo",
        school: "SICT"
      },
      {
        name: "itsmetino",
        school: "SICT"
      },
      {
        name: "ByamB4",
        school: "SICT"
      },
      {
        name: "samsepi0l",
        school: "SICT",
        date: "25th June, 15:57"
      },
      {
        name: "Faker 1",
        school: "FAKER"
      },
      {
        name: "Faker 2",
        school: "FAKER"
      }
    ]
  })
}
</script>
<style scoped>
.scroll {
  overflow-y: scroll;
}
</style>
