<template>
  <v-container fluid>
    <v-row 
      id="country"
          class="mt-2"
          align="center"
          justify="center">
      <h1><i class="fas fa-map-marker-alt mr-2"></i> Country Statistics</h1>
    </v-row>
    <v-row 
          class="mt-2"
          align="center"
          justify="center">
      <h2>Select your country or search for it:</h2>
    </v-row>
    <v-row 
            align="center"
            justify="center">
      <v-col class="d-flex" 
            cols="12" sm="6">
        <v-autocomplete
          class="mt-5"
          :items="countryList"
          v-model="country"
          item-text="country"
          label="Select Country"
          color="light-blue"
          item-color="light-blue"
          @change="getData"
          persistent-hint
          
          outlined
        ></v-autocomplete>
      </v-col>
    </v-row>
    <v-row 
          class="red--text accent-4--text"
          align="center"
          justify="center">
      <h4>Updated at: {{update}}</h4>
    </v-row>

    <v-row dense >
      <v-col cols="12">
        <v-row
          align="center"
          justify="center"
          style="height: 100%;"
        >
         <!-- <v-card 
          class="mr-0 pa-1"
                height="220"
                width="260"
          xs="4">
            hii
        </v-card> -->
        <v-hover>
          <template v-slot="{hover}">
            <v-card
            class="ma-2 pa-9 "
            style="background: linear-gradient(to right, #757575,#616161, #424242);" 
            :elevation="hover ? 24 : 10"
              height="220"
              width="270"
            outlined
            dark
            
            >
              <v-card-title
                  class="justify-center headline"
                >
                <i class="fas fa-radiation mr-3"></i> Total Cases
                </v-card-title>
              <v-card-title
                  class="justify-center headline"
                ><number
                  ref="number1"
                  :to="cases"
                  :format="theFormat"
                  :duration="1"
                  :delay="1"
                  easing="Power100.easeOut"/></v-card-title>
                  <v-list-item-title
                  align="center"
                  justify="center"
                    class="justify-center green--text text--accent-4"
                  ><i class="fas fa-vial mr-3"></i>Test pulled: <number
                  ref="number1"
                  :to="tests"
                  :format="theFormat"
                  :duration="1"
                  :delay="1"
                  easing="Power100.easeOut"/>
                  </v-list-item-title>
                
            </v-card>
          </template>
        </v-hover>
        <v-hover>
          <template v-slot="{hover}">
            <v-card
            class="ma-2 pa-9"
              style="background: linear-gradient(to right, #FFB300, #FFA000, #FF8F00);" 
            :elevation="hover ? 24 : 10"
              height="220"
              width="270"
            outlined
            
          >
            <v-card-title
                class="justify-center headline"
              >
              <i class="fas fa-lungs-virus mr-3"></i>New Cases</v-card-title>
            <v-card-title
                class="justify-center headline"
              ><number
                  ref="number1"
                  :to="newc"
                  :format="theFormat"
                  :duration="1"
                  :delay="1"
                  easing="Power100.easeOut"/></v-card-title>
          </v-card>
        </template>
        </v-hover>
        <v-hover>
          <template v-slot="{hover}">
            <v-card
              class="ma-2 pa-9"
              style="background: linear-gradient(to right, #E53935, #D32F2F, #B71C1C);"
              :elevation="hover ? 24 : 5"
              height="220"
              width="260"
              outlined
              dark
            >
              <v-card-title
                  class="justify-center headline"
                >
                <i class="fas fa-skull-crossbones mr-3"></i>Deaths</v-card-title>
              <v-list-item-title
                  align="center"
                  justify="center"
                    class="justify-center headline"
                >Total: <number
                  ref="number1"
                  :to="death"
                  :format="theFormat"
                  :duration="1"
                  :delay="1"
                  easing="Power100.easeOut"/></v-list-item-title>
              <v-list-item-title
                  align="center"
                  justify="center"
                  class="justify-center green--text text--accent-4 headline"
                >New: <number
                  ref="number1"
                  :to="newDeath"
                  :format="theFormat"
                  :duration="1"
                  :delay="1"
                  easing="Power100.easeOut"/></v-list-item-title>
            </v-card>
          </template>
        </v-hover>
          <v-hover>
          <template v-slot="{hover}">
            <v-card
              class="ma-2 pa-9"
              style="background: linear-gradient(to right, #26A69A, #00897B, #00695C);"
              :elevation="hover ? 24 : 10"
              height="220"
              width="260"
              outlined
              dark
            >
              <v-card-title
                  class="justify-center headline"
                >
                <i class="fas fa-hand-holding-medical mr-3"></i>Recovered</v-card-title>
              <v-card-title
                  class="justify-center headline"
                >
                <number
                  ref="number1"
                  :to="recovered"
                  :format="theFormat"
                  :duration="1"
                  :delay="1"
                  easing="Power100.easeOut"/>
              </v-card-title>
            </v-card>
          </template>
        </v-hover>
        <!-- <v-card 
          class="mr-0 pa-1"
              height="220"
              width="260"
          xs="4">
            HII
        </v-card> -->
        </v-row>
      </v-col>
  </v-row>

   <v-row>
    <v-col 
          class="my-2"
          cols="12"
          align="center"
          justify="center">
      <h2>Click the button below to visualise historical statistics for the country selected</h2>
    </v-col>
    <v-col 
      class="mb-9 mt-2 headline"
      cols="12"
      align="center"
      justify="center">
      <v-hover>
        <template v-slot="{hover}">
          <v-btn
          outlined
          tile
          @click="$vuetify.goTo('#history',options)"
          :elevation="hover ? 24 : 10"
          > <i class="fas fa-chart-area mr-1"></i>Historical Statistics</v-btn>
        </template>
      </v-hover>
    </v-col>
  </v-row>
  
