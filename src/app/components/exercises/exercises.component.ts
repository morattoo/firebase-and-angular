import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  public exercises: Observable<any[]>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.exercises = this.afs.collection('/exercises').valueChanges();
  }

}
