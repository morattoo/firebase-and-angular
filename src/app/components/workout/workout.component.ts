import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  host: {'class': 'workout'}
})

export class WorkoutComponent implements OnInit, AfterViewInit {
  @ViewChild('timer') timer;

  public workoutId: string;
  public workout: any;
  public dataTraining: any;
  public activeSlideIndex: number = 0;
  private countDown: any;

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
    this.itemDoc.valueChanges().subscribe(item => this.getDataItemTraining(item));
  }

  ngAfterViewInit() {
    console.log(this.timer);
  }

  log(event: number) {
     console.log(event);
  }

  getDataItemTraining($data) {
    this.dataTraining = $data.programme.training;
  }

  pauseWorkout(){
    this.countDown.pause();
  }

  stopWorkout() {
    this.countDown.stop();
  }

  playWorkout() {
    const trainingActive = this.dataTraining[this.activeSlideIndex];
    if(trainingActive) {
      this.countDown = new Timer();
      this.countDown.start({
        countdown: true,
        startValues: { seconds: trainingActive.duration}, 
        callback: this.startTimer()
      });  
    } else {
      this.trainingComplited();
    }  
  }

  startTimer() {
    
    const display = this.timer.nativeElement;
    display.innerHTML = this.countDown.getTimeValues().toString(['seconds']);

    this.countDown.addEventListener('secondsUpdated', function (e) {
      display.innerHTML = this.countDown.getTimeValues().toString(['seconds']);
    }.bind(this), false);

    this.countDown.addEventListener('targetAchieved', function (e) {
      display.innerHTML = 'yes!!';
      this.nextStep();
    }.bind(this), false);
  }

  nextStep():void {
    this.countDown.removeEventListener();
    this.activeSlideIndex = ++this.activeSlideIndex;
    this.playWorkout();
  }

  trainingComplited() {
    this.timer.nativeElement.innerHTML = "Session Complited";
  }
}

