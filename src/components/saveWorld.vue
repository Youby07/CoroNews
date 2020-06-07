<template>
  <v-container fluid>
    <v-card 
      id="fight"
      style="background:#07285a;" 
      elevation="0"
      tile>
      <div class=" d-flex flex-no-wrap justify-space-between">
        <v-row dense >
          <v-col cols="12">
            <v-row
              class="my-12 py-12"
              align="center"
              justify="center"
              style="height: 100%;">
            <v-card
                class="mb-12 pb-12"
                align="center"
                elevation="0"
                style="background:#07285a" 
                tile >
              <v-avatar
                class="ma-15"
                size="480"
                tile
                >
                <v-img src="../img/Fighting.gif" transition="slide-x-transition"></v-img>
              </v-avatar>
            </v-card>
          <v-card
                class="mb-12 pb-12"
                align="center"
                elevation="0"
                style="background:#07285a" 
                tile >
              
                <v-card-title class="justify-center headline white--text" transition="slide-x-transition"><h1>Doctors Are Fighting</h1></v-card-title>
              
                <v-card-title class="pa-2 justify-center white--text"><h3>Numbers and increasing charts displayed above are humans dying everyday</h3></v-card-title>
                <v-card-title class="pa-2 justify-center white--text"><h3>Doctors are sacrificing their lives for saving our world</h3></v-card-title>
                <v-btn class="pa-2 mt-4 white--text justify-center" x-large text @click="$vuetify.goTo('#save',options)">Next<i class="fa fa-angle-down ml-3"></i></v-btn>
          </v-card>
            </v-row>
              </v-col>
            </v-row>
      </div>
    </v-card>

    <v-card 
      id="save"
      style="background:#00484C" 
      elevation="0"
      tile>
      <div class=" d-flex flex-no-wrap justify-space-between">
        <v-row dense >
          <v-col cols="12">
            <v-row
              class="my-12 py-12"
              align="center"
              justify="center"
              style="height: 100%;">
            <v-card
                class="mb-12 pb-12"
                align="center"
                elevation="0"
                style="background:#00484C" 
                tile >
                <v-btn class="pa-2 mt-4 white--text justify-center" x-large text @click="$vuetify.goTo('#fight',options)">Back<i class="fa fa-angle-up ml-3"></i></v-btn>
                <v-card-title class="justify-center headline white--text"><h1>Save the World</h1></v-card-title>
              
                <v-card-title class="pa-2 justify-center white--text"><h3>We have to be aware of the existance and the gravity of this pandemic</h3></v-card-title>
                <v-card-title class="pa-2 justify-center white--text"><h3>Now it's our duty to protect and save the world</h3></v-card-title>
                <v-btn class="pa-2 mt-4 white--text justify-center" x-large text @click="$vuetify.goTo('#help',options)">Next<i class="fa fa-angle-down ml-3"></i></v-btn>
             </v-card>
          <v-card
                class="mb-12 pb-12"
                align="center"
                elevation="0"
                style="background:#00484C" 
                tile >
              <v-avatar
                class="ma-15"
                size="480"
                tile>
                <v-img src="../img/World.gif" transition="scale-transition"></v-img>
              </v-avatar>
          </v-card>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-card>
    
    <v-card 
      id="help"
      style="background:#1d0da1" 
      elevation="0"
      tile>
      <div class=" d-flex flex-no-wrap justify-space-between">
        <v-row dense >
          <v-col cols="12">
            <v-row
              class="my-12 py-12"
              align="center"
              justify="center"
              style="height: 100%;">
          <v-card
                class="mb-12 pb-12"
                align="center"
                elevation="0"
                style="background:#1d0da1" 
                tile >
              <v-avatar
                class="ma-15"
                size="480"
                tile
                >
                <v-img src="../img/help.gif" transition="scale-transition"></v-img>
              </v-avatar>
          </v-card>
          <v-card
            class="mb-12 pb-12"
            align="center"
            elevation="0"
            style="background:#1d0da1" 
            tile >
        
            <v-btn class="pa-2 mt-4 white--text justify-center" x-large text @click="$vuetify.goTo('#save',options)">Back<i class="fa fa-angle-up ml-3"></i></v-btn>
            <v-card-title class="justify-center headline white--text"><h1>Help Doctors</h1></v-card-title>
          
            <v-card-title class="pa-2 justify-center white--text"><h3>Doctors didn't meet their famillies months ago trying to save lives</h3></v-card-title>
            <v-card-title class="pa-2 justify-center white--text"><h3>Let's not be selfish and help them by following simple advices</h3></v-card-title>
            <v-btn class="pa-2 mt-4 white--text justify-center" x-large text @click="$vuetify.goTo('#home',options)">Next<i class="fa fa-angle-down ml-3"></i></v-btn>
              
          </v-card>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-card>

    <v-card 
      id="home"
      style="background:#EF9A9A" 
      elevation="0"
      tile>
      <div class=" d-flex flex-no-wrap justify-space-between">
        <v-row dense >
          <v-col cols="12">
            <v-row
              class="my-12 py-12"
              align="center"
              justify="center"
              style="height: 100%;">
              <v-card
                class="mb-12 pb-12"
                align="center"
                elevation="0"
                style="background:#EF9A9A" 
                tile >
                <v-btn class="pa-2 mt-4 black--text justify-center" x-large text @click="$vuetify.goTo('#help',options)">Back<i class="fa fa-angle-up ml-3"></i></v-btn>
                <v-card-title class="justify-center headline black--text"><h1>Stay At Home</h1></v-card-title>
              
                <v-card-title class="pa-2 justify-center black--text"><h3>Since we are the propagation vector, keep your familly safe and away from that widespread virus</h3></v-card-title>
                <v-card-title class="pa-2 justify-center black--text"><h3>Stay at home, except in the case of extreme needs</h3></v-card-title>
                <v-btn class="pa-2 mt-4 black--text justify-center" x-large text @click="$vuetify.goTo('#sport',options)">Next<i class="fa fa-angle-down ml-3"></i></v-btn>
                
              </v-card>
              <v-card
                class="mb-12 pb-12"
                elevation="0"
                style="background:#EF9A9A" 
                tile>
                  <v-avatar
                    class="ma-15"
                    size="450"
                    tile>
                    <v-img src="../img/StayHome.gif" transition="scale-transition"></v-img>
                  </v-avatar>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-card>
    
    <v-card 
      id="sport"
      style="background:#1B5E20" 
      elevation="0"
      tile>
      <div class=" d-flex flex-no-wrap justify-space-between">

      <v-row dense >
            <v-col cols="12">
              <v-row
                class="my-12 py-12"
                align="center"
                justify="center"
                style="height: 100%;"
              >
            <v-card 
                class="mb-12 pb-12"
              elevation="0"
              style="background:#1B5E20"
              tile>
                <v-avatar
                  class="ma-15"
                  size="480"
                  tile
                  >
                  <v-img src="../img/sport.gif" transition="scale-transition"></v-img>
                </v-avatar>
            </v-card>
            <v-card
                class="mb-12 pb-12"
              align="center"
              elevation="0"
              style="background:#1B5E20" 
              tile
            >
              <v-btn class="pa-2 mt-4 white--text justify-center" x-large text @click="$vuetify.goTo('#home',options)">Back<i class="fa fa-angle-up ml-3"></i></v-btn>
              <v-card-title class="justify-center headline white--text"><h1>Practice Sport</h1></v-card-title>
            
              <v-card-title class="pa-2 justify-center white--text"><h3>Since we'll have a lot of time staying at home, practice sport</h3></v-card-title>
              <v-card-title class="pa-2 justify-center white--text"><h3>Practicing sport at least twice a week strengthens our immunity system</h3></v-card-title>
              <v-btn class="pa-2 mt-4 white--text justify-center" x-large text @click="$vuetify.goTo('#coach',options)">Next<i class="fa fa-angle-down ml-3"></i></v-btn>
                
            </v-card>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-card>

    <v-card 
      id="coach"
      style="background:#D4E157" 
      elevation="0"
      tile>
      <div class=" d-flex flex-no-wrap justify-space-between">
        <v-row dense >
          <v-col cols="12">
            <v-row
              class="my-12 py-12"
              align="center"
              justify="center"
              style="height: 100%;">
              <v-card
                class="mb-12 pb-12"
                align="center"
                elevation="0"
                style="background:#D4E157" 
                tile >
                <v-btn class="pa-2 mt-4 black--text justify-center" x-large text @click="$vuetify.goTo('#sport',options)">Back<i class="fa fa-angle-up ml-3"></i></v-btn>
                <v-card-title class="justify-center headline black--text"><h1>Need a Coach ?</h1></v-card-title>
              
                <v-card-title class="pa-2 justify-center black--text"><h3>The most of us don't know how or when to practice sport and need a coach</h3></v-card-title>
                <v-card-title class="pa-2 justify-center black--text"><h3>There are free online coachs, mobile applications and videos which are very helpful</h3></v-card-title>
                <v-btn class="pa-2 mt-4 black--text justify-center" x-large text @click="$vuetify.goTo('#shop',options)">Next<i class="fa fa-angle-down ml-3"></i></v-btn>
                
              </v-card>
              <v-card
                class="mb-12 pb-12"
                elevation="0"
                style="background:#D4E157" 
                tile>
                  <v-avatar
                    class="ma-15"
                    size="480"
                    tile>
                    <v-img src="../img/coach.gif" transition="scale-transition"></v-img>
                  </v-avatar>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-card>
    <v-card 
      id="shop"
      style="background:#90A4AE" 
      elevation="0"
      tile>
      <div class=" d-flex flex-no-wrap justify-space-between">

      <v-row dense >
            <v-col cols="12">
              <v-row
                class="my-12 py-12"
                align="center"
                justify="center"
                style="height: 100%;"
              >
            <v-card 
                class="mb-12 pb-12"
              elevation="0"
              style="background:#90A4AE"
              tile>
                <v-avatar
                  class="ma-15"
                  size="480"
                  tile
                  >
                  <v-img src="../img/OnlineShop.gif" transition="scale-transition"></v-img>
                </v-avatar>
            </v-card>
            <v-card
                class="mb-12 pb-12"
              align="center"
              elevation="0"
              style="background:#90A4AE" 
              tile
            >
              <v-btn class="pa-2 mt-4 black--text justify-center" x-large text @click="$vuetify.goTo('#coach',options)">Back<i class="fa fa-angle-up ml-3"></i></v-btn>
              <v-card-title class="justify-center headline black--text"><h1>Need To Buy Something ?</h1></v-card-title>
            
              <v-card-title class="pa-2 justify-center black--text"><h3>There are many ways to avoid going outside, try online shopping when possible</h3></v-card-title>
              <v-card-title class="pa-2 justify-center black--text"><h3>It minimizes time of being exposed to the virus</h3></v-card-title>
              <v-btn class="pa-2 mt-4 black--text justify-center" x-large text @click="$vuetify.goTo('#delivery',options)">Next<i class="fa fa-angle-down ml-3"></i></v-btn>
                
            </v-card>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-card>

    <v-card 
      id="delivery"
      style="background:#80CBC4" 
      elevation="0"
      tile>
      <div class=" d-flex flex-no-wrap justify-space-between">
        <v-row dense >
          <v-col cols="12">
            <v-row
              class="my-12 py-12"
              align="center"
              justify="center"
              style="height: 100%;">
              <v-card
                class="mb-12 pb-12"
                align="center"
                elevation="0"
                style="background:#80CBC4" 
                tile >
                <v-btn class="pa-2 mt-4 black--text justify-center" x-large text @click="$vuetify.goTo('#shop',options)">Back<i class="fa fa-angle-up ml-3"></i></v-btn>
                <v-card-title class="justify-center headline black--text"><h1>Use Delivery Services</h1></v-card-title>
              
                <v-card-title class="pa-2 justify-center black--text"><h3>Use delivery services when possible to avoid going outside</h3></v-card-title>
                <v-card-title class="pa-2 justify-center black--text"><h3>Most of online shops offer delivery service</h3></v-card-title>
                <v-btn class="pa-2 mt-4 black--text justify-center" x-large text @click="$vuetify.goTo('#cleanup',options)">Next<i class="fa fa-angle-down ml-3"></i></v-btn>
                
              </v-card>
              <v-card
                class="mb-12 pb-12"
                elevation="0"
                style="background:#80CBC4" 
                tile>
                  <v-avatar
                    class="ma-15"
                    size="480"
                    tile>
                    <v-img src="../img/Online Groceries.gif" transition="scale-transition"></v-img>
                  </v-avatar>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-card>
    
    <v-card 
      id="cleanup"
      style="background:#CE93D8" 
      elevation="0"
      tile>
      <div class=" d-flex flex-no-wrap justify-space-between">

      <v-row dense >
            <v-col cols="12">
              <v-row
                class="my-12 py-12"
                align="center"
                justify="center"
                style="height: 100%;"
              >
            <v-card 
                class="mb-12 pb-12"
              elevation="0"
              style="background:#CE93D8"
              tile>
                <v-avatar
                  class="ma-15"
                  size="480"
                  tile
                  >
                  <v-img src="../img/FightingCoronavirus.gif" transition="scale-transition"></v-img>
                </v-avatar>
            </v-card>
            <v-card
                class="mb-12 pb-12"
              align="center"
              elevation="0"
              style="background:#CE93D8" 
              tile
            >
              <v-btn class="pa-2 mt-4 black--text justify-center" x-large text @click="$vuetify.goTo('#delivery',options)">Back<i class="fa fa-angle-up ml-3"></i></v-btn>
              <v-card-title class="justify-center headline black--text"><h1>Clean up and Sterilize</h1></v-card-title>
            
              <v-card-title class="pa-2 justify-center black--text"><h3>When you buy something you have to clean it up and sterilize it with water and bleach</h3></v-card-title>
              <v-card-title class="pa-2 justify-center black--text"><h3>Put the vegetables and fruits you bought in water and add drops of bleach</h3></v-card-title>
              <v-card-title class="pa-2 justify-center black--text"><h3>Leave them for a moment and wash them again with water</h3></v-card-title>
              <v-btn class="pa-2 mt-4 black--text justify-center" x-large text @click="$vuetify.goTo('#miss',options)">Next<i class="fa fa-angle-down ml-3"></i></v-btn>
                
            </v-card>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-card>

    <v-card 
      id="miss"
      style="background:#29B6F6" 
      elevation="0"
      tile>
      <div class=" d-flex flex-no-wrap justify-space-between">
        <v-row dense >
          <v-col cols="12">
            <v-row
              class="my-12 py-12"
              align="center"
              justify="center"
              style="height: 100%;">
              <v-card
                class="mb-12 pb-12"
                align="center"
                elevation="0"
                style="background:#29B6F6" 
                tile >
                <v-btn class="pa-2 mt-4 black--text justify-center" x-large text @click="$vuetify.goTo('#cleanup',options)">Back<i class="fa fa-angle-up ml-3"></i></v-btn>
                <v-card-title class="justify-center headline black--text"><h1>Miss Your Friends ?</h1></v-card-title>
              
                <v-card-title class="pa-2 justify-center black--text"><h3>Internet and social media keeps people connected and makes them closer</h3></v-card-title>
                <v-card-title class="pa-2 justify-center black--text"><h3>There are many ways to make illimited free calls with your closest people</h3></v-card-title>
                <v-btn class="pa-2 mt-4 black--text justify-center" x-large text @click="$vuetify.goTo('#goOut',options)">Next<i class="fa fa-angle-down ml-3"></i></v-btn>
                
              </v-card>
              <v-card
                class="mb-12 pb-12"
                elevation="0"
                style="background:#29B6F6" 
                tile>
                  <v-avatar
                    class="ma-15"
                    size="480"
                    tile>
                    <v-img src="../img/Video Streaming.gif" transition="scale-transition"></v-img>
                  </v-avatar>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-card>
    
    <v-card 
      id="goOut"
      style="background:#BF360C" 
      elevation="0"
      tile>
      <div class=" d-flex flex-no-wrap justify-space-between">

      <v-row dense >
            <v-col cols="12">
              <v-row
                class="my-12 py-12"
                align="center"
                justify="center"
                style="height: 100%;"
              >
            <v-card 
                class="mb-12 pb-12"
              elevation="0"
              style="background:#BF360C"
              tile>
                <v-avatar
                  class="ma-15"
                  size="480"
                  tile
                  >
                  <v-img src="../img/mask.gif" transition="scale-transition"></v-img>
                </v-avatar>
            </v-card>
            <v-card
                class="mb-12 pb-12"
              align="center"
              elevation="0"
              style="background:#BF360C" 
              tile
            >
              <v-btn class="pa-2 mt-4 white--text justify-center" x-large text @click="$vuetify.goTo('#miss',options)">Back<i class="fa fa-angle-up ml-3"></i></v-btn>
              <v-card-title class="justify-center headline white--text"><h1>Extremely Need to Go Out ?</h1></v-card-title>
            
              <v-card-title class="pa-2 justify-center white--text"><h3>When you extremely need to go out and it's so urgent</h3></v-card-title>
              <v-card-title class="pa-2 justify-center white--text"><h3>Wear your mask, if you don't have one, it's available everywhere you just need to buy it</h3></v-card-title>
              <v-btn class="pa-2 mt-4 white--text justify-center" x-large text @click="$vuetify.goTo('#distance',options)">Next<i class="fa fa-angle-down ml-3"></i></v-btn>
                
            </v-card>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-card>


    <v-card 
      id="distance"
      style="background:#616161" 
      elevation="0"
      tile>
      <div class=" d-flex flex-no-wrap justify-space-between">
        <v-row dense >
          <v-col cols="12">
            <v-row
              class="my-12 py-12"
              align="center"
              justify="center"
              style="height: 100%;">
              <v-card
                class="mb-12 pb-12"
                align="center"
                elevation="0"
                style="background:#616161" 
                tile >
                <v-btn class="pa-2 mt-4 white--text justify-center" x-large text @click="$vuetify.goTo('#goOut',options)">Back<i class="fa fa-angle-up ml-3"></i></v-btn>
                <v-card-title class="justify-center headline white--text"><h1>Keep Your Distance</h1></v-card-title>
              
                <v-card-title class="pa-2 justify-center white--text"><h3>When you are outside, keep safety distance between you and the others, at least 2 meters</h3></v-card-title>
                <v-card-title class="pa-2 justify-center white--text"><h3>This is for avoiding contact with affected people</h3></v-card-title>
                <v-btn class="pa-2 mt-4 white--text justify-center" x-large text @click="$vuetify.goTo('#noshake',options)">Next<i class="fa fa-angle-down ml-3"></i></v-btn>
                
              </v-card>
              <v-card
                class="mb-12 pb-12"
                elevation="0"
                style="background:#616161" 
                tile>
                  <v-avatar
                    class="ma-15"
                    size="480"
                    tile>
                    <v-img src="../img/Social Distancing.gif" transition="scale-transition"></v-img>
                  </v-avatar>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-card>
    
    <v-card 
      id="noshake"
      style="background:#7E57C2" 
      elevation="0"
      tile>
      <div class=" d-flex flex-no-wrap justify-space-between">

      <v-row dense >
            <v-col cols="12">
              <v-row
                class="my-12 py-12"
                align="center"
                justify="center"
                style="height: 100%;"
              >
            <v-card 
                class="mb-12 pb-12"
              elevation="0"
              style="background:#7E57C2"
              tile>
                <v-avatar
                  class="ma-15"
                  size="480"
                  tile
                  >
                  <v-img src="../img/Virus transmission.gif" transition="scale-transition"></v-img>
                </v-avatar>
            </v-card>
            <v-card
                class="mb-12 pb-12"
              align="center"
              elevation="0"
              style="background:#7E57C2" 
              tile
            >
              <v-btn class="pa-2 mt-4 white--text justify-center" x-large text @click="$vuetify.goTo('#distance',options)">Back<i class="fa fa-angle-up ml-3"></i></v-btn>
              <v-card-title class="justify-center headline white--text"><h1>Don't Shake Hands</h1></v-card-title>
            
              <v-card-title class="pa-2 justify-center white--text"><h3>Shaking hands is how the virus transmits easily and quickly through people</h3></v-card-title>
              <v-card-title class="pa-2 justify-center white--text"><h3>Just keep your distance and say "Hi" </h3></v-card-title>
              <v-btn class="pa-2 mt-4 white--text justify-center" x-large text @click="$vuetify.goTo('#wash',options)">Next<i class="fa fa-angle-down ml-3"></i></v-btn>
                
            </v-card>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-card>

    <v-card 
      id="wash"
      style="background:#FFA726" 
      elevation="0"
      tile>
      <div class=" d-flex flex-no-wrap justify-space-between">
        <v-row dense >
          <v-col cols="12">
            <v-row
              class="my-12 py-12"
              align="center"
              justify="center"
              style="height: 100%;">
              <v-card
                class="mb-12 pb-12"
                align="center"
                elevation="0"
                style="background:#FFA726" 
                tile >
                <v-btn class="pa-2 mt-4 black--text justify-center" x-large text @click="$vuetify.goTo('#noshake',options)">Back<i class="fa fa-angle-up ml-3"></i></v-btn>
                <v-card-title class="justify-center headline black--text"><h1>Wash Your Hands</h1></v-card-title>
              
                <v-card-title class="pa-2 justify-center black--text"><h3>Go back home as soon as possible and wash your hands for about 5 minutes using liquid soaps</h3></v-card-title>
                <v-card-title class="pa-2 justify-center black--text"><h3>For a better prevention, take a good shower</h3></v-card-title>
                <v-btn class="pa-2 mt-4 black--text justify-center" x-large text @click="$vuetify.goTo('#doc',options)">Next<i class="fa fa-angle-down ml-3"></i></v-btn>
                
              </v-card>
              <v-card
                class="mb-12 pb-12"
                elevation="0"
                style="background:#FFA726" 
                tile>
                  <v-avatar
                    class="ma-15"
                    size="450"
                    tile>
                    <v-img src="../img/Handwashing.gif" transition="scale-transition"></v-img>
                  </v-avatar>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-card>
    
    <v-card 
      id="doc"
      style="background:#90CAF9" 
      elevation="0"
      tile>
      <div class=" d-flex flex-no-wrap justify-space-between">

      <v-row dense >
            <v-col cols="12">
              <v-row
                class="my-12 py-12"
                align="center"
                justify="center"
                style="height: 100%;"
              >
            <v-card 
                class="mb-12 pb-12"
              elevation="0"
              style="background:#90CAF9"
              tile>
                <v-avatar
                  class="ma-15"
                  size="480"
                  tile
                  >
                  <v-img src="../img/Online Doctor.gif" transition="scale-transition"></v-img>
                </v-avatar>
            </v-card>
            <v-card
                class="mb-12 pb-12"
              align="center"
              elevation="0"
              style="background:#90CAF9" 
              tile
            >
              <v-btn class="pa-2 mt-4 black--text justify-center" x-large text @click="$vuetify.goTo('#wash',options)">Back<i class="fa fa-angle-up ml-3"></i></v-btn>
              <v-card-title class="justify-center headline black--text"><h1>You Need a Doctor ?</h1></v-card-title>
            
              <v-card-title class="pa-2 justify-center black--text"><h3>Many doctors are available online and they help with medecins and advices</h3></v-card-title>
              <v-card-title class="pa-2 justify-center black--text"><h3>To avoid contacting with the virus, try emailing or calling them</h3></v-card-title>
              <v-btn class="pa-2 mt-4 black--text justify-center" x-large text @click="$vuetify.goTo('#family',options)">Next<i class="fa fa-angle-down ml-3"></i></v-btn>
                
            </v-card>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-card>

    <v-card 
      id="family"
      style="background:#880E4F" 
      elevation="0"
      tile>
      <div class=" d-flex flex-no-wrap justify-space-between">
        <v-row dense >
          <v-col cols="12">
            <v-row
              class="my-12 py-12"
              align="center"
              justify="center"
              style="height: 100%;">
              <v-card
                class="mb-12 pb-12"
                align="center"
                elevation="0"
                style="background:#880E4F" 
                tile >
                <v-btn class="pa-2 mt-4 white--text justify-center" x-large text @click="$vuetify.goTo('#doc',options)">Back<i class="fa fa-angle-up ml-3"></i></v-btn>
                <v-card-title class="justify-center headline white--text"><h1>Make Your Family Conscious</h1></v-card-title>
              
                <v-card-title class="pa-2 justify-center white--text"><h3>It is our duty to make these advices you read above known public</h3></v-card-title>
                <v-card-title class="pa-2 justify-center white--text"><h3>For the public awareness, you and your familly need to spread these advices</h3></v-card-title>
                <v-btn class="pa-2 mt-4 white--text justify-center" x-large text @click="$vuetify.goTo('#win',options)">Next<i class="fa fa-angle-down ml-3"></i></v-btn>
                
              </v-card>
              <v-card
                class="mb-12 pb-12"
                elevation="0"
                style="background:#880E4F" 
                tile>
                  <v-avatar
                    class="ma-15"
                    size="480"
                    tile>
                    <v-img src="../img/Fighting against Coronavirus.gif" transition="scale-transition"></v-img>
                  </v-avatar>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-card>
    
    <v-card 
      id="win"
      style="background:#8BC34A" 
      elevation="0"
      tile>
      <div class=" d-flex flex-no-wrap justify-space-between">

      <v-row dense >
            <v-col cols="12">
              <v-row
                class="my-9 py-12"
                align="center"
                justify="center"
                style="height: 100%;"
              >
              <v-card 
                  class="mb-5 pb-12"
                elevation="0"
                style="background:#8BC34A"
                tile>
                  <v-avatar
                    class="ma-15"
                    size="480"
                    tile
                    >
                    <v-img src="../img/Winning.gif" transition="scale-transition"></v-img>
                  </v-avatar>
              </v-card>
            <v-card
                class="mb-5 pb-12"
              align="center"
              elevation="0"
              style="background:#8BC34A" 
              tile>

              <v-btn class="pa-2 mt-4 black--text justify-center" x-large text @click="$vuetify.goTo('#family',options)">Back<i class="fa fa-angle-up ml-3"></i></v-btn>
              <v-card-title class="justify-center headline black--text"><h1>This Virus Will Be Defeated</h1></v-card-title>
            
              <v-card-title class="pa-2 justify-center black--text"><h3>We are going to come out of this battle more sophisticated and solidary</h3></v-card-title>
              <v-card-title class="pa-2 justify-center black--text"><h3></h3></v-card-title>
              <!-- <v-btn class="pa-2 mt-4 black--text justify-center" x-large text @click="$vuetify.goTo('#goOut',options)">Next<i class="fa fa-angle-down ml-3"></i></v-btn> -->
                
            </v-card>
              <v-col class="" cols="12" align="center" justify="start">
                <v-btn justify="center" class="scroll-to-top rounded headline hvr-grow" @click="$vuetify.goTo('#carousel',options)" text>
                  <i class="fa fa-arrow-circle-up"></i>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-container>
</template>
<style>
 .scroll-to-top {
   align-self: center;
  width: 50px;
  height: 50px;
  text-align: center;
  color: white;
  background:#8BC34A;
  line-height: 45px;
}

.scroll-to-top i {
  font-weight: 800;
}
.hvr-grow {
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
    transform: scale(1.5);
}
</style>