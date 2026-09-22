# Exercice Immersion Facilitée


## Expression du Besoin

### Feature : Récupération des villes d'un département

```
En tant que visiteur,
Afin de m'aider à retrouver des villes plus facilement,
Je peux obtenir la liste des villes pour un département donné.
```

Tout les scénarios utilisent la liste de ville standard suivante:


```
  | Ville     | Département |
  | ---       | ---         |
  | Cergy     | 95          |
  | Beauvais  | 60          |
  | Pontoise  | 95          |
```

> Il y a un fichier `cities.ts` avec les données

#### Scénario - Récupération des villes du 95:

- Sachant qu'il y a la liste de villes standard.
- Quand on veut récupèrer les villes du **_95_**.
- Alors on retourne les villes suivantes:
  ```
  | Ville     |
  |  ---      |
  | Cergy     |
  | Pontoise  |
  ```

---

#### Scénario - Récupération des villes du 60:

- Sachant qu'il y a la liste de villes standard.
- Quand on veut récupèrer les villes du **_60_**.
- Alors on retourne les villes suivantes:
  ```
  | Ville     |
  |  ---      |
  | Beauvais  |
  ```

---

#### Scénario - Récupération des villes du 75:

- Sachant qu'il y a la liste de villes standard.
- Quand on veut récupèrer les villes du **_75_**.
- Alors on ne retourne pas de villes.
- Et on a une notification d'erreur qui indique:
  > Il n'y a pas de villes dans le département 75.

---
---

## Conditions de l'exercice

- Ce qui compte c'est ton cheminement intellectuel
  - Pas de choix tech prédéfini
  - Pas de pattern de code prédéfini
  - Pas de méthodologie prédéfinie
  - Pas d'outillage imposé
  - Pas d'a priori sur le moyen de prouver le fonctionnement du besoin (IHM, tests, console...)
  - On a posé un starter mais tu peux le modifier si tu n'es pas à l'aise avec. Si tu as ton propre starter que tu peux monter rapidement avec tes choix technologiques, fais toi plaisir.
  - Tu es libre de consulter ce que tu veux (web, doc, l'équipe, stackoverflow, github...)
- Il n'est pas nécéssaire de terminer l'exercice
- Fais comme si tu étais déjà dans l'équipe
- Tu peux nous poser des questions, des conseils...
- L'exercice démarre quand tu es prêt

## Objectifs de l'exercice par priorité

1. Make it work
2. Make it well
3. Make it fast

## Fonctionnement du starter

Le starter utilise **TypeScript 7**, **Vitest** pour les tests et **Node.js 24**.
Les versions de TypeScript et Vitest sont fixées dans `package.json` et installées
localement : aucune installation globale de ces outils n'est nécessaire.

### Installer le projet

Utiliser Node.js 24 (`nvm use` si nvm est installé), puis installer les dépendances avec npm :

```sh
npm install
```

Le fichier `package-lock.json` est versionné. Pour reproduire exactement les
versions verrouillées, utiliser `npm ci`. Après une modification des dépendances,
versionner également la mise à jour du lockfile.

### Commandes

| Action | Commande |
| --- | --- |
| Lancer `exercice.ts` après compilation | `npm run ts` |
| Lancer `exercice.js` | `npm run js` |
| Compiler les sources TS dans `dist/` | `npm run build` |
| Vérifier les types, tests compris | `npm run typecheck` |
| Lancer les tests une fois puis quitter | `npm test` |
| Relancer les tests à chaque modification | `npm run test:watch` |
| Vérifier les types puis lancer les tests | `npm run check` |

**Le starter contient volontairement une assertion qui échoue et une qui réussit.**
Au départ, `test` et `check` se terminent donc avec un code d'échec : c'est attendu
pour cet exercice. Les assertions sont à travailler par le candidat.

Les tests utilisent des imports explicites depuis `vitest`. Le projet utilise les
modules ESM ; dans les sources TypeScript, les imports relatifs peuvent utiliser
l'extension `.ts` (par exemple `import { cities } from './cities.ts'`). TypeScript
les convertit en `.js` lors de la compilation. Les tests ne sont pas compilés dans
`dist/`.