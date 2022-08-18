<template>
  <div class="col-12" fullscreen>
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
              class="q-pa-xl"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
          </q-item>
          <q-item>
            <q-input
              filled
              type="date"
              v-model="fechaCreacion"
              label="Fecha de creacion *"
              style="width:100%"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
          </q-item>
          <q-item>
            <q-input
              filled
              type="number"
              step="1"
              min="0"
              v-model="manzanas"
              label="manzanas *"
              style="width:100%"
              hint="Ingresar números sin puntos"
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
          </q-item>
          <q-item>
            <q-input
              filled
              type="number"
              step="1"
              min="0"
              v-model="casas"
              label="casas *"
              style="width:100%"
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
          </q-item>

          <div>
            <q-separator/>
          </div>
          <q-item>
            <q-input
              filled
              type="number"
              step="any"
              min="0"
              v-model="herrajesyS"
              label="Herrajes y Suspensiones *"
              style="width:100%"
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
          </q-item>
          <q-item>
            <q-input
              filled
              type="number"
              step="any"
              min="0"
              v-model="cables"
              label="cables *"
              style="width:100%"
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
              style="width:100%"
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
          </q-item>
          <q-item>
            <q-input
              filled
              type="number"
              step="any"
              min="0"
              v-model="manoObra"
              label="Mano de Obra *"
              style="width:100%"
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
              style="width:100%"
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
          </q-item>

          <q-item>
            <q-btn
              label="Calcular costo de la red"
              @click="costoTotaldeRed"
              style="width:100%"
              type="submit"
              color="primary"/>
          </q-item>

          <div>
            <q-separator/>
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
            <div>
              <q-separator/>
            </div>
           <q-input
              filled
              type= "number"
              v-model="conexionesP"
              label="Conexiones posibles *"
              style="width:100%"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
          </q-item>

          <div>
            <q-separator/>
          </div>

          <q-item>
            <q-input
              filled
              type="number"
              step="any"
              min="0"
              v-model="hDatos"
              label="Headend Datos *"
              style="width:100%"
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
              v-model="costoTRyD"
              label="costo Total de Red y Datos *"
              style="width:100%"
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
              style="width:100%"
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
              style="width:100%"
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
          </q-item>

          <q-item>
            <q-btn
              label="Calcular costo de la red y datos"
              @click="costoTotaldeRedyDatos"
              style="width:100%"
              type="submit"
              color="primary"/>
          </q-item>

           <div>
            <q-separator/>
          </div>

          <q-item>
            <q-input
              filled
              type="number"
              step="any"
              min="0"
              v-model="hDatosTV"
              label="Headend Datos y TV *"
              style="width:100%"
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
              v-model="costoTRDyTV"
              label="costo Total de Red, Datos y TV *"
              style="width:100%"
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
              v-model="costoMHDyTV"
              label="costo de Red en manzana (datos y tv) *"
              style="width:100%"
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
              style="width:100%"
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
              label="Crear pdf"
              @click="crearPDF"
              style="width:100%"
              type="submit"
              color="primary"/>
          </q-item>

      </q-list>
   </q-form>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { add, divide} from 'mathjs'


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
    const fActivas = ref(null)
    const conexionesP = ref(null)
    const hDatos = ref(null)
    const costoTRyD = ref(null)
    const costoMHD = ref(null)
    const costoCHD = ref(null)
    const hDatosTV = ref(null)
    const costoTRDyTV = ref(null)
    const costoMHDyTV = ref(null)
    const costoCHDyTV = ref(null)


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
        fActivas.value = null
        conexionesP.value = null
        hDatos.value = null
        costoTRyD.value = null
        costoMHD.value = null
        costoCHD.value = null
        hDatosTV.value = null
        costoTRDyTV.value = null
        costoMHDyTV.value = null
        costoCHDyTV.value = null
      }

      crearPDF () {
        
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
      costoTotaldeRed,
      costoTotaldeRedyDatos,
      costoTotaldeRedDatosyTV,
      onReset,
    }
  }
}
</script>

