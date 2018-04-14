import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


interface Workout {
  description: string,
  nameDisplay: string,
  programme: any,
  type: string,
  update: Date
}

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})

export class SeriesComponent implements OnInit {

  workoutCol: AngularFirestoreCollection<Workout>;
  workouts: Observable<Workout[]>;
  allWorkouts: any;

  constructor( private afs: AngularFirestore) { }

  ngOnInit() {
    this.workoutCol = this.afs.collection('workouts');
    this.workouts = this.workoutCol.valueChanges();

    this.allWorkouts = this.getAllData(function(allCompleteWorkouts) {
      console.log(allCompleteWorkouts);
      return allCompleteWorkouts;
    });    
  }

  getAllData(returnAll) {
    let allWorkouts = [];
    let allExercises = {};

    this.callFireStoreArray('workouts', (response) => {
      allWorkouts = response;

      this.callFireStoreObjects('exercises', (response) => {
        allExercises = response;

        allWorkouts.forEach(function(workout, index) {
          
          workout.programme.training.forEach(function(training, index){
            workout.programme.training[index].description = allExercises[training.item];
          })
        });

        returnAll(allWorkouts);
      });

    });
  }


  callFireStoreArray($path, success) {
    let allData = [];
    this.afs.collection($path).ref.get().then((query) => {
      query.forEach(function(doc) {
          let element = {};
          element = doc.data();
          element['id'] = doc.id;
          allData.push(element);
      });

        success(allData);
    });
  }

  callFireStoreObjects($path, success) {
    let allData = {};
    this.afs.collection($path).ref.get().then((query) => {
      query.forEach(function(doc) {
          allData[doc.id] = doc.data();
      });

        success(allData);
    });
  }
}
