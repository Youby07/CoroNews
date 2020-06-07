<template>
    <v-container fluid>
         <v-row
            dense
            align="center"
            justify="center"
            style="height: 100%;">
            <v-col cols="12" class="d-flex">
                <v-row
                    align="center"
                    justify="center">
                    <!-- <v-card 
                        class="mr-0 pa-1 ma-5"
                            height="220"
                            width="260"
                        xs="4">
                        hii
                    </v-card> -->
                    <v-hover>
                        <template v-slot="{hover}">
                            <v-card
                                class="ml-auto py-1 ma-5" 
                                :elevation="hover ? 24 : 10">
                                <v-row 
                                align="center"
                                justify="center">
                                <v-col sm="11">
                                <v-card
                                    class="pa-1"
                                    style="background: linear-gradient(to top, #FFB300, #FFA000, #FF8F00);"
                                    tile>
                                    <v-card-title
                                        class="justify-center black--text headline">
                                        Countries Affected: 
                                        <number
                                            ref="number1"
                                            :from="0"
                                            :to="totalAffected"
                                            :format="theFormat"
                                            :duration="1"
                                            :delay="1"
                                            easing="Power100.easeOut"/>
                                    </v-card-title>
                                </v-card>
                                <v-row >
                                    <v-col
                                        cols="8"
                                        sm="6"
                                        >
                                        <v-card
                                            class="pa-3"
                                            style="background: linear-gradient(to bottom, #FFB300, #FFF176, #DCE775);"
                                            tile
                                        >
                                            <v-card-title
                                            class="justify-start black--text headline"
                                            > Total Cases: 
                                                <number
                                                    ref="number1"
                                                    :from="0"
                                                    :to="totalCases"
                                                    :format="theFormat"
                                                    :duration="1"
                                                    :delay="1"
                                                    easing="Power100.easeOut"/>
                                            </v-card-title>
                                        </v-card>
                                    </v-col>
                                    <v-col
                                    cols="4"
                                    sm="6"
                                    >
                                        <v-card
                                            class="pa-3"
                                            style="background: linear-gradient(to bottom, #FFB300, #FFF176, #DCE775);"
                                            tile
                                        >
                                            <v-card-title
                                            class="justify-start headline black--text"
                                            > New Cases:
                                                <number
                                                    ref="number1"
                                                    :from="0"
                                                    :to="newCases"
                                                    :format="theFormat"
                                                    :duration="1"
                                                    :delay="1"
                                                    easing="Power100.easeOut"/>
                                            </v-card-title>
                                        </v-card>
                                    </v-col>
                                </v-row>
                                <v-row >
                                    <v-col
                                    cols="8"
                                    sm="6"
                                    >
                                        <v-card
                                            class="pa-3"
                                            style="background: linear-gradient(to bottom, #DCE775, #81C784, #26A69A);"
                                            tile
                                        >
                                            <v-card-title
                                            class="justify-start red--text text--darken-4 headline"
                                            > Total Deaths:
                                                <number
                                                    ref="number1"
                                                    :from="0"
                                                    :to="totalDeaths"
                                                    :format="theFormat"
                                                    :duration="1"
                                                    :delay="1"
                                                    easing="Power100.easeOut"/>
                                            </v-card-title>
                                        </v-card>
                                    </v-col>
                                    <v-col
                                    cols="4"
                                    sm="6"
                                    >
                                        <v-card
                                            class="pa-3"
                                            style="background: linear-gradient(to bottom, #DCE775, #81C784, #26A69A);"
                                        tile
                                        >
                                            <v-card-title
                                            class="justify-start black--text headline"
                                            > New Deaths:
                                            <number
                                                ref="number1"
                                                :from="0"
                                                :to="newDeaths"
                                                :format="theFormat"
                                                :duration="1"
                                                :delay="1"
                                                easing="Power100.easeOut"/>
                                            
                                            </v-card-title>
                                        </v-card>
                                    </v-col>
                                </v-row>
                                <v-card
                                    class="pa-3"
                                    style="background: linear-gradient(to bottom, #26A69A, #00897B, #00695C);"
                                    tile
                                >
                                        <v-card-title
                                            class="justify-center black--text headline"
                                            > Recovered: 
                                            <number
                                                ref="number1"
                                                :from="0"
                                                :to="recovered"
                                                :format="theFormat"
                                                :duration="1"
                                                :delay="1"
                                                easing="Power100.easeOut"/>
                                        </v-card-title>
                                    </v-card>
                                </v-col>
                            </v-row>
                            </v-card>
                        </template>
                    </v-hover>

                    <v-hover>
                        <template v-slot="{hover}">
                            <v-card 
                                class="mr-auto ml-5 pa-1 ma-5"
                                xs="4"
                                :elevation="hover ? 24 : 10">
                                <v-chart 
                                    id="PieChart"
                                    class="PieChart"
                                    :options="pie"
                                    autoresize/>
                            </v-card>
                        </template>
                    </v-hover>
                    <!-- <v-card 
                        class="mr-0 pa-1 ma-5"
                        height="220"
                        width="260"
                        xs="4">
                        
                    </v-card> -->
              </v-row>
          </v-col>
          <v-row
            align="center"
            justify="center">
            <h3 class="orange--text darken-1--text mt-5">Tip<i class="fas fa-exclamation-circle ml-2"></i> :You can download the pie chart as an image</h3>
          </v-row>
        </v-row>  
        <v-divider class="mt-9"></v-divider>
    </v-container>
