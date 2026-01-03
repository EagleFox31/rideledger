# Cadrage détaillé des règles métiers

Ce document fige les règles de calcul pour la gestion du budget transport. Il sert de référence pour le moteur de calcul, les tests et l’API.

## 1) Périmètre

- Deux chauffeurs :
  - **Chauffeur Jour/Nuit** (trajets matin + soir).
  - **Chauffeur Soir Tard** (trajets soir après 19h).
- Un budget mensuel global à suivre.
- Calculs temps réel, projections fin de période.

## 2) Définitions des périodes

- **Mois** : 1er au dernier jour du mois (calendrier).
- **Semaine** : lundi à vendredi.
  - Les courses du week-end ne sont pas comptées pour le chauffeur soir tard (sauf décision future).

## 3) Chauffeur Jour/Nuit

### Rémunération de base
- **Montant mensuel fixe** : 90 000 XAF.
- Période de calcul : mois civil.

### Pénalités
- **Matin manqué** : -2 000 XAF par jour manqué.
- **Soir manqué** : -2 500 XAF par jour manqué.
- Pénalité appliquée si :
  - le chauffeur **ne vient pas**, ou
  - tu pars **plus tôt sans lui**.
- Pas de pénalité si :
  - il vient en retard mais il vient.

### Calcul final (mensuel)
- `montant_final = 90_000 - (nb_matin_manqués * 2_000) - (nb_soir_manqués * 2_500)`

## 4) Chauffeur Soir Tard

### Rémunération de base
- **Paiement par course** : 3 000 XAF par course.
- **Forfait indicatif** : 15 000 XAF par semaine (équivalent à 5 courses).
- Période de calcul : semaine (lundi à vendredi).

### Déclenchement des courses
- Une course est comptée quand :
  - tu rentres **après 19h**, et
  - il vient te chercher.

### Pénalités
- **Soir manqué** : -3 000 XAF par course manquée.
- Pénalité appliquée si :
  - il ne vient pas, ou
  - tu pars plus tôt sans lui.
- Pas de pénalité si :
  - il vient en retard mais il vient.

### Calcul final (hebdomadaire)
- `montant_semaine = (nb_courses_effectuées * 3_000) - (nb_courses_manquées * 3_000)`
- Projection mensuelle : somme des semaines du mois.

## 5) Budget global

- **Budget mensuel cible** : 100 000 XAF.
- Total dépenses mensuelles =
  - montant mensuel chauffeur jour/nuit +
  - somme des semaines chauffeur soir tard.
- Alerte : dépasser 100 000 XAF.

## 6) Cas limites et décisions

- Si une course est manquée et compensée par un autre chauffeur, la pénalité reste appliquée (règle actuelle).
- Si une journée n’a pas de trajet (vacances), aucun montant ni pénalité ne sont appliqués.
- Les avances ou paiements exceptionnels seront saisis comme **ajustements manuels** (à prévoir côté admin).

## 7) Données minimales à saisir

- Date et type de trajet : matin / soir / soir tard.
- Statut : fait / manqué.
- Heure (pour déclencher “soir tard” > 19h).
- Commentaire optionnel (ex : “parti plus tôt”).

## 8) Tests métier à prévoir (exemples)

- Mois sans absence : 90 000 XAF.
- 2 matins manqués + 1 soir manqué : 90 000 - (2*2 000) - (1*2 500) = 83 500 XAF.
- Semaine soir tard : 4 courses faites, 1 manquée = (4*3 000) - (1*3 000) = 9 000 XAF.
- Projection mensuelle soir tard : somme des 4 ou 5 semaines du mois.

---

Ce document doit être validé avant développement du moteur de calcul.
