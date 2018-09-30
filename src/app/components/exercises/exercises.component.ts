import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Exercise } from '../app.model';
import { config } from '../../app.config';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  public exercises: Observable<any[]>;

  constructor(private db: AngularFirestore, private AppService: AppService) { 
  }

  ngOnInit() {

    this.exercises = this.db.collection(config.collection_endpoint).get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
      });
  });

  }
}
