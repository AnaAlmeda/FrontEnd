<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-black">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Bienvenid@</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"

        :width="200"
        :breakpoint="500"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <q-item clickable v-ripple to = "/registrarse">
              <q-item-section avatar style="min-width: 25px">
                <i style="width:20px" class="fas fa-calendar"></i>
            </q-item-section>
              <q-item-section style="width:5px">
                Calendario
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar style="min-width: 25px">
                <i style="width:20px" class="fas fa-chart-line"></i>
              </q-item-section>
              <q-item-section style="width:5px">
                Proyectos
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/facturacion">
              <q-item-section avatar>
                <i style="width:20px" class="fas fa-dolly"></i>
              </q-item-section>

              <q-item-section>
                Proveedores
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/ventas">
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>
              <q-item-section>
                Equipos
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/Deposito">
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Depósito
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <router-view/>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      drawer: ref(false),
      miniState: ref(true)
    }
  }
}
</script>
