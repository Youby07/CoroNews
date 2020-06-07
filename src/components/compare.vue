<template>
    <v-container fluid>
        <v-row dense>
            <v-col cols="12">
                <v-row
                    align="center"
                    justify="center"
                    style="height: 100%;"
                    >
                     <v-col cols="6" xs="4"
                        class=" mx-auto">
                        <v-row
                            align="center"
                            justify="center">
                            <v-col >
                                <v-autocomplete
                                :items="countryList"
                                v-model="country1"
                                item-text="country"
                                color="light-blue"
                                item-color="light-blue"
                                label="Country 1"
                                @change="getData1"
                                persistent-hint
                                
                                outlined>
                                </v-autocomplete>
                            </v-col>
                            <v-col >
                                <v-autocomplete
                                :items="countryList"
                                v-model="country2"
                                item-text="country"
                                color="light-blue"
                                item-color="light-blue"
                                label="Country 2"
                                @change="getData1"
                                persistent-hint
                                
                                outlined>
                                </v-autocomplete>
                            </v-col>
                        </v-row>
                        <v-row
                            align="center"
                            justify="center">
                            <v-col >
                                <v-autocomplete
                                :items="countryList"
                                v-model="country3"
                                item-text="country"
                                color="light-blue"
                                item-color="light-blue"
                                label="Country 3"
                                @change="getData2"
                                persistent-hint
                                
                                outlined>
                                </v-autocomplete>
                            </v-col>
                            <v-col >
                                <v-autocomplete
                                :items="countryList"
                                v-model="country4"
                                item-text="country"
                                color="light-blue"
                                item-color="light-blue"
                                label="Country 4"
                                @change="getData2"
                                persistent-hint
                                
                                outlined>
                                </v-autocomplete>
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-hover>
                        <template v-slot="{hover}">
                            <v-card 
                                class=" mx-auto"
                                :elevation="hover ? 24 : 10">
                                <v-chart 
                                    id="bar"
                                    class="barChart"
                                    :options="bar"
                                    autoresize
                                />
                            </v-card>
                        </template>
                    </v-hover>
                    <!-- <v-card 
                        class="mr-0 pa-1 ma-5"
                            height="220"
                            width="260"
                        xs="4">
                        hii
                    </v-card> -->
                </v-row>
            </v-col>
        </v-row>
        
        <v-row
        class="my-12"
        align="center"
        justify="center">
        <h3 class="orange--text darken-1--text">Tip<i class="fas fa-exclamation-circle ml-2"></i> :You can download the pie chart as an image and change the type of the chart</h3>
        </v-row>
    </v-container>
</template>
<script>
import 'echarts/lib/chart/bar'
export default {
    
    data:()=> ({
        countryList:[],
        country1:'',
        country2:'',
        country3:'',
        country4:'',

        labelOption : {
        },

        bar : {
            color: ['#006064','#0097A7','#26C6DA' ,'#80DEEA'],
            tooltip: {
                trigger: 'item',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['', '','', '']
            },
            toolbox: {
                show: true,
                orient: 'horizontal',
                left: 'right',
                top: 'top',
                feature: {
                    mark: {show: true},
                    magicType: {   
                        title:{
                            line:'Line', 
                            bar:'Bar', 
                            stack:'Stack', 
                            tiled:'Tiled'
                            },
                            show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    saveAsImage: {title:'Save image', show: true}
                }
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap:true,
                    axisTick: {
                        show: true,
                        alignWithLabel:true,
                        length:4,
                    },
                    axisLabel:{
                        show:true,
                        interval:0
                    },
                    data: [  'Cases',  'Deaths',  'Recovered']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 2,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    name: '',
                    type: 'bar',
                    barGap: 0,
                    label: '',
                    data: [0, 0, 0 ]
                },
                {
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 2,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    name: '',
                    type: 'bar',
                    label: '',
                    data: [0, 0, 0 ]
                },
                {
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 2,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    name: '',
                    type: 'bar',
                    label: '',
                    data: [0, 0, 0 ]
                },
                {
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 2,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    name: '',
                    type: 'bar',
                    label: '',
                    data: [0, 0, 0 ]
                },
                
            ]
        },
    }),
    methods:{
      getCountry()
      {
        fetch("https://covid-193.p.rapidapi.com/countries", {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "e656a69fcemshabe4796158302f9p1c2d31jsn9277b886c097"
          }
        })
        .then(response => response.json()).then(
            data =>
            {
                this.countryList= data.response;
            }
        );
      },
      getData1()
      {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://corona.lmao.ninja/v2/countries/"+this.country1+","+this.country2+"?yesterday", requestOptions)
                .then(response => response.json())
                .then(result =>{ 
                    if (this.country2 == '') {
                        this.bar.legend.data[0]=result.country;
                        this.bar.series[0].name=result.country;
                        this.bar.series[0].label=result.country;

                        this.bar.series[0].data[0]=result.cases;
                        this.bar.series[0].data[1]=result.deaths;
                        this.bar.series[0].data[2]=result.recovered;
                    }else{
                        for (let i = 0; i <= 1; i++) {
                            
                        this.bar.legend.data[i]=result[i].country;
                        this.bar.series[i].name=result[i].country;
                        this.bar.series[i].label=result[i].country;

                        this.bar.series[i].data[0]=result[i].cases;
                        this.bar.series[i].data[1]=result[i].deaths;
                        this.bar.series[i].data[2]=result[i].recovered;
                        }
                    }
                })
                .catch(error => console.log('error', error));
        },
        getData2()
        {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("https://corona.lmao.ninja/v2/countries/"+this.country3+","+this.country4+"?yesterday", requestOptions)
            .then(response => response.json())
            .then(result =>{ 
                if (this.country4 == '') {
                    this.bar.legend.data[2]=result.country;
                    this.bar.series[2].name=result.country;
                    this.bar.series[2].label=result.country;

                    this.bar.series[2].data[0]=result.cases;
                    this.bar.series[2].data[1]=result.deaths;
                    this.bar.series[2].data[2]=result.recovered;
                }else{
                    for (let i = 2; i <= 3; i++) {
                        
                    this.bar.legend.data[i]=result[i-2].country;
                    this.bar.series[i].name=result[i-2].country;
                    this.bar.series[i].label=result[i-2].country;

                    this.bar.series[i].data[0]=result[i-2].cases;
                    this.bar.series[i].data[1]=result[i-2].deaths;
                    this.bar.series[i].data[2]=result[i-2].recovered;
                    }
                }
            })
            .catch(error => console.log('error', error));
        },
        chartResize()
        {
            var chart1  = this.echarts.init(document.querySelector('#bar'), null);	

            window.addEventListener('resize',function(){
                chart1.resize();
            })
        }
    },
    beforeMount() {
      this.getCountry();
      this.chartResize();
    },
}
</script>
<style>
    .barChart
    {
        height:350px;
        width:500px;
    }
</style>