<v-divider class="mt-9"></v-divider>

  <v-row
    id="history"
    class="mt-9"
    align="center"
    justify="center">
    <h1><i class="fas fa-chart-area mr-2"></i>Historical Statistics</h1>
  </v-row>
  <v-row
    align="center"
    justify="center">
    <v-col cols="12"
    align="center"
    justify="center">
      <h2 class="justify-end">You can choose how many days the history shows back here</h2>
    </v-col>
    <v-col cols="12" sm="1"
        align="center" class="d-flex" >
      <v-select
        v-model="days"
        :items="items"
        item-text="items"
        color="light-blue"
        item-color="light-blue"
        label="Days"
        @change="getHistory"
        persistent-hint
        
        outlined>
      </v-select>
    </v-col>
  </v-row>

  <v-row >
      <v-col cols="12">
        <v-row
          align="start"
          justify="center"
          >
          
         <!-- <v-card 
            class="mr-0 pa-1 ma-5"
            height="220"
            width="260"
            xs="4">
          </v-card> -->
          <v-hover>
            <template v-slot="{hover}">
              <v-card
                class="mx-auto ma-5"
                :elevation="hover ? 24 : 10"
              >
                <figure
                    align="center"
                    justify="center">
                    <v-chart 
                       id="area1"
                    class="AreaChart"
                        :options="area1"
                        autoresize
                    />
                </figure>
              </v-card>
            </template>
          </v-hover>
          <v-hover>
            <template v-slot="{hover}">
              <v-card
                class="mx-auto ma-5" 
                :elevation="hover ? 24 : 10"
                >
                <figure
                  align="center"
                  justify="center">
                  <v-chart 
                    id="area2"
                    class="AreaChart"
                    :options="area2"
                    autoresize
                  />
                </figure>
              </v-card>
            </template>
          </v-hover>
          <!-- <v-card 
            class="mr-0  ma-5 pa-1"
            height="220"
            width="260"
            xs="4">
          </v-card> -->
        </v-row>
          <v-row
            align="center"
            justify="center">
            <h3 class="orange--text darken-1--text">Tip<i class="fas fa-exclamation-circle ml-2"></i> :You can zoom in and out inside the chart's cards</h3>
          </v-row>
      </v-col>
    </v-row> <!---->

    <v-divider class="mt-9"></v-divider>
  </v-container>
