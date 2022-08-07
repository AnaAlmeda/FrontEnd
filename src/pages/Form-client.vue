<template>
  <div class="col-12" style="max-width: 500px" fullscreen>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-card class="fixed-center q-pa-lg" style="width:500px" padding>
        <q-list>
          <q-item>
            <q-input
              filled
              v-model="surname"
              label="Apellido *"
              class="q-pa-xl"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
          </q-item>
          <q-item>
            <q-input
              filled
              v-model="name"
              label="Nombre Completo *"
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
              v-model="documento"
              label="Numero de Documento *"
              style="width:100%"
              hint="Ingresar números sin puntos"
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
          </q-item>
          <q-item>
            <q-input
              v-model="date"
              filled
              style="width:100%"
              type="date"
              hint="Native date"
            />
          </q-item>
          <q-item>
            <q-input
              v-model="email"
              filled
              style="width:100%"
              type="email"
              hint="Email"
            />
          </q-item>
          <q-item>
            <q-input
              filled
              v-model="direccion"
              label="Calle *"
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
              v-model="numeroDir"
              style="width:100%"
              label="Numero *"
              hint="Solo se permiten números en este campo"
              :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
            />
          </q-item>
          <q-item>
            <q-input
              label = "Aclaraciones extras"
              style="width:100%"
              v-model="text"
              filled
              type="textarea"
            />
          </q-item>

          <q-item>
            <q-btn
              label="Registrarse"
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
        </q-list>
      </q-card>
    </q-form>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
export default {
  setup () {
    const $q = useQuasar()
    const name = ref(null)
    const surname = ref (null)
    const legajo = ref(null)
    const documento = ref(null)
    const termino = ref(false)
    const seleccion = ref(null)
    const text = ref('')
    const email = ref('')
    const date = ref('')
    const opciones = ['Sup. Ventas', 'Sup. Administracion', 'Sup. Caja', 'Ventas','Administracion','Caja']
    return {
      name,
      surname,
      legajo,
      documento,
      termino,
      seleccion,
      opciones,
      text,
      email,
      date,
      onSubmit () {
        if (termino.value === false) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Por favor acepte los terminos para poder continuar'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Usuario registrado con exito'
          })
        }
      },
      onReset () {
        name.value = null
        surname.value = null
        legajo.value = null
        documento.value = null
        termino.value = false
        seleccion.value = null
        date.value = null
      }
    }
  }      
}
</script>

