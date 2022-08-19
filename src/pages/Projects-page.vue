<template>
  <q-card>
    <q-item>
    <q-btn
      label="Cargar datos"
      to = "/formProyecto"
      style="width:20%"
      class = "float-right"
      type="submit"
      color="primary"/>
    </q-item>
    <q-item>
      <q-table
        title="Proyectos"
        :rows="rows"
        :columns="columns"
        row-key="id"
        v-model:pagination="pagination"
        :loading="loading"
        :filter="filter"
        @request="cargaDatos"
        binary-state-sort
      >
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Buscar">
            <template v-slot:append>
              <q-icon name="Search" />
            </template>
          </q-input>
        </template>
        <template v-slot:body-cell-acciones="props">
          <q-td>
            <q-btn-group unelevated split class="row flex-center bg-grey-2 text-grey-8" style="border: 1px;" solid>
              <q-btn flat style="width:50%" class="q-px-sm" @click="detalle(props)" size="1.3em">
                  <i  class="fas fa-bars"></i>
                  <q-tooltip content-class="text-black" content-style="font-size: 10px;border: 1px solid"></q-tooltip>
              </q-btn>


            </q-btn-group>

          </q-td>



        </template>
      </q-table>

    </q-item>
  </q-card>
</template>

<script>
import { ref, onMounted } from 'vue'
import { api } from '../boot/axios'

const columns = [
    {
      name: 'proyecto',
      required: true,
      label: 'Proyecto',
      align: 'left',
      field: row => row.name,
      format: val => `${val}`,
      sortable: true
    },
    {
      name: 'fecha',
      align: 'center',
      label: 'Fecha',
      field: 'fecha',
      sortable: true
    },
    {
      name: 'numfact',
      label: 'Factura N°',
      field: 'numfact',
      sortable: true
    },
    {
      name: 'fechavenc',
      label: 'Fecha de Venc',
      field: 'fechavenc',
      sortable: true
    },
    {
      name: 'estado',
      label: 'Estado',
      field: 'estado',
      sortable: true
    },
    {
      name: 'acciones',
      label: 'Acciones',
      align: 'center',
      field: 'acciones'
    }
]

const originalRows = []



export default {
  setup () {
    const rows = ref([])
    const filter = ref('')
    const loading = ref(false)
    const pagination = ref({
      sortBy: 'desc',
      descending: false,
      page: 1,
      rowsPerPage: 3,
      rowsNumber: 10
    })

    // SELECT * FROM ... WHERE...LIMIT...
    function fetchFromServer (startRow, count, filter, sortBy, descending) {
      const data = filter
        ? originalRows.filter(row => row.name.includes(filter))
        : originalRows.slice()

      // handle sortBy
      if (sortBy) {
        const sortFn = sortBy === 'desc'
          ? (descending
              ? (a, b) => (a.name > b.name ? -1 : a.name < b.name ? 1 : 0)
              : (a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
            )
          : (descending
              ? (a, b) => (parseFloat(b[ sortBy ]) - parseFloat(a[ sortBy ]))
              : (a, b) => (parseFloat(a[ sortBy ]) - parseFloat(b[ sortBy ]))
            )
        data.sort(sortFn)
      }

      return data.slice(startRow, startRow + count)
    }

    // emulate 'SELECT count(*) FROM ...WHERE...'
    function getRowsNumberCount (filter) {
      if (!filter) {
        return originalRows.length
      }
      let count = 0
      originalRows.forEach(treat => {
        if (treat.name.includes(filter)) {
          ++count
        }
      })
      return count
    }

    //cargar los datos en la tabla
    const cargaDatos = async(props) =>{
      try {
        const res = await api.get("/allProyectos");
        console.log(res);

        const { page, rowsPerPage, sortBy, descending } = props.pagination
        const filter = props.filter

        loading.value = true

        // emulate server
        setTimeout(() => {
          // update rowsCount with appropriate value
          pagination.value.rowsNumber = getRowsNumberCount(filter)

          // get all rows if "All" (0) is selected
          const fetchCount = rowsPerPage === 0 ? pagination.value.rowsNumber : rowsPerPage

          // calculate starting row of data
          const startRow = (page - 1) * rowsPerPage

          // fetch data from "server"
          const returnedData = fetchFromServer(startRow, fetchCount, filter, sortBy, descending)

          // clear out existing data and add new
          rows.value.splice(0, rows.value.length, ...returnedData)

          // don't forget to update local pagination object
          pagination.value.page = page
          pagination.value.rowsPerPage = rowsPerPage
          pagination.value.sortBy = sortBy
          pagination.value.descending = descending

          // ...and turn of loading indicator
          loading.value = false
        }, 1500)

      } catch (error) {

      }

    }

    onMounted(() => {
      // get initial data from server (1st page)
      cargaDatos({
        pagination: pagination.value,
        filter: undefined
      })
    })

    return {
      filter,
      loading,
      pagination,
      columns,
      rows,

      cargaDatos
    }
  }
}
</script>




