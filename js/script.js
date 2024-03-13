
import {pizzeria} from './pizzeria.js'

const { createApp } = Vue;

createApp({

  data(){

    return{

      pizzeria

    }
  },

  mounted(){

    console.log(pizzeria)
  }
}).mount('#app');