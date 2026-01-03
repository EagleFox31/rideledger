# Interfaces Frontend

Ce document liste le nombre d’interfaces par profil et les interfaces multiprofil, avec le contenu détaillé de chaque écran.

## 1) Récapitulatif du nombre d’interfaces

- **Admin (toi)** : 4 interfaces
- **Chauffeur Jour/Nuit** : 2 interfaces
- **Chauffeur Soir Tard** : 2 interfaces
- **Multiprofil (partagées)** : 3 interfaces

---

## 2) Interfaces par profil

### Admin (4)

1) **Tableau de bord (mensuel)**
- Résumé budget mensuel : plafond 100k, dépense actuelle, reste, dépassement éventuel
- Carte “Chauffeur Jour/Nuit” : montant actuel, pénalités cumulées, projection fin de mois
- Carte “Chauffeur Soir Tard” : total semaine en cours, total mois en cours, projection fin de mois
- Graphique simple (barres/ligne) : évolution semaine/mois
- Alertes : dépassement budget, anomalies (ex : trop de pénalités)

2) **Gestion des courses (saisie quotidienne)**
- Formulaire “Nouvelle course” : date, type (matin/soir/soir tard), statut (fait/manqué), heure, commentaire
- Liste des courses du jour/semaine : tri, filtre par chauffeur/type
- Actions rapides : marquer “manqué”, “fait”, “parti plus tôt”
- Totaux en bas : pénalités du jour, total du jour

3) **Chauffeurs & règles**
- Fiche Chauffeur Jour/Nuit : base mensuelle, pénalités (matin/soir), statut actif
- Fiche Chauffeur Soir Tard : prix course, forfait indicatif, pénalité manqué
- Paramètres période : semaine = lundi-vendredi, seuil “soir tard” = 19h
- Historique des changements de règles (optionnel)

4) **Budget & rapports**
- Vue mensuelle détaillée : jours, pénalités, montants
- Comparatif budget vs dépenses
- Export (PDF/CSV) des courses/paiements
- Ajustements manuels (bonus, avances, corrections)

---

### Chauffeur Jour/Nuit (2)

1) **Tableau de bord personnel**
- Montant actuel (mois en cours)
- Pénalités cumulées (matin/soir séparées)
- Projection fin de mois
- Mini calendrier des absences/pénalités

2) **Historique & détails**
- Liste des courses (matin/soir) avec statut
- Détails d’une journée (pénalité, commentaire)
- Filtre par semaine/mois

---

### Chauffeur Soir Tard (2)

1) **Tableau de bord personnel**
- Total semaine en cours
- Nombre de courses effectuées/manquées
- Projection fin de semaine + projection fin de mois
- Indicateur “après 19h”

2) **Historique & détails**
- Liste des courses du soir tard
- Détails d’une course (heure, statut, pénalité)
- Filtre par semaine/mois

---

## 3) Interfaces multiprofil (3)

1) **Authentification**
- Connexion (téléphone/email + mot de passe)
- Sélection du profil si multi-rôle (admin/driver)
- Mot de passe oublié

2) **Notifications & temps réel**
- Flux des mises à jour (nouvelle course, pénalité appliquée, total mis à jour)
- Badge de statut “calcul en temps réel”

3) **Paramètres du compte**
- Profil utilisateur (nom, téléphone)
- Langue/format monétaire
- Déconnexion
