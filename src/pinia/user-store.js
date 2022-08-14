import { defineStore } from 'pinia';
import {ref} from 'vue';
import { api } from "src/boot/axios";
import { LocalStorage } from "quasar";



export const useUserStore = defineStore ('user',() => {

  const access = async (mail, password) => {
    console.log('ingresa en el async');
    try{
      const res = await api.post("/loginOK", {
        mail: mail,
        password: password
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

  return {
    access
  };
});

