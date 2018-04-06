import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SeriesService {

  seriesList: Observable<any>;
  
  constructor( private firebase: AngularFirestore) { }

  getSeries() {
    return this.seriesList = this.firebase.collection('series').valueChanges();
  }

  getExercisesByID($seriesList: any) {
    // const exercises = [];
    // return this.firebase.collection('posts')
    //             .where('categories.cats', '==', true)
    //             .get()
    //             .then(() => {
    //                 // ...
    //             });

  }

}
