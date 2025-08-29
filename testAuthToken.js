// Script de test pour vérifier le token d'authentification
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_BASE_URL = 'http://192.168.1.68:4000/api/v1';

const STORAGE_KEYS = {
  ACCESS_TOKEN: '@cydjerr_access_token',
  REFRESH_TOKEN: '@cydjerr_refresh_token',
  USER_DATA: '@cydjerr_user_data'
};

async function testAuthToken() {
  try {
    console.log('🔍 Vérification du token dans AsyncStorage...');
    
    // Vérifier si un token existe
    const accessToken = await AsyncStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    const refreshToken = await AsyncStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
    const userData = await AsyncStorage.getItem(STORAGE_KEYS.USER_DATA);
    
    console.log('📱 Données stockées:');
    console.log('  - Access Token:', accessToken ? `${accessToken.substring(0, 20)}...` : 'Aucun');
    console.log('  - Refresh Token:', refreshToken ? `${refreshToken.substring(0, 20)}...` : 'Aucun');
    console.log('  - User Data:', userData ? JSON.parse(userData) : 'Aucune');
    
    if (!accessToken) {
      console.log('❌ Aucun token trouvé. L\'utilisateur doit se connecter.');
      return;
    }
    
    // Tester la requête /auth/me avec le token
    console.log('\n🚀 Test de la requête /auth/me...');
    
    try {
      const response = await axios.get(`${API_BASE_URL}/auth/me`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });
      
      console.log('✅ Requête /auth/me réussie:');
      console.log('  - Status:', response.status);
      console.log('  - User:', response.data.user);
      
    } catch (error) {
      console.log('❌ Erreur lors de la requête /auth/me:');
      console.log('  - Status:', error.response?.status);
      console.log('  - Message:', error.response?.data?.message || error.message);
      console.log('  - Data:', error.response?.data);
      
      // Si le token est expiré, essayer de le rafraîchir
      if (error.response?.status === 401 && refreshToken) {
        console.log('\n🔄 Tentative de rafraîchissement du token...');
        
        try {
          const refreshResponse = await axios.post(`${API_BASE_URL}/auth/refresh-token`, {
            refreshToken
          });
          
          console.log('✅ Token rafraîchi avec succès:');
          console.log('  - Nouveau Access Token:', refreshResponse.data.accessToken?.substring(0, 20) + '...');
          
          // Sauvegarder le nouveau token
          await AsyncStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, refreshResponse.data.accessToken);
          if (refreshResponse.data.refreshToken) {
            await AsyncStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshResponse.data.refreshToken);
          }
          
          // Réessayer /auth/me avec le nouveau token
          const retryResponse = await axios.get(`${API_BASE_URL}/auth/me`, {
            headers: {
              'Authorization': `Bearer ${refreshResponse.data.accessToken}`,
              'Content-Type': 'application/json'
            }
          });
          
          console.log('✅ Requête /auth/me réussie après rafraîchissement:');
          console.log('  - User:', retryResponse.data.user);
          
        } catch (refreshError) {
          console.log('❌ Échec du rafraîchissement du token:');
          console.log('  - Status:', refreshError.response?.status);
          console.log('  - Message:', refreshError.response?.data?.message || refreshError.message);
          
          // Nettoyer les tokens invalides
          await AsyncStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
          await AsyncStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
          await AsyncStorage.removeItem(STORAGE_KEYS.USER_DATA);
          
          console.log('🧹 Tokens nettoyés. L\'utilisateur doit se reconnecter.');
        }
      }
    }
    
  } catch (error) {
    console.error('❌ Erreur générale:', error.message);
  }
}

// Exécuter le test
testAuthToken();