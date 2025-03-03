import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "friendlychat-61629", appId: "1:774683896625:web:789aaf05dc085df766de10", storageBucket: "friendlychat-61629.firebasestorage.app", apiKey: "AIzaSyAY1Swai7Ag8g_ha2V85BMzGAenLM-PqHg", authDomain: "friendlychat-61629.firebaseapp.com", messagingSenderId: "774683896625" })), provideFirestore(() => getFirestore())]
};
