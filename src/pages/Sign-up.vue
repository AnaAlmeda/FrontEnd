<template>
  <div class="q-pa-md" style="max-width: 300px" padding>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Nombre *"
        hint="Nombre"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
      />

      <q-input
        filled
        v-model="surname"
        label="Apellido *"
        hint="Apellido"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor ingrese datos al campo']"
      />

      <q-input
        filled
        type="number"
        v-model="age"
        label="Edad *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor ingrese un valor al campo',
          val => val > 0 && val < 100 || 'Por favor ingrese su edad correcta'
        ]"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

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
    const age = ref(null)
    const accept = ref(false)
    return {
      name,
      surname,
      age,
      accept,
      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },
      onReset () {
        name.value = null
        surname.value = null
        age.value = null
        accept.value = false
      }
    }
  }
}
</script>
