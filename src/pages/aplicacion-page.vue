<template>
  <div class="row justify-center q-pa-lg">
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-xs-12 q-pa-sm">
      <bar-chart></bar-chart>
    </div>
  </div>
</template>

<style>
</style>

<script>
import BarChart from './circular-page.vue'
export default {
  name: 'aplicacion-page',
  components: {
    BarChart,
  },
  data () {
    return {}
  }
}
</script>
