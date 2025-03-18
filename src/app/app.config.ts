import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Registers app routes.
    provideAnimations(), // Enables Angular animations.
    provideFirebaseApp(() => initializeApp(environment.firebase)), // Initializes Firebase.
    provideFirestore(() => getFirestore()) // Configures Firestore.
  ]
};
/*
provideFirebaseApp() - Initializes Firebase using the settings from environment.ts.
provideFirestore() - Makes Firestore available for database operations. 
 */