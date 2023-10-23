import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { initializeApp } from "firebase/app";  
import CartProvider from './context/cart.provider.jsx';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN, 
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

initializeApp(firebaseConfig);  

const root = document.getElementById('root');
const reactRoot = createRoot(root); 
reactRoot.render(
  <CartProvider>
    <App />
  </CartProvider>
);
