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
  test: any;

  constructor( private afs: AngularFirestore) { }

  ngOnInit() {
    this.workoutCol = this.afs.collection('workouts');
    this.workouts = this.workoutCol.valueChanges();

    this.afs.collection('workouts').ref.get().then(function(querySnapshot) {

      querySnapshot.forEach(function(doc) {
          console.log(doc.id, " => ", doc.data());
      });

    });
  }
}
