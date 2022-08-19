
<template>
  <div>
    <q-form
      @reset="onReset"
      class="q-gutter-md"
    >
        <q-list>
          <q-item>
            <q-input
              filled
              v-model="nombreProyecto"
              label="Nombre del proyecto *"
              style="width:50%"
              class = "q-pr-md"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
            <q-input
              filled
              type="date"
              v-model="fechaCreacion"
              hint = "Fecha de creacion"
              style="width:50%"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
          </q-item>
          <q-item>
            <q-input
              dense
              filled
              type="number"
              step="1"
              min="0"
              v-model="manzanas"
              label="manzanas *"
              style="width:50%"
              class = "q-pr-md"
              hint="Ingresar números sin puntos"
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
            <q-input
              dense
              filled
              type="number"
              step="1"
              min="0"
              v-model="casas"
              label="casas *"
              style="width:50%"
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
          </q-item>

          <div>
            <q-separator
            style = "padding-top: 3px;"
            />
          </div>
          <q-item>
            <q-input
              filled
              type="number"
              step="any"
              min="0"
              v-model="herrajesyS"
              label="Herrajes y Suspensiones *"
              style="width:50%"
              class = "q-pr-md"
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
            <q-input
              filled
              type="number"
              step="any"
              min="0"
              v-model="cables"
              label="cables *"
              style="width:50%"
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
          </q-item>
          <q-item>
            <q-input
              filled
              type="number"
              step="any"
              min="0"
              v-model="pasivos"
              label="pasivos *"
              style="width:50%"
              class = "q-pr-md"
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
            <q-input
              filled
              type="number"
              step="any"
              min="0"
              v-model="manoObra"
              label="Mano de Obra *"
              style="width:50%"
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
          </q-item>
          <q-item>
            <q-input
              filled
              disable
              type="number"
              step="any"
              min="0"
              v-model="costoTRed"
              label="Costo total de la red *"
              style="width:50%"
              class = "q-pr-md"
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
            <div class="q-pl-xl">
              <q-btn
                label="Calcular costo de la red"
                @click="costoTotaldeRed"
                type="submit"
                size="lg"
                color="primary"/>
              </div>
          </q-item>
          <div>
            <q-separator
            style = "padding-top: 3px;"
            />
          </div>

          <q-item>
            <q-input
              filled
              type="number"
              step="any"
              min="0"
              v-model="hDatos"
              label="Headend Datos *"
              style="width:30%"
              class="q-pa-md"
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
            <q-input
              filled
              disable
              type="number"
              step="any"
              min="0"
              v-model="costoTRyD"
              label="costo Total de Red y Datos *"
              style="width:30%"
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
          </q-item>
          <q-item>
            <q-input
              filled
              disable
              type="number"
              step="any"
              min="0"
              v-model="costoMHD"
              label="costo de Red en manzana *"
              style="width:30%"
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
          </q-item>
          <q-item>
            <q-input
              filled
              disable
              type="number"
              step="any"
              min="0"
              v-model="costoCHD"
              label="costo de Red en casas *"
              style="width:30%"
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
            <q-btn
              label="Calcular costo de la red y datos"
              @click="costoTotaldeRedyDatos"
              style="width:30%"
              type="submit"
              color="primary"/>
          </q-item>

           <div>
            <q-separator
            style = "padding-top: 3px;"
            />
          </div>

          <q-item>
            <q-input
              filled
              type="number"
              step="any"
              min="0"
              v-model="hDatosTV"
              label="Headend Datos y TV *"
              style="width:30%"
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
            <q-input
              filled
              disable
              type="number"
              step="any"
              min="0"
              v-model="costoTRDyTV"
              label="costo Total de Red, Datos y TV *"
              style="width:30%"
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
          </q-item>

          <q-item>
             <q-select outlined v-model="opciones_estado" :option="estado" label="Estado" />
          </q-item>
          <q-item>
            <q-input
              filled
              disable
              type="number"
              step="any"
              min="0"
              v-model="costoMHDyTV"
              label="costo de Red en manzana (datos y tv) *"
              style="width:30%"
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
          </q-item>
          <q-item>
            <q-input
              filled
              disable
              type="number"
              step="any"
              min="0"
              v-model="costoCHDyTV"
              label="costo de Red en casas (datos y tv) *"
              style="width:30%"
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
          </q-item>

          <q-item>
            <q-btn
              label="Calcular costo de la red y datos"
              @click="costoTotaldeRedDatosyTV"
              style="width:100%"
              type="submit"
              color="primary"/>
          </q-item>
           <div>
            <q-separator style = "padding-top: 3px;"/>
          </div>
          <q-item>
            <q-input
              filled
              v-model="fActivas"
              label="Fibras Activas *"
              class="q-pa-xl"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
           <q-input
              filled
              type= "number"
              v-model="conexionesP"
              label="Conexiones posibles *"
              style="width:30%"
              class="q-pa-md"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
          </q-item>

          <q-item>
            <div class="q-pa-md" style="max-width: 300px">
              <q-input
                v-model="comentarios"
                filled
                type="textarea"
              />
            </div>
          </q-item>

          <q-item>
            <q-btn
              label="Limpiar"
              style="width:100%"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm" />
          </q-item>
          <q-item>
            <q-btn
              label="guardar"
              style="width:30%"
              @click="guardarDatos"
              color="primary"
              flat
              class="q-ml-sm" />
          </q-item>
      </q-list>
   </q-form>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { add, divide} from 'mathjs'
