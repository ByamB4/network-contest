<template>
  <v-card rounded="lg" min-height="600" elevation="3">
    <v-card-title class="d-flex justify-center">
      <v-btn-toggle v-model="section" mandatory borderless>
        <v-btn small value="challenge">
          <span class="f-s-bold f-15">Бодлогууд</span>
        </v-btn>
        <v-btn small value="laboratory">
          <span class="f-s-bold f-15">Лаборатори</span>
        </v-btn>
      </v-btn-toggle>
    </v-card-title>
    <v-card-text height="500">
      <v-row no-gutters>
        <v-col cols="4" class="scroll" style="height: 630px">
          <v-tabs vertical style="direction: ltr !important" class="pl-3">
            <v-tab
              v-for="(chall, _) in challenges"
              :key="_"
              class="d-flex justify-start text-none"
              :class="{ margin10: _ > 0 }"
            >
              <div class="text-left">
                <h4 class="tracking-normal" v-text="chall.name" />
                <div class="mt-1 f-12 tracking-normal">
                  <span>{{ chall.solves }} бодсон</span>
                  <span class="ml-3">{{ chall.point }} оноо</span>
                </div>
              </div>
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="8">
          <v-card
            height="100%"
            style="background-color: rgba(239, 239, 239, 50)"
            elevation="0"
          >
            <v-card-title class="d-flex justify-center">
              <h4>Network problem IP range</h4>
            </v-card-title>
            <v-card-text>
              <p class="text-justify black--text f-16">
                Энэхүү хэсэгт бодлогын тайлбар болон нэмэлт мэдээлэл агуулах бол
                хариуг дараах зургийн дагуу олно уу. Энэхүү хэсэгт бодлогын
                тайлбар болон нэмэлт мэдээлэл агуулах бол хариуг дараах зургийн
                дагуу олно уу.
              </p>
              <v-img src="vlan.png" />
            </v-card-text>
            <v-card-actions>
              <v-container class="py-0">
                <v-row no-gutters>
                  <v-col cols="6">
                    <v-checkbox
                      v-model="checkbox1"
                      on-icon="mdi-checkbox-marked-circle"
                      off-icon="mdi-checkbox-blank-circle-outline"
                      label="PC-2 дамжихгүй"
                    ></v-checkbox>
                  </v-col>
                  <v-col cols="6">
                    <v-checkbox
                      v-model="checkbox2"
                      on-icon="mdi-checkbox-marked-circle"
                      off-icon="mdi-checkbox-blank-circle-outline"
                      label="PC-2 дамжихгүй"
                    ></v-checkbox>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="6">
                    <v-checkbox
                      v-model="checkbox3"
                      on-icon="mdi-checkbox-marked-circle"
                      off-icon="mdi-checkbox-blank-circle-outline"
                      label="PC-2 дамжихгүй"
                    ></v-checkbox>
                  </v-col>
                  <v-col cols="6">
                    <v-checkbox
                      v-model="checkbox4"
                      on-icon="mdi-checkbox-marked-circle"
                      off-icon="mdi-checkbox-blank-circle-outline"
                      label="PC-2 дамжихгүй"
                    ></v-checkbox>
                  </v-col>
                </v-row>
                <v-row justify="end" no-gutters>
                  <v-col cols="3">
                    <v-btn color="primary" elevation="2">Submit</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    section: "challenge",
    checkbox1: true,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    challenges: [
      {
        name: "IPv6 range challenge",
        solves: "32",
        point: "250"
      },
      {
        name: "Network problem IP range",
        solves: "15",
        point: "670"
      },
      {
        name: "My network",
        solves: "15",
        point: "670"
      },
      {
        name: "IPv6 calculator",
        solves: "15",
        point: "670"
      },
      {
        name: "NAT solution",
        solves: "5",
        point: "1000"
      },
      {
        name: "VLAN configuration",
        solves: "0",
        point: "1000"
      },
      {
        name: "Fix my DNS problem",
        solves: "14",
        point: "735"
      },
      {
        name: "My Network",
        solves: "5",
        point: "820"
      },
      {
        name: "My Network",
        solves: "12",
        point: "123"
      },
      {
        name: "VLAN configuration",
        solves: "0",
        point: "1000"
      },
      {
        name: "Fix my DNS problem",
        solves: "14",
        point: "735"
      },
      {
        name: "My Network",
        solves: "5",
        point: "820"
      },
      {
        name: "My Network",
        solves: "12",
        point: "123"
      },
      {
        name: "VLAN configuration",
        solves: "0",
        point: "1000"
      },
      {
        name: "Fix my DNS problem",
        solves: "14",
        point: "735"
      },
      {
        name: "My Network",
        solves: "5",
        point: "820"
      },
      {
        name: "My Network",
        solves: "12",
        point: "123"
      }
    ]
  })
}
</script>

<style lang="sass">
.scroll
  overflow-y: scroll
  direction: rtl
  &::-webkit-scrollbar
    width: 8px
    &-track
      border-radius: 8px !important
      background: #C4C4C4 !important
    &-thumb
      border-radius: 10px !important
      max-height: 40px !important
      background: #061058

.v-btn-toggle
  border-radius: 20px
  background-color: #ddd !important
.v-btn
  text-transform: none
  color: #fff !important
  &--active
    border-radius: 20px !important
    background-color: #2196F3 !important
.theme--light
  .v-btn.v-btn--has-bg
    background-color: #ddd
  .v-label
    font-size: 15px
    color: #000 !important
</style>
