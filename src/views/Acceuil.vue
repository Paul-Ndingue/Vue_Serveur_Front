

<template>
    <div class="home-page">
      <h1 class="text-center mt-4">Bienvenue sur la gestion du magasin </h1>
  
      <div class="image-container">
        <!-- Image dynamique -->
        <img src="/public/image1.jpg" alt="Image dynamique" />
        <img src="/public/image2.jpg" alt="Image dynamique" />
        <img src="/public/image1.jpg" alt="Image dynamique" />
        <img src="/public/image2.jpg" alt="Image dynamique" />
        <img src="/public/image2.jpg" alt="Image dynamique" />
        <img src="/public/image1.jpg" alt="Image dynamique" />
        <img src="/public/image2.jpg" alt="Image dynamique" />
      </div>
  
      <!-- Liens de navigation -->
      <div class="container text-center mt-5">
        <RouterLink to="/ajout-produit">
          <button class="btn btn-success btn-lg mx-2">Ajouter un Produit</button>
        </RouterLink>
  
        <RouterLink to="/ajout-commande">
          <button class="btn btn-info btn-lg mx-2">Ajouter une Commande</button>
        </RouterLink>

        <RouterLink to="/ajout-client">
          <button class="btn btn-info btn-lg mx-2">Ajouter un Client</button>
        </RouterLink>
      </div>
    </div>
  </template>
  



<script setup>
  import { RouterLink } from "vue-router";
</script>


<style scoped>
/* Style personnalisé pour la page d'accueil */
.home-page {
  background-color: #bdc9c6; /* Couleur de fond douce */
  min-height: 100vh; /* Prend toute la hauteur de l'écran */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

/* Titre principal */
h1 {
  color: #343a40;
  font-weight: bold;
}

/* Navbar */
.navbar {
  border-radius: 8px;
}

/* Boutons */
button {
  border-radius: 5px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Conteneur centré */
.container {
  margin-top: 2rem;
}


/* Conteneur des images */
.image-container {
  display: flex;
  flex-wrap: wrap; /* Permet d'aller à la ligne si nécessaire */
  justify-content: center; /* Centrage horizontal */
  gap: 15px; /* Espacement uniforme entre les images */
  padding: 20px;
  background-color: #f9f9f9; /* Couleur de fond légère */
  border-radius: 10px; /* Coins arrondis */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Ombre douce */
  max-width: 1000px; /* Largeur maximale du conteneur */
  margin: 0 auto; /* Centrage sur la page */
}

/* Style des images */
.image-container img {
  width: calc(25% - 15px); /* Taille des images (responsive, 4 par ligne) */
  max-width: 200px; /* Taille maximale */
  height: auto; /* Conserve le ratio de l'image */
  border-radius: 10px; /* Coins arrondis */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Animations */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Ombre discrète */
}

/* Effet au survol */
.image-container img:hover {
  transform: scale(1.1); /* Agrandissement léger */
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2); /* Ombre plus marquée */
  cursor: pointer; /* Changement de curseur */
}

/* Style responsive pour les petits écrans */
@media (max-width: 768px) {
  .image-container img {
    width: calc(50% - 15px); /* 2 images par ligne */
  }
}

@media (max-width: 480px) {
  .image-container img {
    width: 100%; /* Une seule image par ligne */
  }
}
</style>
