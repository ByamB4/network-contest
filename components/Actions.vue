<template>
  <v-card rounded="lg" elevation="3" class="overflow">
    <v-card-title>
      <v-row>
        <v-col cols="6">
          <h4 class="col-dark">Actions</h4>
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
        v-for="(ac, _) in actions"
        :key="_"
        class="f-15"
        :class="{ margin15: _ > 0 }"
      >
        <span class="col-blue f-s-bold" v-text="ac.user" />
        <span class="f-s-bold" v-text="ac.action" />
        <span class="col-blue f-s-bold" v-text="ac.description" />
        <h6 class="text-right opacity-70 tracking-wider" v-text="ac.date" />
        <v-divider width="95%" class="d-none d-sm-block opacity-50" />
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: true,
    actions: [
      {
        user: "Ebo",
        action: "solved",
        description: "IPv6 range challenge",
        date: "25th June, 18:00"
      },
      {
        user: "Tino",
        action: "solved",
        description: "Network problem ip range",
        date: "25th June, 15:57"
      },
      {
        user: "ByamB4",
        action: "solved",
        description: "IPv6 range challenge",
        date: "25th June, 18:00"
      },
      {
        user: "samsepi0l",
        action: "solved",
        description: "My network",
        date: "25th June, 15:57"
      },
      {
        user: "Ebo",
        action: "solved",
        description: "IPv6 range challenge",
        date: "25th June, 18:00"
      },
      {
        user: "Tino",
        action: "solved",
        description: "Network problem ip range",
        date: "25th June, 15:57"
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