</template>
<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'
import 'echarts/lib/chart/pie'




export default {
    name: 'countryNews',
    components: {
        'v-chart': ECharts
    },
    
    data: () => ({
        
        
            pie:{
                color: ['#0D47A1', '#1E88E5', '#42A5F5', '#90CAF9','#004D40','#00796B','#26A69A', '#80CBC4', '#FFB74D', '#FB8C00', '#E65100'],
                title: {
                    text: 'Top 10 Countries',
                    subtext: 'Total Cases',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                toolbox: {
                    show: true,
                    orient: 'horizontal',
                    left: 'right',
                    top: 'top',
                    feature: {
                        saveAsImage: {title:'Save image', show: true}
                    }
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['', '', '', '', '','', '', '', '', '','Rest of the world']
                },
                series: 
                [{
                    name: 'Country',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: '335', name: ''},
                        {value: '310', name: ''},
                        {value: '234', name: ''},
                        {value: '135', name: ''},
                        {value: '135', name: ''},
                        {value: '135', name: ''},
                        {value: '135', name: ''},
                        {value: '135', name: ''},
                        {value: '135', name: ''},
                        {value: '135', name: ''},
                        {value: '154', name: 'Rest of the world'}
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 2,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            },
            totalAffected:'',
            totalCases:'',
            totalDeaths:'',
            newCases:'',
            newDeaths:'',
            recovered:'',
            sum:'0'
        
    }),
    methods: {
        getGlobal()
        {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow',
            };

            fetch("https://corona.lmao.ninja/v2/all?yesterday", requestOptions)
            .then(response => response.json())
            .then(result => 
            {
                this.totalCases=result.cases;
                this.totalDeaths=result.deaths;
                this.totalAffected=result.affectedCountries;
                this.newCases=result.todayCases;
                this.newDeaths=result.todayDeaths;
                this.recovered=result.recovered;
            }
            ).catch(error => console.log('error', error));
            
        },
        getTopCountries()
        {
            fetch("https://covid-19-tracking.p.rapidapi.com/v1", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
                    "x-rapidapi-key": "e656a69fcemshabe4796158302f9p1c2d31jsn9277b886c097"
                }
            })
            .then(response => response.json()).then(
               data =>
               {
                   for (let i = 0; i < 10; i++) {
                       this.pie.legend.data[i] = data[i+1].Country_text;
                       this.pie.series[0].data[i].name = data[i+1].Country_text;
                    //    this.pie.series[0].data[i].value = data[i+1].Total_Cases_text;
                        // console.log(data[i+1]);
                   }
                   this.getTopValues()
               })
            .catch(err => {
                console.log(err);
            });
        },
        getTopValues()
        {
            for (let i = 0; i < 10; i++) 
            {
                fetch("https://covid-193.p.rapidapi.com/statistics?country="+this.pie.legend.data[i], {
                        "method": "GET",
                        "headers": {
                        "x-rapidapi-host": "covid-193.p.rapidapi.com",
                        "x-rapidapi-key": "e656a69fcemshabe4796158302f9p1c2d31jsn9277b886c097"
                    }
                })
                .then(response => response.json())
                .then(data =>
                {
                    data= data.response[0];
                    this.pie.series[0].data[i].value=data.cases.total;
                    this.sum=this.sum+this.pie.series[0].data[i].value;
                        // console.log(this.pie.series[0].data[i].value);

                });
            }
            this.pie.series[0].data[10].value=this.totalCases-this.sum;
        },
        // chartResize()
        // {
        //     var chart1  = this.echarts.init(document.querySelector('#PieChart'), null);	

        //     window.addEventListener('resize',function(){
        //         chart1.resize();
        //     })
        // }
    },
    beforeMount()
    {
        this.getGlobal();
        this.getTopCountries();
        // this.chartResize();
    }
    
}


</script>

<style>
    .PieChart
    {
        height:350px;
        width:450px;
    }
</style>