import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Acceuil from '@/views/Acceuil.vue'
import AjoutProduit from '@/views/AjoutProduit.vue'
import AjoutCommande from '@/views/AjoutCommande.vue'
import AjoutClient from '@/views/AjoutClient.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // page d'acceuil toujours /
      path: '/',
      name: 'home',
      component: Acceuil,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      // ici c'est la route de ma page ajout produit
      path: '/ajout-produit',
      name: 'AjouterProduit',
      component: AjoutProduit
     },

    {
      // ici c'est la route de ma page ajout commande
      path: '/ajout-commande',
      name: 'AjouterCommande',
      component: AjoutCommande
    },

    {
       // ici c'est la route de ma page ajout client
      path:'/ajout-client',
      name: 'AjouterClient',
      component: AjoutClient
    },
  ],
})

export default router
