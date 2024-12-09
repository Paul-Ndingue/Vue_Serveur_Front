<template>
  <h1> Ajout produit</h1>
  <!-- naviguer entre les pages a travers les liens -->
  <!-- <RouterLink to="/"> retour a Acceuil</RouterLink> -->

  <form @submit.prevent="addProduct">
    <div class="mb-3">
      <label for="nom" class="form-label">Nom</label>
      <input type="text" class="form-control" id="nom" aria-describedby="nomproduit" v-model="product.Nom">
      <div v-if="errors.Nom" class="text-danger">{{ errors.Nom }}</div>
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <input type="text" class="form-control" id="description" v-model="product.Description">
      <div v-if="errors.Description" class="text-danger">{{ errors.Description }}</div>
    </div>

    <div class="mb-3">
      <label for="quantite" class="form-label">Quantite</label>
      <input type="number" class="form-control" id="quantite" v-model="product.Quantite">
      <div v-if="errors.Quantite" class="text-danger">{{ errors.Quantite }}</div>
    </div>

    <div class="mb-3">
      <label for="prix" class="form-label">prix</label>
      <input type="number" step="0.1" class="form-control" id="prix" v-model="product.Prix">
      <div v-if="errors.Prix" class="text-danger">{{ errors.Prix }}</div>
    </div>
  
    <button type="submit" class="btn btn-primary">Enregistrer</button>
    <!-- Bouton Annuler -->
    <button type="button" class="btn btn-secondary" @click="cancelForm">Annuler</button>
  </form>
</template>

<script setup>
// importer les router link

import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
//important
// import axios from "axios";
import http from '@/services/axios_api.js'

// back-end fonction ref
const product = ref({
  Nom: '',
  Description: '',
  Prix: null,
  Quantite: null
})

// Erreurs de validation
const errors = ref({
  Nom: '',
  Description: '',
  Prix: '',
  Quantite: ''
})

// fonction pour soumettre le produit
const router = useRouter()

// fonction d'ajout vers le back-end
const addProduct = () => {
  // Validation des champs avant l'envoi
  if (validateForm()) {
    http.post('/produits', product.value)
      .then(res => {
        router.push('/')
      })
      .catch(error => {
        console.log("Erreur d'ajout", error)
      })
  }
}

// Fonction pour annuler le formulaire et réinitialiser les valeurs
const cancelForm = () => {
  product.value = {
    Nom: '',
    Description: '',
    Prix: null,
    Quantite: null
  };
  errors.value = {
    Nom: '',
    Description: '',
    Prix: '',
    Quantite: ''
  };
}

// Fonction pour valider le formulaire
const validateForm = () => {
  let isValid = true;

  // Validation des champs
  if (!product.value.Nom) {
    errors.value.Nom = "Le nom est requis";
    isValid = false;
  } else {
    errors.value.Nom = '';
  }

  if (!product.value.Description) {
    errors.value.Description = "La description est requise";
    isValid = false;
  } else {
    errors.value.Description = '';
  }

  if (!product.value.Quantite || product.value.Quantite <= 0) {
    errors.value.Quantite = "La quantité doit être un nombre positif";
    isValid = false;
  } else {
    errors.value.Quantite = '';
  }

  if (!product.value.Prix || product.value.Prix <= 0) {
    errors.value.Prix = "Le prix doit être un nombre positif";
    isValid = false;
  } else {
    errors.value.Prix = '';
  }

  return isValid;
}
</script>

<style scoped>

/* ===== Titre principal ===== */
h1 {
  color: #343a40; /* Couleur foncée élégante */
  font-weight: bold; /* Texte en gras */
  text-align: center; /* Centré horizontalement */
  margin-bottom: 20px; /* Espacement sous le titre */
}

/* ===== Style général ===== */
body {
  font-family: 'Arial', sans-serif; /* Police moderne et lisible */
  background-color: #f7f9fc; /* Couleur de fond claire */
  margin: 0;
  padding: 0;
  min-height: 100vh; /* Hauteur minimale de l'écran */
  display: flex;
  justify-content: center;
  align-items: center;
}
/* Mise en gras des labels */
.form-label {
  font-weight: bold;
  color: #212529; /* Couleur par défaut (gris foncé) */
}

