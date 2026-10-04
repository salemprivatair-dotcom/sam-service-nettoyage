# Préparation Supabase & production

La V6 corrige d'abord l'affichage des cartes services.

Étape suivante :
1. créer le projet Supabase ;
2. créer une table `devis` pour les demandes ;
3. activer RLS et n'autoriser que l'insertion publique des champs du formulaire ;
4. remplacer le formulaire `mailto:` par un envoi Supabase sécurisé ;
5. stocker l'URL publique et la clé anon via la configuration du déploiement — jamais la clé `service_role` dans le navigateur ;
6. ajouter anti-spam / validation et une page de confirmation ;
7. compléter mentions légales et confidentialité ;
8. tester mobile, formulaire, téléphone, e-mail, SEO et performances ;
9. connecter domaine + HTTPS puis déployer en production.

Aucune clé Supabase n'est incluse dans ce ZIP.
