import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { SeriesComponent } from './components/series/series.component';

/* Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ExercisesComponent,
    SeriesComponent
  ],
  imports: [
    BrowserModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
