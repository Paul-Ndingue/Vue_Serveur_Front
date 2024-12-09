<template>

  </template>

<script>
import http from "@/services/axios_api";
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
// import axios from "axios";
import http from '@/services/axios_api.js'


// fonction d'ajout vers le back-end
const getProduct = () => {
  // Validation des champs avant l'envoi 
    http.get('/produits')
      .then(res => {
        produits.value = res.data.data;
          })
      .catch(error => {
        console.log("Erreur d'ajout", error)
      }) 
}

 // const produits = ref({});
    // http.get('/produits')
    // .then(res => { 
    //   produits.value = res.data.data;
    // })
    // .catch(error => {
    //  console.log("Erreur d'ajout",error) 
    // })
</script>

<style>

</style>