import { api} from '../boot/axios'


export default {
  setup () {
    const $q = useQuasar()
    const nombreProyecto = ref(null)
    const fechaCreacion = ref ('')
    const manzanas = ref(null)
    const casas = ref(null)
    const herrajesyS = ref(null)
    const cables = ref(null)
    const pasivos = ref(null)
    const manoObra = ref(null)
    const costoTRed = ref(null)
    const hDatos = ref(null)
    const costoTRyD = ref(null)
    const costoMHD = ref(null)
    const costoCHD = ref(null)
    const hDatosyTV = ref(null)
    const costoTRDyTV = ref(null)
    const costoMHDyTV = ref(null)
    const costoCHDyTV = ref(null)
    const fActivas = ref(null)
    const conexionesP = ref(null)
    const comentarios = ref('')
    const opciones_estado = ref (null)
    const estado = ['Aprobado', 'En proceso', 'Rechazado']


    const costoTotaldeRed = () => {
        costoTRed.value = trunc(add(herrajesyS.value, cables.value, pasivos.value, manoObra.value), 2);
    }


    const costoTotaldeRedyDatos = () => {
        costoTRyD.value = trunc(add(hDatos.value, costoTRed.value), 2);
        costoMHD.value = trunc(divide(costoTRyD.value, manzanas.value), 2);
        costoCHD.value = trunc(divide(costoTRyD.value, casas.value), 2);
      }

    const costoTotaldeRedDatosyTV = () =>{
      costoTRDyTV.value = trunc(add(hDatosTV.value, costoTRed.value),2);
    }

    const trunc = (x, posiciones = 0) => {
           var s = x.toString()
           var l = s.length
           var decimalLength = s.indexOf('.') + 1
           var numStr = s.substr(0, decimalLength + posiciones)
          return Number(numStr)
      }

    const guardarDatos = async () => {
      try{
        const res = await api.post("/altaProyecto", {
          nombreProyecto: nombreProyecto.value,
          fechaCreacion: fechaCreacion.value,
          manzanas: manzanas.value,
          casas: casas.value,
          herrajesyS: herrajesyS.value,
          cables: cables.value,
          pasivos: pasivos.value,
          manoObra: manoObra.value,
          costoTRed: costoTRed.value,
          hDatos: hDatos.value,
          costoTRyD: costoTRyD.value,
          costoMHD: costoMHD.value,
          costoCHD: costoCHD.value,
          hDatosyTV: hDatosTV.value,
          costoTRDyTV: costoTRDyTV.value,
          costoMHDyTV: costoMHDyTV.value,
          costoCHDyTV: costoCHDyTV.value,
          fActivas: fActivas.value,
          conexionesP: conexionesP.value,
          comentarios: comentarios.value,
          estado: estado.value

        });
        console.log('devuelve el res.data');
        console.log (res.data.data.token);
        console.log('ingresa al localstorage');
        LocalStorage.set('token',res.data.data.token);
      }catch(error){
        if (error.response) {
          console.log('este es error.data');
          console.log(error.response.data)
          throw error.response.data.data.message;
        } else if (error.request) {
          // La petición fue hecha pero no se recibió respuesta
          // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
          // http.ClientRequest en node.js
          console.log(error.request);
        } else {
          // Algo paso al preparar la petición que lanzo un Error
          console.log('Error', error.message);
        }
        throw('error de servidor');
      }
    }


    const onReset = () => {
        nombreProyecto.value = null
        fechaCreacion.value = null
        manzanas.value = null
        casas.value = null
        herrajesyS.value = false
        cables.value = null
        pasivos.value = null
        manoObra.value = null
        costoTRed.value = null
        hDatos.value = null
        costoTRyD.value = null
        costoMHD.value = null
        costoCHD.value = null
        hDatosyTV.value = null
        costoTRDyTV.value = null
        costoMHDyTV.value = null
        costoCHDyTV.value = null
        fActivas.value = null
        conexionesP.value = null
        comentarios.value = null
        opciones_estado.value = null
      }


    return {
      nombreProyecto,
      fechaCreacion,
      manzanas,
      casas,
      herrajesyS,
      cables,
      pasivos,
      manoObra,
      costoTRed,
      fActivas,
      conexionesP,
      hDatos,
      costoTRyD,
      costoMHD,
      costoCHD,
      hDatosTV,
      costoTRDyTV,
      costoMHDyTV,
      costoCHDyTV,
      comentarios,
      opciones_estado,
      estado,
      costoTotaldeRed,
      costoTotaldeRedyDatos,
      costoTotaldeRedDatosyTV,
      guardarDatos,
      onReset,
    }
  }
}
</script>

