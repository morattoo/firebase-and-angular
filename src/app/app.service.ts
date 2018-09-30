import { Injectable } from '@angular/core';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

import { Exercise } from './components/app.model';
import { config } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public exercises: AngularFirestoreCollection<Exercise>;
  private exerciseDoc: AngularFirestoreDocument<Exercise>;

  constructor(private db: AngularFirestore) {
    this.exercises = db.collection<Exercise>(config.collection_endpoint);
  }

  addExercise(exercise) {
    //Add the new exercise to the collection
    this.exercises.add(exercise);
  }

  updateExercise(id, update) {
    //Get the exercise document
    this.exerciseDoc = this.db.doc<Exercise>(`${config.collection_endpoint}/${id}`);
    this.exerciseDoc.update(update);
 } //updateExercise

  deleteExercise(id) {
    //Get the Exercise document
    this.exerciseDoc = this.db.doc<Exercise>(`${config.collection_endpoint}/${id}`);
    //Delete the document
    this.exerciseDoc.delete();
  } //deleteExercise
}
