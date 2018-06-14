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
  public activeSlideIndex = 0;

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

  playWorkout() {
    const itemActive = 0;
    const trainingActive = this.dataTraining[itemActive];
    const display = this.timer.nativeElement;

    const timer = new Timer();

    timer.start({
      countdown: true,
      startValues: { seconds: trainingActive.duration}, 
      callback: this.startTimer(timer)
    });     
  }

  startTimer($timer) {
    const display = this.timer.nativeElement;

    display.innerHTML = $timer.getTimeValues().toString(['seconds']);

    $timer.addEventListener('secondsUpdated', function (e) {
      display.innerHTML = $timer.getTimeValues().toString(['seconds']);
    });

    $timer.addEventListener('targetAchieved', function (e) {
      display.innerHTML = 'yes!!';
      this.nextStep(0);
    }.bind(this), false);
  }

  nextStep($currentTraining):void {
    this.activeSlideIndex = $currentTraining + 1;
  }
}