/* ===== Conteneur principal du formulaire ===== */
.form-container {
  background: white; /* Fond blanc du formulaire */
  border-radius: 10px; /* Coins arrondis */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Ombre douce pour le relief */
  padding: 20px 30px; /* Espacement intérieur */
  width: 90%; /* Largeur adaptée à l'écran */
  max-width: 500px; /* Largeur maximale */
  box-sizing: border-box; /* Inclure padding et bordure dans les dimensions */
}

/* ===== Espacement des champs du formulaire ===== */
.mb-3 {
  margin-bottom: 20px; /* Espace entre les champs */
}

/* ===== Champs de saisie ===== */
.form-control {
  border-radius: 5px; /* Coins arrondis */
  padding: 12px; /* Espacement interne */
  font-size: 15px; /* Taille de police standard */
  border: 1px solid #ced4da; /* Bordure grise claire */
  transition: all 0.3s ease; /* Transition pour les interactions */
  width: 100%; /* Champs occupent toute la largeur */
  box-sizing: border-box; /* Padding inclus dans la largeur */
}

/* ===== Effet au focus sur les champs ===== */
.form-control:focus {
  border-color: #007bff; /* Bordure bleue au focus */
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.5); /* Ombre bleue autour */
  outline: none; /* Supprimer le contour par défaut */
}

/* ===== Boutons ===== */
.btn-primary {
  background-color: #007bff; /* Couleur bleue principale */
  border: none; /* Sans bordure */
  border-radius: 5px; /* Coins arrondis */
  padding: 12px; /* Espacement interne */
  font-size: 16px; /* Texte plus grand */
  font-weight: bold; /* Texte en gras */
  color: white; /* Texte blanc */
  width: 50%; /* Largeur du bouton principale */
  box-sizing: border-box; /* Padding inclus */
  transition: background-color 0.3s ease, transform 0.2s ease; /* Transition fluide */
}

/* Effet au survol du bouton principal */
.btn-primary:hover {
  background-color: #0056b3; /* Couleur bleue plus foncée */
  cursor: pointer; /* Curseur en pointeur */
  transform: scale(1.02); /* Léger agrandissement */
}

/* Bouton secondaire (Réinitialiser) */
.btn-secondary {
  width: 45%; /* Largeur du bouton secondaire */
  background-color: #dc3545; /* Couleur rouge */
  font-weight: bold; /* Texte en gras */
  color: white; /* Texte blanc */
  border: none; /* Sans bordure */
  border-radius: 5px; /* Coins arrondis */
  padding: 12px; /* Espacement interne */
  transition: background-color 0.3s ease, transform 0.2s ease; /* Transition fluide */
}

/* Effet au survol du bouton secondaire */
.btn-secondary:hover {
  background-color: #bd2130; /* Rouge plus foncé */
  cursor: pointer; /* Curseur en pointeur */
  transform: scale(1.02); /* Léger agrandissement */
}

/* ===== Conteneur des boutons ===== */
.d-flex {
  display: flex; /* Affichage en ligne */
  gap: 10px; /* Espacement entre les boutons */
  justify-content: center; /* Boutons centrés horizontalement */
  margin-top: 15px; /* Espacement avec les champs */
}

/* ===== Messages d'erreur ===== */
.text-danger {
  color: red; /* Texte en rouge */
  font-size: 0.9em; /* Taille réduite */
  margin-top: 5px; /* Espacement au-dessus */
}

/* ===== Design responsive pour les écrans mobiles ===== */
@media (max-width: 768px) {
  .form-container {
    padding: 20px; /* Réduction du padding */
    max-width: 90%; /* Largeur presque complète */
  }
  .btn-primary, .btn-secondary {
    width: 100%; /* Boutons occupent toute la largeur */
  }
  .d-flex {
    flex-direction: column; /* Boutons en colonne */
    gap: 15px; /* Espacement augmenté */
  }
}
</style>
