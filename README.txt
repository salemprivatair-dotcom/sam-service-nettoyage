SAM Service Nettoyage — V9

NOUVEAU
- Formulaire de devis connecté à Supabase.
- Les demandes sont envoyées dans public.demandes_devis.
- Message de confirmation et gestion d'erreur intégrés.
- La commune est enregistrée au début du champ message afin de rester compatible avec la table déjà créée.
- Le formulaire mailto a été supprimé.

TEST
1. Ouvrir ce dossier V9 dans VS Code.
2. Lancer index.html avec Five Server.
3. Remplir et envoyer le formulaire.
4. Dans Supabase > Table Editor > demandes_devis, vérifier qu'une nouvelle ligne apparaît.

SÉCURITÉ
- Seule la clé publique/publishable est utilisée dans le navigateur.
- Ne jamais ajouter de service_role key ou secret key au site.
- Conserver RLS activé.
