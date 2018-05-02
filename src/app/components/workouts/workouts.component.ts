import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

interface Workout {
  description: string,
  nameDisplay: string,
  programme: any,
  type: string,
  update: Date
}

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html'
})

export class WorkoutsComponent implements OnInit {

  public allWorkouts: Observable<Workout>;
  public slideConfig = {'slidesToShow': 4, 'slidesToScroll': 4};

  constructor( private afs: AngularFirestore) { }

  ngOnInit() {
     this.getAllData((allCompleteWorkouts) => {
      console.log(allCompleteWorkouts);
      this.allWorkouts = allCompleteWorkouts;
    });    
  }

  getAllData(returnWorkout: any) {
    let workouts = [];
    let exercise = {};

    this.callFireStoreArray('workouts', (response) => {
      workouts = response;

      this.callFireStoreObjects('exercises', (response) => {
        exercise = response;

        workouts.forEach(function(workout, index) {
          
          workout.programme.training.forEach(function(training, index){
            workout.programme.training[index].exercise = exercise[training.item];
          })
        });

        returnWorkout(workouts);
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
  
  afterChange($e: any) {
    console.log('afterChange', $e);
  }
}

  
