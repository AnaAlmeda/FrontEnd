<template>
  <q-page-container style="background-color:#3393FF">
    <q-page>
      <q-form @submit="onSubmit">
        <q-card class="fixed-center q-pa-lg" style="width:450px">
          <q-list>
            <q-item>
              <q-input
                autofocus
                square
                filled
                clearable
                v-model="mail"
                style="width:100%;background:white"
                type="text"
                label="usuario"
                />
            </q-item>
            <q-item>
              <q-input
                square
                clearable
                filled
                v-model="password"
                :type="isPwd ? 'password' : 'text'"
                style="width:100%;background:white"
                label="contraseña"


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
                type="submit"
                to="/facturacion"
                unelevated
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

<script>
import { ref } from 'vue'
import { Notify } from 'quasar'
import { api } from 'src/boot/axios'
import { LocalStorage } from 'quasar'



  export default {
    setup () {
        const mail = ref('')
        const password = ref ('')
        const isPwd = ref ('true')
        return {
            onSubmit () {
              api.post('/loginOK', {
                  mail: 'anaal@gmail.com',
                  password: 'benja1022'
              })
              .then(function (res) {
                  const Token = res.data.data.token;
                  LocalStorage.set('token',Token);
                  console.log(Token);
              })
              .catch(function (error) {
                  console.log(error);
              });

              /*
              console.log('ingresa');
              if (!this.user || !this.password) {
                Notify.create({
                  message: 'Ingrese los datos'
                })
              } else {
                this.$store.dispatch('usr/login', {
                  usuario: this.user,
                  pass: this.password,
                }).then(res)({
                  usuario: res
                })
              }*/
            }
        }
      }
  }
</script>


