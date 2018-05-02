import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { WorkoutsComponent } from './components/workouts/workouts.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

/* Bootstrap */
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SlickModule } from 'ngx-slick';
import { DragScrollModule } from 'ngx-drag-scroll';

/* Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule } from '@angular/material';

import { RouterModule, Routes } from '@angular/router';
import { WorkoutComponent } from './components/workout/workout.component';

const appRoutes: Routes = [
  { path: 'workouts', component: WorkoutsComponent },
  { path: 'workouts/:id',      component: WorkoutComponent },
  {
    path: 'exercises',
    component: ExercisesComponent
  },
  { path: '',
    redirectTo: '/workouts',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ExercisesComponent,
    WorkoutsComponent,
    WorkoutComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    DragScrollModule,
    SlickModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
