<template>
  <h1> Ajout Commande</h1>

  <form @submit.prevent="addCommande">
    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <input type="text" class="form-control" id="nom" aria-describedby="nomcommande" v-model="commande.Description" :class="{'is-invalid': errors.Description}" required>
      <div class="invalid-feedback" v-if="errors.Description">La description est obligatoire.</div>
    </div>
    
    <div class="mb-3">
      <label for="datecommande" class="form-label">DateCommande</label>
      <input type="date" class="form-control" id="datecommande" v-model="commande.Date_Commande" :class="{'is-invalid': errors.Date_Commande}" required>
      <div class="invalid-feedback" v-if="errors.Date_Commande">La date de commande est obligatoire.</div>
    </div>

    <div class="mb-3">
      <label for="datelivraison" class="form-label">DateLivraision</label>
      <input type="date" class="form-control" id="datelivraision" v-model="commande.Date_Livraison" :class="{'is-invalid': errors.Date_Livraison}" required>
      <div class="invalid-feedback" v-if="errors.Date_Livraison">La date de livraison est obligatoire.</div>
    </div>

    <div class="mb-3">
      <label for="prix" class="form-label">Prix</label>
      <input type="number" step="0.1" class="form-control" id="prix" v-model="commande.Prix" :class="{'is-invalid': errors.Prix}" required>
      <div class="invalid-feedback" v-if="errors.Prix">Le prix est obligatoire et doit être un nombre valide.</div>
    </div>

    <div class="mb-3">
      <label for="statut" class="form-label">Statut</label>
      <select class="form-control" id="statut" v-model="commande.Statut" :class="{'is-invalid': errors.Statut}" required>
        <option value="Encours">Encours</option>
        <option value="Livrer">Livrer</option>
        <option value="Annuler">Annuler</option>
      </select>
      <div class="invalid-feedback" v-if="errors.Statut">Le statut est obligatoire.</div>
    </div>

    <button type="submit" class="btn btn-primary">Enregistrer</button>
    <button type="button" class="btn btn-secondary" @click="resetForm">Réinitialiser</button>
  </form>
</template>

<script setup>
import http from "@/services/axios_api";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const commande = ref({
  Description: '',
  Date_Commande: '',
  Date_Livraison: '',
  Statut: 'Encours',
  Prix: ''
});

const errors = ref({
  Description: false,
  Date_Commande: false,
  Date_Livraison: false,
  Statut: false,
  Prix: false
});

const addCommande = () => {
  // Validation des champs
  errors.value.Description = !commande.value.Description;
  errors.value.Date_Commande = !commande.value.Date_Commande;
  errors.value.Date_Livraison = !commande.value.Date_Livraison;
  errors.value.Prix = !commande.value.Prix || isNaN(commande.value.Prix);
  errors.value.Statut = !commande.value.Statut;

  // Si des erreurs existent, ne pas soumettre le formulaire
  if (Object.values(errors.value).includes(true)) {
    return;
  }

  // Envoi de la commande au backend
  http.post('/commande', commande.value)
    .then(res => {
      router.push('/');
    })
    .catch(error => {
      console.log("Erreur d'ajout", error);
    });
}

const resetForm = () => {
  // Réinitialisation du formulaire
  commande.value = {
    Description: '',
    Date_Commande: '',
    Date_Livraison: '',
    Statut: 'Encours',
    Prix: ''
  };
  // Réinitialisation des erreurs
  errors.value = {
    Description: false,
    Date_Commande: false,
    Date_Livraison: false,
    Statut: false,
    Prix: false
  };
}
</script>

<style scoped>
h1 {
  color: #343a40;
  font-weight: bold;
  text-align: center;
}

/* Style général */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f7f9fc;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* Met le titre de chaque champ en gras */
.form-label {
  font-weight: bold;
  color: #212529; /* Couleur par défaut, modifiable selon votre design */
}
/* Conteneur principal */
.form-container {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
  width: 90%; /* S'adapte à l'écran */
  max-width: 500px; /* Largeur maximale */
  box-sizing: border-box; /* Inclure padding et bordure dans les dimensions */
}

/* Espacement des champs */
.mb-3 {
  margin-bottom: 20px;
}

/* Champs de formulaire */
.form-control {
  border-radius: 5px;
  padding: 12px;
  font-size: 15px;
  border: 1px solid #ced4da;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box; /* Permet au padding d'être pris en compte */
}

/* Effet de focus sur les champs */
.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
  outline: none;
}

/* Validation des champs */
.is-invalid {
  border-color: #dc3545;
}

.invalid-feedback {
  color: #dc3545;
  font-size: 0.875em;
}

/* Bouton de soumission */
.btn-primary {
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  width: 50%; /* Le bouton occupe toute la largeur */
  box-sizing: border-box;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

/* Effet au survol */
.btn-primary:hover {
  background-color: #0056b3;
  cursor: pointer;
  transform: scale(1.02); /* Léger agrandissement */
}

.btn-secondary {
  background-color: #f71823;
  border: none;
  border-radius: 5px;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  width: 50%;
  box-sizing: border-box;
}

.btn-secondary:hover {
  background-color: #5a6268;
  cursor: pointer;
  transform: scale(1.02); /* Léger agrandissement */
}

/* Ajout d'un effet responsive pour écrans plus petits */
@media (max-width: 768px) {
  .form-container {
    padding: 20px;
    max-width: 90%;
  }
}
</style>
