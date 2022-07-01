<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Manager</h1>
            <h4 style="font-weight: bolder;color:white;
        text-shadow: 5px 5px 5px black;">
              Bienvenue sur votre espace Manager
            </h4>
            <br />
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      
      
      <div class="section section-contacts">
        <div class="container">
            <div class="md-layout">
      <div class="md-layout-item md-size-200 mx-auto md-small-size-50">
            <center><h1>Statistiques</h1></center>
                    <div class="container mt-2" >
             <center><h3> Nombre de commande : {{numberOrders}} | Chiffre d'affaire :  {{totalOrders}} DA</h3></center>
             <center>nombre de commande par restaurant</center>
<Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
            </div>
        </div>
      </div>
          </div>
    </div>
  </div>
  </div>












  
</template>

<script>
import { Bar } from 'vue-chartjs/legacy'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import OrderService from "@/services/OrderService";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 20
    },
    height: {
      type: Number,
      default: 20
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chartData: {
        labels: [ ],
        datasets: [ { data: [40, 20, 12] } ]
      },
      chartOptions: {
        responsive: true
      },
      Orders : [],   
      totalOrders : null,
      numberOrders :null

    }
  },
  methods: {
    retrieveOrders() {
        OrderService.getAll()
        .then(response => {
            this.Orders = response.data ;
            console.log(response.data);
            this.numberOrders = this.Orders.length;
            for (var order of this.Orders) 
            {
            this.totalOrders +=order.total;

            }
            var resto = [];
            var nbrcmd = [];
            var groupbyresto = {};
            for (var key in this.Orders){
                var id_restaurant = this.Orders[key].id_restaurant;
            if (!groupbyresto[id_restaurant]){
                groupbyresto[id_restaurant] = 0;
            }
            groupbyresto[id_restaurant] += 1 ;
            }
            console.log(groupbyresto);
            resto =Object.keys(groupbyresto);
            nbrcmd = Object.values(groupbyresto);
            this.chartData.labels = resto;
            this.chartData.datasets[0].data = nbrcmd;

            console.log(this.totalOrders);
        })
        .catch(e => {
            console.log(e);
        });
    },
  },
   mounted() {
    this.retrieveOrders();

  }
}
</script>