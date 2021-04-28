<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="3">
        <v-card class="bg-transparent" elevation="0">
          <v-card-text class="d-flex align-center py-0">
            <v-avatar size="46">
              <v-img src="/ccs.png" alt="logo" />
            </v-avatar>
            <span class="font-weight-bold f-21 ml-3" style="color: #fd4d4d"
              >Computer Network</span
            >
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-progress-linear
          v-model="progress"
          :color="$blue"
          rounded
          height="18"
        >
          <strong>{{ Math.ceil(progress) }}%</strong>
        </v-progress-linear>
      </v-col>
      <v-col cols="3">
        <v-card class="bg-transparent" elevation="0">
          <v-card-text class="d-flex align-center py-0">
            <v-row>
              <v-col cols="3">
                <div class="text-center">
                  <h3 class="col-supp">Rank</h3>
                  <span class="font-weight-bold f-18"> 5 </span>
                </div>
              </v-col>

              <v-col cols="3">
                <div class="text-center">
                  <h3 class="col-supp">Score</h3>
                  <span class="font-weight-bold f-18"> 1500 </span>
                </div>
              </v-col>
              <v-col cols="3">
                <div class="text-center">
                  <h3 class="col-supp">School</h3>
                  <span class="font-weight-bold f-18"> SICT </span>
                </div>
              </v-col>
              <v-col cols="3">
                <v-avatar rounded size="52">
                  <v-img
                    src="https://avatars.githubusercontent.com/u/43212232?v=4"
                    alt="logo"
                  />
                </v-avatar>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <Actions />
      </v-col>
      <v-col cols="8">
        <v-card>
          <v-card-title class="headline">
            Welcome to the Vuetify + Nuxt.js template
          </v-card-title>
          <v-card-text>
            <p>
              Vuetify is a progressive Material Design component framework for
              Vue.js. It was designed to empower developers to create amazing
              applications.
            </p>
            <p>
              For more information on Vuetify, check out the
              <a
                href="https://vuetifyjs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                documentation </a
              >.
            </p>
            <p>
              If you have questions, please join the official
              <a
                href="https://chat.vuetifyjs.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="chat"
              >
                discord </a
              >.
            </p>
            <p>
              Find a bug? Report it on the github
              <a
                href="https://github.com/vuetifyjs/vuetify/issues"
                target="_blank"
                rel="noopener noreferrer"
                title="contribute"
              >
                issue board </a
              >.
            </p>
            <p>
              Thank you for developing with Vuetify and I look forward to
              bringing more exciting features in the future.
            </p>
            <div class="text-xs-right">
              <em><small>&mdash; John Leider</small></em>
            </div>
            <hr class="my-3" />
            <a
              href="https://nuxtjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nuxt Documentation
            </a>
            <br />
            <a
              href="https://github.com/nuxt/nuxt.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nuxt GitHub
            </a>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="2">
        <v-card>
          <v-card-title class="headline">
            Welcome to the Vuetify + Nuxt.js template
          </v-card-title>
          <v-card-text>
            <p>
              Vuetify is a progressive Material Design component framework for
              Vue.js. It was designed to empower developers to create amazing
              applications.
            </p>
            <p>
              For more information on Vuetify, check out the
              <a
                href="https://vuetifyjs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                documentation </a
              >.
            </p>
            <p>
              If you have questions, please join the official
              <a
                href="https://chat.vuetifyjs.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="chat"
              >
                discord </a
              >.
            </p>
            <p>
              Find a bug? Report it on the github
              <a
                href="https://github.com/vuetifyjs/vuetify/issues"
                target="_blank"
                rel="noopener noreferrer"
                title="contribute"
              >
                issue board </a
              >.
            </p>
            <p>
              Thank you for developing with Vuetify and I look forward to
              bringing more exciting features in the future.
            </p>
            <div class="text-xs-right">
              <em><small>&mdash; John Leider</small></em>
            </div>
            <hr class="my-3" />
            <a
              href="https://nuxtjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nuxt Documentation
            </a>
            <br />
            <a
              href="https://github.com/nuxt/nuxt.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nuxt GitHub
            </a>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    progress: 35
  })
}
</script>
