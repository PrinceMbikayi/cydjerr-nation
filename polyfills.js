// Polyfills globaux pour React Native et Solana
import 'react-native-get-random-values';
import { Buffer } from 'buffer';

// Définir Buffer globalement
if (typeof global.Buffer === 'undefined') {
  global.Buffer = Buffer;
}

// Polyfill pour crypto si nécessaire
if (typeof global.crypto === 'undefined') {
  global.crypto = require('expo-crypto');
}

console.log('✅ Polyfills Solana chargés avec succès');