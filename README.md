# RideLedger

Gestion premium du budget transport, avec suivi temps réel des chauffeurs, pénalités automatisées et projections de fin de période.

## Objectif
- Donner au chauffeur jour/nuit sa projection mensuelle en temps réel.
- Donner au chauffeur soir tard sa projection hebdomadaire et mensuelle.
- Donner à l’admin une vue claire du budget mensuel (plafond 100k XAF).

## Fonctionnalités clés
- Suivi des courses (matin/soir/soir tard) avec statut fait/manqué.
- Pénalités automatiques selon règles validées.
- Projections de fin de période (semaine/mois).
- Dashboard budget + alertes de dépassement.
- Multi-profils : admin, chauffeur jour/nuit, chauffeur soir tard.

## Résumé des règles métier
- Chauffeur Jour/Nuit : base 90 000 XAF / mois.
- Pénalités : matin manqué -2 000 XAF, soir manqué -2 500 XAF.
- Chauffeur Soir Tard : 3 000 XAF par course, semaine = lundi à vendredi.
- Pénalité soir tard manqué : -3 000 XAF.
- Pénalité seulement si le chauffeur ne vient pas ou si tu pars plus tôt sans lui.

## Stack proposée
- Front : React + Vite + TypeScript + PWA + Tailwind
- Back : NestJS + PostgreSQL + Prisma
- Temps réel : WebSocket ou SSE
- Auth : JWT + RBAC

## Architecture (résumé)
- Domaine POO + Strategy pour les calculs de paie.
- Repository pour l’accès aux données.
- Observer pour les mises à jour temps réel.

## Documentation
- Règles métier : `docs/CADRAGE_REGLES_METIER.md`
- Interfaces front : `docs/INTERFACES_FRONTEND.md`
- Thème UI : `docs/THEME_UI.md`

## Démarrage (à venir)
- Le bootstrap du projet sera ajouté après validation du périmètre.

## Roadmap
- [ ] Squelette backend + frontend
- [ ] Moteur de calcul + tests
- [ ] Dashboard admin
- [ ] Profils chauffeurs
- [ ] Temps réel
- [ ] Déploiement (Vercel)

## Licence
Propriétaire.