</template>

<script>
  import ECharts from 'vue-echarts'
  import 'echarts/lib/chart/line'
  // import 'echarts/lib/component/polar'
  // import 'echarts/lib/chart/pie'
  export default {
    
    name: 'countryNews',
    components: {
      'v-chart': ECharts,
    },

    data: () => ({
      //
      defaultSelected:'World Wide',
      country:'',
      list:[''],
      countryList:[],
      cases:'',
      tests:'',
      death:'',
      newDeath:'',
      recovered:'',
      update:'',
      items:[15,30,60,90,120],
      days:'30',

      area1 : {
        date: [],
        dataa :[0],
        title: {
            left: 'center',
            text: 'Total Cases',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
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
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['']
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 10
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 2,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: 
        [{
            name: 'Total Cases',
            type: 'line',
            smooth: true,
            // symbol: 'none',
            // sampling: 'average',
            itemStyle: {
              color: '#E65100'
            },
            areaStyle: {
              color: new ECharts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#FF6F00'
              }, {
                offset: 1,
                color: '#FFCA28'
              }])
            },
            data:[0],
          }]
      },
      area2 : {
        date: [],
        dataa :[0],
        title: {
            left: 'center',
            text: 'Total Deaths',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
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
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['']
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 10
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 2,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: 
        [{
            name: 'Total Deaths',
            type: 'line',
            smooth: true,
            // symbol: 'none',
            // sampling: 'average',
            itemStyle: {
              color: '#B71C1C'
            },
            areaStyle: {
              color: new ECharts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#C62828'
              }, {
                offset: 1,
                color: '#EF9A9A'
              }])
            },
            data:[0],
          }]
      }
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
        }).then(response => response.json()).then(
          data =>
          {
            this.countryList= data.response;
          });
      },
      getData()
      {
        fetch("https://covid-193.p.rapidapi.com/statistics?country="+this.country, {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "e656a69fcemshabe4796158302f9p1c2d31jsn9277b886c097"
          }
        }).then(response => response.json()).then(
          data =>
          {
            data= data.response[0];
            this.cases = data.cases.total;
            this.tests = data.tests.total;
            this.newc = data.cases.new;
            if (data.cases.new == null) {
              this.newc = 0;
            }
            this.death = data.deaths.total;
            this.newDeath = data.deaths.new;
            this.recovered = data.cases.recovered;
            this.update = data.day;
            this.getHistory();
          });
      },
      getHistory()
        {
          var called=0;
          var day=''
          var requestOptions = {
              method: 'GET',
              redirect: 'follow'
          };
          day=this.days.toString();
          fetch("https://corona.lmao.ninja/v2/historical/"+this.country+"?lastdays="+day+"", requestOptions)
          .then(response => response.json())
          .then(result => 
          {
              called++;
              if (called != 0) {
                this.area1.date=[''];
                this.area1.dataa=[''];
                this.area2.date=[''];
                this.area2.dataa=[''];
              }
              for ( var prop in result.timeline.cases) {
                this.area1.date.push(prop);
                this.area1.dataa.push(result.timeline.cases[prop]);
              }
              this.area1.series[0].data=this.area1.dataa;
              this.area1.xAxis.data=this.area1.date;

              for (prop in result.timeline.deaths) {
                this.area2.date.push(prop);
                this.area2.dataa.push(result.timeline.deaths[prop]);
              }
              this.area2.series[0].data=this.area2.dataa;
              this.area2.xAxis.data=this.area2.date;
          })
          .catch(error => console.log('error', error));
        },
        chartResize()
        {
            var chart1  = this.echarts.init(document.querySelector('#area1'), null);	

            window.addEventListener('resize',function(){
                chart1.resize();
            })
            var chart2  = this.echarts.init(document.querySelector('#area2'), null);	

            window.addEventListener('resize',function(){
                chart2.resize();
            })
        }
    },
    beforeMount() {
      this.getCountry();
      this.chartResize();
    },
  };
</script>
<style>
    .AreaChart
    {
        height:350px;
        width:450px;
    }
    
</style>