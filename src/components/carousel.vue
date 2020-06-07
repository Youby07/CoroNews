<template>
    <v-container fluid>
        <v-row class="mt-5">
            <v-col cols="2">

            </v-col>
            <v-col cols="8">
                <v-carousel
                id="carousel"
                    height="100%">
                    <v-carousel-item
                        src="../img/welcome.jpg"
                    >
                        <v-container
                            fill-height
                            pa-5 ml-12 pb-3 
                            >
                            <v-layout fill-height align-center pb-4 mb-4>
                                    <v-flex xs12>
                                        <v-row class="mt-12">
                                            <v-row class="mt-12">
                                                <v-col cols="10" class="ml-12 pl-5">
                                                    <h1 class="black--text" > Welcome to CoroNews</h1>
                                                </v-col>
                                                <v-col cols="12" class="ml-5">
                                                    <h2 class="black--text">This web page provides Covid-19 news</h2>
                                                </v-col>
                                                <v-col cols="5" class="ml-5" align="start">
                                                    <h3 class="black--text"> In the form of different graphs</h3>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col cols="12" class="ml-5" align="start">
                                                    <h2 class="black--text">In addition of a full section</h2>
                                                </v-col>
                                                <v-col cols="4" class="ml-5" align="center">
                                                    <h3 class="black--text">Of general advices</h3>
                                                </v-col>
                                            </v-row>
                                        </v-row>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                    </v-carousel-item>
                    <v-carousel-item
                        src="../img/global.jpg"
                    >
                        <v-container
                            fill-height
                            pa-5 ml-12 pb-3 
                            >
                            <v-layout fill-height align-center pb-4 mb-4>
                                    <v-flex xs12>
                                        <v-row class="mt-12">
                                            <v-row class="mt-12">
                                                <v-col cols="6" class="ml-12 pl-5" align="center">
                                                    <h1 class=" black--text">Global Statistics</h1>
                                                </v-col>
                                                <v-col cols="12" class="ml-12 pl-5">
                                                    <h2 class=" black--text">Global world statistics and top 10 countries in a pie chart</h2>
                                                </v-col>
                                                <v-col cols="12" class="ml-12 pl-5">
                                                    <h3 class=" black--text">Updated numbers and pie chart</h3>
                                                </v-col>
                                                <v-col cols="5" class="ml-5" align="center">
                                                    <h3 class=" black--text">Ordered by total cases</h3>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col cols="7" class="ml-5" align="center">
                                                    <v-btn class="pa-2 mt-4 black--text justify-center headline" x-large text @click="$vuetify.goTo('#global',options)">Explore<i class="fa fa-angle-down ml-3"></i></v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-row>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                    </v-carousel-item>
                    <v-carousel-item
                        src="../img/country.jpg"
                    >
                        <v-container
                            fill-height
                            pa-5 ml-12 pb-3 
                            >
                            <v-layout fill-height align-center pb-4 mb-4>
                                    <v-flex xs12>
                                       <v-row class="mt-12">
                                            <v-row class="mt-12">
                                                <v-col cols="6" class="ml-12 pl-5" align="center">
                                                    <h1 class=" black--text">Country Statistics</h1>
                                                </v-col>
                                                <v-col cols="12" class="ml-12 pl-5">
                                                    <h2 class=" black--text">A dashboard for every country selected</h2>
                                                </v-col>
                                                <v-col cols="6" class="ml-12 pl-5" align="center">
                                                    <h3 class=" black--text">Numbers provided are updated</h3>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col cols="7" class="ml-5" align="center">
                                                    <v-btn class="pa-2 mt-4 black--text justify-center headline" x-large text @click="$vuetify.goTo('#country',options)">Explore<i class="fa fa-angle-down ml-3"></i></v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-row>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                    </v-carousel-item>
                    <v-carousel-item
                        src="../img/historical.jpg"
                    >
                        <v-container
                            fill-height
                            pa-5 ml-12 pb-3 
                            >
                            <v-layout fill-height align-center pb-4 mb-4>
                                    <v-flex xs12>
                                       <v-row class="mt-12">
                                            <v-row class="mt-12">
                                                <v-col cols="6" class="ml-12 pl-5" align="center">
                                                    <h1 class=" black--text">Historical Statistics</h1>
                                                </v-col>
                                                <v-col cols="12" class="ml-6 pl-5">
                                                    <h2 class=" black--text">Historical Statistics for every country selected</h2>
                                                </v-col>
                                                <v-col cols="6" class="ml-12 pl-5" align="center">
                                                    <h3 class=" black--text">Presented in two area charts of Total cases and Total deaths</h3>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col cols="7" class="ml-5" align="center">
                                                    <v-btn class="pa-2 mt-4 black--text justify-center headline" x-large text @click="$vuetify.goTo('#history',options)">Explore<i class="fa fa-angle-down ml-3"></i></v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-row>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                    </v-carousel-item>
                    <v-carousel-item
                        src="../img/compare.jpg"
                    >
                        <v-container
                            fill-height
                            pa-5 ml-12 pb-3 
                            >
                            <v-layout fill-height align-center pb-4 mb-4>
                                    <v-flex xs12>
                                       <v-row class="mt-12">
                                            <v-row class="mt-12">
                                                <v-col cols="6" class="ml-12 pl-5" align="center">
                                                    <h1 class=" black--text">Compare Countries</h1>
                                                </v-col>
                                                <v-col cols="12" class="ml-10 pl-5">
                                                    <h2 class=" black--text">Select 4 countries and compare them</h2>
                                                </v-col>
                                                <v-col cols="6" class="ml-12 pl-5" align="center">
                                                    <h3 class=" black--text">Numbers presented in a bar chart</h3>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col cols="7" class="ml-5" align="center">
                                                    <v-btn class="pa-2 mt-4 black--text justify-center headline" x-large text @click="$vuetify.goTo('#compare',options)">Explore<i class="fa fa-angle-down ml-3"></i></v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-row>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                    </v-carousel-item>
                    <v-carousel-item
                        src="../img/save.jpg">
                        <v-container
                            fill-height
                            pa-5 ml-12 pb-3 
                            >
                            <v-layout fill-height align-center pb-4 mb-4>
                                    <v-flex xs12>
                                       <v-row class="mt-12">
                                            <v-row class="mt-12">
                                                <v-col cols="5" class="ml-12 pl-5" align="center">
                                                    <h1 class=" black--text">Save The World</h1>
                                                </v-col>
                                                <v-col cols="12" class="ml-10 pl-5">
                                                    <h2 class=" black--text">General and trusted advices</h2>
                                                </v-col>
                                                <v-col cols="6" class="ml-8 pl-5" align="center">
                                                    <h3 class=" black--text">Follow them to save our world</h3>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col cols="7" class="ml-5" align="center">
                                                    <v-btn class="pa-2 mt-4 black--text justify-center headline" x-large text @click="$vuetify.goTo('#fight',options)">Explore<i class="fa fa-angle-down ml-3"></i></v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-row>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
            <v-col cols="2">

            </v-col>
        </v-row>
    </v-container>
</template>

