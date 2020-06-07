<template>
  <v-app id="inspire" style="background:#e0e0e0;">
    <v-container fluid>
      <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        style="background: linear-gradient(to right, #00b7c2,#008087,#008087,#00b7c2);" 
        dark
      >
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="./img/LogoTitle.png"
            transition="scale-transition"
            width="190"
          />
        </div>
        <!-- <v-spacer></v-spacer> -->

        <v-toolbar-items >
          <v-menu open-on-hover  offset-y>
            <template v-slot:activator="{ on }">
              <v-btn class="headline" text v-on="on">Navigate <i class="fa fa-angle-down ml-3"></i></v-btn>
            </template>

            <v-list class="li">
              <v-list-item><a class="justify-center black--text text--black" @click="$vuetify.goTo('#global',options)">Global World</a ></v-list-item>
              <v-list-item><a class="justify-center black--text text--black" @click="$vuetify.goTo('#country',options)">Countries Statistics</a ></v-list-item>
              <v-list-item><a class="justify-center black--text text--black" @click="$vuetify.goTo('#compare',options)">Compare Countries</a ></v-list-item>
              <v-list-item><a class="justify-center black--text text--black" @click="$vuetify.goTo('#fight',options)">Save the World</a ></v-list-item>
            
            </v-list>
          </v-menu>
          <v-btn class="headline"  @click="$vuetify.goTo('#contact',options)" text>contact</v-btn>
          
        </v-toolbar-items>
        <!-- <v-spacer></v-spacer>
        <vs-switch 
            v-model="$vuetify.theme.dark"
            class="ma-0 pa-0"
            color="#212121"
            hide-details>
          <template #off>
              <i class='fas fa-sun' ></i>
          </template>
          <template #on>
              <i class='fas fa-moon' ></i>
          </template>
        </vs-switch> -->
      </v-app-bar>
    </v-container>
    <!-- <test></test> -->
    <section class="full-height">
      <carousel></carousel>
    </section>

    <section class="full-height">
      <globalTitle></globalTitle>
    </section>
    
    <section class="full-height">
      <globalNews></globalNews>
    </section>

    <section class="full-height">
      <countryNews ></countryNews>
    </section>

    <section class="full-height">
      <compareTitle></compareTitle>
    </section>

    <section class="full-height">
      <compare></compare>
    </section>

    <v-divider class="mt-9"></v-divider>
    <section class="full-height">
      <saveworld></saveworld>
    </section>
    <v-divider class="mt-9"></v-divider>
    <section class="full-height">
      <contact></contact>
    </section>


    <Footer></Footer>
  </v-app>
</template>

<script>
//  import test from './components/test';
 import carousel from './components/carousel';
 import globalTitle from './components/globalTitles';
 import globalNews from './components/global';
 import countryNews from './components/countryNews';
 import compareTitle from './components/ComapreTitles';
 import compare from './components/compare';
 import saveworld from './components/saveWorld';
 import contact from './components/contact';
 import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    // test,
    carousel,
    globalTitle,
    globalNews,
    countryNews,
    compareTitle,
    compare,
    saveworld,
    contact,
    Footer,
  },
  //  watch: {
  //     color (val) {
  //       this.$vuetify.theme.themes[this.isDark ? 'dark' : 'light'].background = val
  //     },
  //  }
  //  computed:{
  //       isDark(){ return (this.$vuetify.theme.dark) ? 'dark' : 'light' }
  //   }
}
</script>
<style scoped>
  .li :hover
  {
    background-color: rgb(233, 233, 233);
  }
  .full-height
  {
    height: 100%;
  }
 .scroll-to-top {
  width: 50px;
  height: 50px;
  text-align: center;
  color: white;
  background: rgba(23,162,184,0.8);
  line-height: 45px;
}

.scroll-to-top:focus, .scroll-to-top:hover {
  color: white;
}

.scroll-to-top:hover {
  background: #343a40;
}

.scroll-to-top i {
  font-weight: 800;
}
</style>