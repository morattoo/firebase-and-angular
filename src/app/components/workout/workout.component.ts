import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  host: {'class': 'workout'}
})

export class WorkoutComponent implements OnInit {
  
  public workoutId: string;
  public workout: any;

  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private afs: AngularFirestore
  ) { 
    this.workoutId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.itemDoc = this.afs.doc<any>('workouts/'+ this.workoutId);
    this.item = this.itemDoc.valueChanges();
  }

  log(event: number) {
     console.log(event);
  }

}
