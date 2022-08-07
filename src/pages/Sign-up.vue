<template>
  <div class="fixed-center q-pa-lg" style="max-width: 300px" padding>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-select
        label="Sector"
        v-model= "seleccion"
        :options="opciones"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
      />

      <q-input
        filled
        v-model="name"
        label="Nombre Completo *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
      />

      <q-input
        filled
        v-model="surname"
        label="Apellido *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
      />

      <q-input
        filled
        type="number"
        step="1"
        min="0"
        v-model="legajo"
        label="Numero de Legajo *"
        hint="Solo se permiten números en este campo"
        :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
      />

      <q-input
        filled
        type="number"
        step="1"
        min="0"
        v-model="documento"
        label="Numero de Documento *"
        hint="Ingresar números sin puntos"
        :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
      />

      <q-toggle v-model="termino" label="Por favor acepte los terminos para continuar" />

      <div>
        <q-btn label="Registrarse" type="submit" color="primary"/>
        <q-btn label="Limpiar" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
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
    const opciones = ['Sup. Ventas', 'Sup. Administracion', 'Sup. Caja', 'Ventas','Administracion','Caja']
    return {
      name,
      surname,
      legajo,
      documento,
      termino,
      seleccion,
      opciones,
      onSubmit () {
        console.log ('estoy aqui')
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
      }
    }
  }
}
</script>
