const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Configuration pour react-native-vector-icons
config.resolver.assetExts.push('ttf');

// Add polyfills for Solana
config.resolver.alias = {
  ...config.resolver.alias,
  crypto: require.resolve('expo-crypto'),
  stream: require.resolve('readable-stream'),
  buffer: require.resolve('buffer'),
};

config.resolver.platforms = ['ios', 'android', 'native', 'web'];

module.exports = config;