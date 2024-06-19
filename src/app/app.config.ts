import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"comsy-app","appId":"1:111082329096:web:dba1163ff7a302b971edbd","databaseURL":"https://comsy-app-default-rtdb.firebaseio.com","storageBucket":"comsy-app.appspot.com","apiKey":"AIzaSyDJcPj3MnsCtZnFU6dDS4-vTMMtUbb1ZPM","authDomain":"comsy-app.firebaseapp.com","messagingSenderId":"111082329096","measurementId":"G-GHML1B4NCF"})), provideDatabase(() => getDatabase())]
};
