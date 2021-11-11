import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderModule } from './shared/components/header/header.module';
import { NotasFormModule } from './shared/components/notas-form/notas-form.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    NotasFormModule,
    AngularFireModule.initializeApp({
      projectId: 'test-aplazo',
      appId: '1:40262668710:web:5cb675b032e75c698aff67',
      databaseURL: 'https://test-aplazo-default-rtdb.firebaseio.com',
      storageBucket: 'test-aplazo.appspot.com',
      locationId: 'northamerica-northeast1',
      apiKey: 'AIzaSyDc5RKUOymcNqbXOd7DrMJkDBk4iJRFO0Q',
      authDomain: 'test-aplazo.firebaseapp.com',
      messagingSenderId: '40262668710',
      measurementId: 'G-EEC94LSD5Y',
    }),
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],
})
export class AppModule {}
