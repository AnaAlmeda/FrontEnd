<template>
  <q-card class="bg-white q-pa-none full-width">
    <q-card-section class="bg-blue-grey-8">
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h6 text-white text-center">Bar Chart</div>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <h1>hola</h1>
      <canvas v-bind:value ="barchart" width="400" height="400" ></canvas>
    </q-card-section>
  </q-card>
</template>

<script>
import { Chart } from 'chart.js'

const ctx = document.getElementById('barchart').getContext('2d');
console.log('esta entrando en el metodo');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

export default {

  setup() {
    return {
      myChart
    }
}

  /* () {
    this.createChart('barchart')
  },
  methods: {
    createChart (chartId) {
      const ctx = document.getElementById(chartId)
      console.log('si entra aqui')
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
          datasets: [
            {
              label: 'Population (millions)',
              backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
              data: [2478, 5267, 734, 784, 433]
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
          }
        }
      })*/
      //return myChart
  }


</script>

<style>
</style>
