<template>
  <v-container fluid>
    <v-footer
      app
      tile
      dark
      padless
      fixed
    >
      <v-card
        style="background: linear-gradient(to right, #00b7c2,#008087,#008087,#00b7c2);"
        class="flex"
        height="55"
        flat
        tile
        >
        <v-row dense > 
          <v-card-text class="py-0 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>Copyright© HABBOU Ayoub CoroNews</strong>
          </v-card-text>
        </v-row>
        <v-row dense 
            align="center"
            justify="center">
          <v-btn
              v-for="i in icons"
              :key="i"
              :href="i.link"
              class="mx-2 text-center"
              dark
              icon
            >
              <v-icon size="24px">{{ i.icon }}</v-icon>
          </v-btn>
        </v-row>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script>
  export default {
  name: 'footer',
  data: () => ({
      icons: [
        {
          icon:'far fa-address-card',
          link:'https://youby07.github.io',
        },
        {
          icon:'mdi-github',
          link:'https://github.com/Youby07',
        },
        {
          icon:'mdi-linkedin',
          link:'https://www.linkedin.com/in/ayoub-habbou-173097175/',
        },
        {
          icon:'fab fa-dyalog',
          link:'https://devpost.com/Youby07?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav',
        },
      ],
    }),
  }
</script>

<style>

</style>