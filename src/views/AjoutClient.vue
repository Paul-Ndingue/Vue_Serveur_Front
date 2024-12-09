<template>
  <h1> Ajout Client</h1>

  <form @submit.prevent="validateAndAddClient">
    <div class="mb-3">
      <label for="nom" class="form-label">Nom</label>
      <input type="text" class="form-control" id="nom" v-model="client.Nom" 
 />
      <div v-if="errors.Nom" class="text-danger">{{ errors.Nom }}</div>
    </div>

    <div class="mb-3">
      <label for="prenom" class="form-label">Prenom</label>
      <input type="text" class="form-control" id="prenom" v-model="client.Prenom" />
      <div v-if="errors.Prenom" class="text-danger">{{ errors.Prenom }}</div>
    </div>

    <div class="mb-3">
      <label for="adresse" class="form-label">Adresse</label>
      <input type="text" class="form-control" id="adresse" v-model="client.Adresse"/>
      <div v-if="errors.Adresse" class="text-danger">{{ errors.Adresse }}</div>
    </div>

    <div class="mb-3">
      <label for="telephone" class="form-label">Telephone</label>
      <input type="number" class="form-control" id="telephone" v-model="client.Telephone"/>
      <div v-if="errors.Telephone" class="text-danger">{{ errors.Telephone }}</div>
    </div>

    <div class="mb-3">
      <label for="email" class="form-label">E-mail</label>
      <input type="text" class="form-control" id="email" v-model="client.Email" />
      <div v-if="errors.Email" class="text-danger">{{ errors.Email }}</div>
    </div>

    <div class="d-flex justify-content-between">
      <button type="submit" class="btn btn-primary">Enregistrer</button>
      <button type="button" class="btn btn-secondary" @click="resetForm">Annuler</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import http from "@/services/axios_api";

const router = useRouter();

// Client data
const client = ref({
  Nom: "",
  Prenom: "",
  Adresse: "",
  Telephone: "",
  Email: ""
});

// Errors object
const errors = ref({
  Nom: "",
  Prenom: "",
  Adresse: "",
  Telephone: "",
  Email: ""
});

// Validate inputs and submit the form
const validateAndAddClient = () => {
  let isValid = true;

  // Reset errors
  Object.keys(errors.value).forEach((key) => {
    errors.value[key] = "";
  });

  // Validation rules
  if (!client.value.Nom.trim()) {
    errors.value.Nom = "Le champ 'Nom' est obligatoire.";
    isValid = false;
  }

  if (!client.value.Prenom.trim()) {
    errors.value.Prenom = "Le champ 'Prenom' est obligatoire.";
    isValid = false;
  }

  if (!client.value.Adresse.trim()) {
    errors.value.Adresse = "Le champ 'Adresse' est obligatoire.";
    isValid = false;
  }

  if (!client.value.Telephone || client.value.Telephone.toString().length !== 10) {
    errors.value.Telephone = "Le téléphone doit contenir 10 chiffres.";
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!client.value.Email.trim() || !emailRegex.test(client.value.Email)) {
    errors.value.Email = "Veuillez fournir une adresse e-mail valide.";
    isValid = false;
  }

  // Submit if valid
  if (isValid) {
    addClient();
  }
};

// Reset form fields and errors
const resetForm = () => {
  client.value = {
    Nom: "",
    Prenom: "",
    Adresse: "",
    Telephone: "",
    Email: ""
  };
  Object.keys(errors.value).forEach((key) => {
    errors.value[key] = "";
  });
};

// Send data to backend
const addClient = () => {
  http
    .post("/client", client.value)
    .then(() => {
      router.push("/");
    })
    .catch((error) => {
      console.error("Erreur lors de l'ajout du client :", error);
    });
};

  // const produits = ref({});
    // http.get('/produits')
    // .then(res => { 
    //   produits.value = res.data.data;
    // })
    // .catch(error => {
    //  console.log("Erreur d'ajout",error) 
    // })

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
