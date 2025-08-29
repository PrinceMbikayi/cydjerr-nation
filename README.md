# CydJerr Nation - Application Mobile React Native

## Description

CydJerr Nation est une application mobile complète développée avec React Native et Expo, offrant une expérience utilisateur futuriste inspirée d'un launcher OS avec un design néomorphique et glassmorphism.

## Fonctionnalités

### 🎨 Design
- **Style néomorphique** avec ombres douces et effets métalliques
- **Glassmorphism** avec effets de transparence et backdrop-blur
- **Dégradés multicolores** rose-violet vers bleu-turquoise
- **Glow néon** pour les éléments actifs
- **Transitions fluides** avec animations ease-in-out

### 🏗️ Architecture
- **React Native** avec Expo SDK 53+
- **Redux Toolkit** pour la gestion d'état globale
- **React Navigation v6** pour la navigation
- **JavaScript pur** (pas de TypeScript)
- **StyleSheet natif** (pas de Tailwind CSS)

### 📱 Écrans et Composants

#### Écran d'accueil (HomeScreen)
- **Header Controls** : heure, batterie, notifications
- **Barre de recherche** avec effet glassmorphism
- **Carte centrale "CydJerr Nation"** avec boutons satellites
- **Grille d'univers** avec pagination horizontale (3 pages)
- **Indicateurs de pagination** avec glow néon

#### Navigation
- **Bottom Navigation Bar** avec 4 onglets :
  - 🏠 Accueil
  - 🔍 Recherche
  - 👤 Profil
  - ☰ Menu

#### Univers disponibles

**Page 1 - Principaux :**
- JoyJerr, SagaJerr (cartes majeures)
- MusicJerr, PhotoJerr, VideoJerr, SocialJerr
- NewsJerr, WeatherJerr, FitnessJerr, FoodJerr
- TravelJerr, ShopJerr

**Page 2 - Additionnels :**
- CloudJerr, DoctoJerr, EduJerr, FinanceJerr
- HomeJerr, PetJerr, GardenJerr, CarJerr
- SportJerr, ArtJerr, TechJerr

**Page 3 - Spécialisés :**
- CodJerr, LeaseJerr

## Installation et Démarrage

### Prérequis
- Node.js (version 16+)
- npm ou yarn
- Expo CLI
- Expo Go app (pour tester sur mobile)

### Installation
```bash
cd frontend
npm install
```

### Démarrage
```bash
npx expo start
```

### Options de test
- **Web** : Appuyez sur `w` dans le terminal
- **iOS Simulator** : Appuyez sur `i` dans le terminal
- **Android Emulator** : Appuyez sur `a` dans le terminal
- **Mobile physique** : Scannez le QR code avec Expo Go

## Structure du Projet

```
frontend/
├── components/           # Composants réutilisables
│   ├── HeaderControls.js
│   ├── SearchBar.js
│   ├── MainCard.js
│   ├── UniverseGrid.js
│   ├── PaginationDots.js
│   └── BottomNavBar.js
├── screens/             # Écrans de l'application
│   ├── HomeScreen.js
│   ├── SearchScreen.js
│   ├── ProfileScreen.js
│   └── MenuScreen.js
├── redux/               # Gestion d'état Redux
│   ├── store.js
│   ├── navigationSlice.js
│   ├── universesSlice.js
│   └── searchSlice.js
├── assets/              # Ressources (icônes, images)
├── App.js              # Point d'entrée principal
├── package.json        # Dépendances
└── README.md          # Documentation
```

## Technologies Utilisées

- **React Native** 0.79.5
- **Expo** ~53.0.20
- **Redux Toolkit** ^2.0.1
- **React Navigation** ^6.1.9
- **Expo Linear Gradient** ~13.0.2
- **React Native Vector Icons** ^10.0.3
- **React Native Reanimated** ~3.16.1

## Fonctionnalités Redux

### Navigation Slice
- Gestion de l'onglet actif
- Pagination horizontale (currentPage)
- Navigation entre les pages

### Universes Slice
- Liste des univers principaux, additionnels et spécialisés
- Sélection d'univers
- Données des icônes et couleurs

### Search Slice
- État de recherche actif/inactif
- Requête de recherche
- Historique des recherches
- Résultats de recherche

## Responsive Design

- **Mobile-first** : optimisé pour toutes tailles d'écran
- **Flexbox** : mise en page responsive
- **Dimensions API** : adaptation dynamique
- **Safe Area** : support des encoches iPhone

## Effets Visuels

### Glassmorphism
- Transparence avec `rgba(255, 255, 255, 0.15)`
- Bordures semi-transparentes
- Effet backdrop-blur simulé

### Néomorphisme
- Ombres intérieures et extérieures
- Dégradés subtils
- Effets de profondeur

### Glow Néon
- Couleur principale : `#4ECDC4`
- Ombres colorées avec `shadowColor`
- Effets de surbrillance pour les éléments actifs

## Performance

- **Animations natives** avec React Native Reanimated
- **Optimisation des rendus** avec Redux
- **Lazy loading** des composants
- **Gestion mémoire** optimisée

## Développement

### Scripts disponibles
- `npm start` : Démarre Expo
- `npm run android` : Lance sur Android
- `npm run ios` : Lance sur iOS
- `npm run web` : Lance sur web

### Debug
- **Expo DevTools** : Interface de debug
- **React DevTools** : Inspection des composants
- **Redux DevTools** : Monitoring de l'état

## Contribution

Pour contribuer au projet :
1. Fork le repository
2. Créez une branche feature
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

## Licence

Ce projet est sous licence MIT.