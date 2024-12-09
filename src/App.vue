<template>
  <header>
    <!-- ajout du lien ajouter dans la page d'acceuil  -->
<!-- <RouterLink to="/ajout-produit">ajouter</RouterLink> -->

 <!-- <RouterLink to="/ajout-produit">commande</RouterLink> -->
  </header> 

  <!-- Barre de navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div class="container-fluid">
          <Routerlink class="navbar-brand" to="#">Menu</Routerlink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">

              <RouterLink type="button" to="/"> Acceuil</RouterLink>
              <Routerlink type="button" to="@/views/ListeClient">Listes des Clients</Routerlink>
              <Routerlink type="button" to="/">listes des Produits</Routerlink>
            </div>
          </div>
        </div>
      </nav>
  <!-- <div>
    <p> feffefeffefefededfef</p>
    <form> -->
      <!-- bouton pour aller vers -->
      <!-- <button @click="allerProduit"> Ajouter</button>
    </form>
  </div> -->



  <!-- pas touche  -->
  <RouterView />
</template>



<script setup>
    import { RouterLink, RouterView, useRoute, useRouter} from 'vue-router'

    const route = useRoute()
    // communication avec le back-end
    const router = useRouter()

    // fonction derriere le bouton
    const allerProduit = () => {
        router.push('/ajout-produit')
    }

     // fonction derriere le bouton
    const allerCommande = () => {
      router.push('/ajout-commande')
    }

</script>



<style scoped>


header {
  line-height: 1.5;
  max-height: 100vh;
}
h1{
  color : green;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.navbar {
  background-color: #007bff; /* Bleu primaire */
  color: white; /* Couleur du texte */
  padding: 10px 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Ombre douce */
  border-radius: 5px; /* Coins arrondis */
}

.navbar-brand {
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-decoration: none; /* Supprime les soulignements */
  transition: color 0.3s ease, transform 0.3s ease;
}


.container-fluid {
  display: flex;
  justify-content: space-between; /* Espacement entre les éléments */
  align-items: center; /* Centrage vertical des éléments */
}

.shadow-sm {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Ombre discrète */
}

.bg-primary {
  background-color: #007bff !important; /* Assure la priorité de la couleur de fond */
}


.navbar-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; /* Espacement entre les liens */
  background-color: #007bff; /* Couleur de fond */
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.navbar-nav a {
  text-decoration: none; /* Supprimer les soulignements */
  color: white; /* Couleur du texte */
  font-size: 16px;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.navbar-nav a:hover {
  background-color: #00b34b; /* Couleur de fond au survol */
  color: #fff; /* Couleur du texte au survol */
  cursor: pointer;
}

.navbar-nav a.active {
  background-color: #0056b3; /* Couleur spécifique pour le lien actif */
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
