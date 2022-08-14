<template>
  <q-page-container style="background-color: #3393ff">
    <q-page>
      <q-form @submit="logueo">
        <q-card class="fixed-center q-pa-lg" style="width: 450px">
          <q-list>
            <q-item>
              <q-input
                autofocus
                square
                filled
                clearable
                v-model="mail"
                style="width: 100%; background: white"
                type="text"
                label="usuario"
                :rules="[
                  (val) => (val && val.length > 0) || 'Por favor escriba algo',
                  (val) => /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val) ||'Formato Email incorrecto',
                  ]"
              />
            </q-item>
            <q-item>
              <q-input
                square
                clearable
                filled
                v-model="password"
                :type="isPwd ? 'password' : 'text'"
                style="width: 100%; background: white"
                label="contraseña"
                :rules="[
                     (val) => (val && val.length > 5) || 'Contraseña mayor a 6 carácteres',]"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
            </q-item>
            <q-item>
              <q-btn
                unelevated
                type = "submit"

                color="light-green-7"
                size="lg"
                class="full-width"
                label="Login"
              />
            </q-item>
            <q-item>
              <q-btn
                to="/registrarse"
                unelevated
                color="light-blue-7"
                size="lg"
                class="full-width"
                label="Registrate"
              />
            </q-item>
          </q-list>
        </q-card>
      </q-form>
    </q-page>
  </q-page-container>
</template>

<script setup>
import {useUserStore} from "../pinia/user-store";
import { ref } from "vue";
import {useRouter} from "vue-router";
import { useQuasar } from 'quasar';


    const $q = useQuasar();
    const user = useUserStore();
    const router = useRouter()
    const isPwd = ref('true');
    const mail = ref ('')
    const password = ref('')

    const logueo = async () =>{

      if (!mail.value || !password.value){
        $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Tiene campos sin completar'
          })
      }else {
        try {
          //console.log('entra aqui')
          await user.access(mail.value,password.value);
          router.push("/adm");

        } catch (error) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: error
          })
        }
      }
    }

</script>
