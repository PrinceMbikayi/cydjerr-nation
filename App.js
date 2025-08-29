// Polyfills pour React Native et Solana
import 'react-native-get-random-values';
import { Buffer } from 'buffer';
global.Buffer = Buffer;

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store, persistor } from './redux/store';
import AuthNavigator from './navigation/AuthNavigator';
import TabNavigator from './navigation/TabNavigator';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingScreen from './components/LoadingScreen';
import { selectAuth, checkAuthStatus } from './redux/userSlice';

// Import des écrans
import CydJerrNationScreen from './screens/CydJerrNationScreen';
import JoyJerrScreen from './screens/JoyJerrScreen';
import SagaJerrScreen from './screens/SagaJerrScreen';
import NewsJerrScreen from './screens/NewsJerrScreen';
import SpeakJerrScreen from './screens/SpeakJerr/SpeakJerrScreen';
import ChatScreen from './screens/SpeakJerr/ChatScreen';
import ChabJerrScreen from './screens/ChabJerrScreen';
import PiolJerrScreen from './screens/PiolJerrScreen';
import EvenJerrScreen from './screens/EvenJerrScreen';
import ShopJerrScreen from './screens/ShopJerrScreen';
import CapiJerrScreen from './screens/CapiJerrScreen';
import JobJerrScreen from './screens/JobJerrScreen';
import TeachJerrScreen from './screens/TeachJerrScreen';
import FundingJerrScreen from './screens/FundingJerrScreen';
import KidJerrScreen from './screens/KidJerrScreen';
import CloudJerrScreen from './screens/CloudJerrScreen';
import FileManagerScreen from './screens/FileManagerScreen';
import StoragePlansScreen from './screens/StoragePlansScreen';
import CloudSettingsScreen from './screens/CloudSettingsScreen';
import DoctoJerrScreen from './screens/DoctoJerrScreen';
import AvoJerrScreen from './screens/AvoJerrScreen';
import AssuJerrScreen from './screens/AssuJerrScreen';
import DomJerrScreen from './screens/DomJerrScreen';
import VagoJerrScreen from './screens/VagoJerrScreen';
import ImmoJerrScreen from './screens/ImmoJerrScreen';
import AppJerrScreen from './screens/AppJerrScreen';
import SmadJerrScreen from './screens/SmadJerrScreen';
import GameJerrScreen from './screens/GameJerrScreen';
import PicJerrScreen from './screens/PicJerrScreen';
import CodJerrScreen from './screens/CodJerrScreen';
import LeaseJerrScreen from './screens/LeaseJerrScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import EmailVerificationScreen from './screens/EmailVerificationScreen';
import VideoPlayerScreen from './screens/VideoPlayerScreen';
import VideoUploadScreen from './screens/VideoUploadScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

// Configuration React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
    mutations: {
      retry: 1,
      retryDelay: 1000,
    },
  },
});

// Stack Navigator pour Home avec CydJerrNation, JoyJerr, SagaJerr, NewsJerr, SpeekJerr et ChabJerr
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="CydJerrNation" component={CydJerrNationScreen} />
      <Stack.Screen name="JoyJerr" component={JoyJerrScreen} />
      <Stack.Screen name="SagaJerr" component={SagaJerrScreen} />
      <Stack.Screen name="NewsJerr" component={NewsJerrScreen} />
      <Stack.Screen name="SpeakJerr" component={SpeakJerrScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="ChabJerr" component={ChabJerrScreen} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} />
      <Stack.Screen name="VideoUpload" component={VideoUploadScreen} />
      <Stack.Screen name="PiolJerr" component={PiolJerrScreen} />
      <Stack.Screen name="EvenJerr" component={EvenJerrScreen} />
      <Stack.Screen name="ShopJerr" component={ShopJerrScreen} />
      <Stack.Screen name="CapiJerr" component={CapiJerrScreen} />
      <Stack.Screen name="JobJerr" component={JobJerrScreen} />
      <Stack.Screen name="TeachJerr" component={TeachJerrScreen} />
      <Stack.Screen name="FundingJerr" component={FundingJerrScreen} />
      <Stack.Screen name="KidJerr" component={KidJerrScreen} />
      <Stack.Screen name="CloudJerr" component={CloudJerrScreen} />
      <Stack.Screen name="FileManager" component={FileManagerScreen} />
      <Stack.Screen name="StoragePlans" component={StoragePlansScreen} />
      <Stack.Screen name="CloudSettings" component={CloudSettingsScreen} />
      <Stack.Screen name="DoctoJerr" component={DoctoJerrScreen} />
      <Stack.Screen name="AvoJerr" component={AvoJerrScreen} />
      <Stack.Screen name="AssuJerr" component={AssuJerrScreen} />
        <Stack.Screen name="DomJerr" component={DomJerrScreen} />
        <Stack.Screen name="VagoJerr" component={VagoJerrScreen} />
      <Stack.Screen name="ImmoJerr" component={ImmoJerrScreen} />
      <Stack.Screen name="AppJerr" component={AppJerrScreen} />
      <Stack.Screen name="SmadJerr" component={SmadJerrScreen} />
      <Stack.Screen name="GameJerr" component={GameJerrScreen} />
      <Stack.Screen name="PicJerr" component={PicJerrScreen} />
      <Stack.Screen name="CodJerr" component={CodJerrScreen} />
      <Stack.Screen name="LeaseJerr" component={LeaseJerrScreen} />
    </Stack.Navigator>
  );
}



// Stack Navigator principal pour l'onboarding
function OnboardingStack() {
  const { justRegistered } = useSelector(selectAuth);
  
  // Déterminer la route initiale selon l'état justRegistered
  const getInitialRouteName = () => {
    if (justRegistered) {
      return 'EmailVerification';
    }
    return 'Onboarding';
  };
  
  return (
    <Stack.Navigator 
      initialRouteName={getInitialRouteName()}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="EmailVerification" component={EmailVerificationScreen} />
    </Stack.Navigator>
  );
}

// Composant qui gère la logique d'authentification
function AppContent() {
  const dispatch = useDispatch();
  const { isAuthenticated, isLoading } = useSelector(selectAuth);

  // Vérifier le statut d'authentification au démarrage
  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  // Afficher l'écran de chargement pendant la vérification
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        // Utilisateur connecté - Afficher l'application principale
        <TabNavigator />
      ) : (
        // Utilisateur non connecté - Afficher onboarding et auth
        <OnboardingStack />
      )}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <PersistGate loading={<LoadingScreen />} persistor={persistor}>
              <AppContent />
            </PersistGate>
          </Provider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
}
