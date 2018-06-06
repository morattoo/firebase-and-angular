import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  host: {'class': 'workout'}
})

export class WorkoutComponent implements OnInit {
  
  public workoutId: string;
  public workout: any;
  public noPause: boolean = true;

  public mockWorkout = {
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, velit ac semper gravida, ante nibh rhoncus dui, eget consequat leo neque et tortor. Proin nulla sem, malesuada ut rhoncus eu, aliquet ac ligula. Morbi efficitur id nulla rutrum tristique. Quisque eget lorem sem. Curabitur semper suscipit leo sed semper. Vivamus malesuada tristique metus iaculis varius. Donec dapibus justo nisi, ac rutrum nunc venenatis sed.",
    "nameDisplay": "Dolorosa",
    "programme": {
      "training": [
        {
          "duration": 20,
          "item": "BpHrnIbggk8JQBMdiuOC",
          "rest": 15,
          "exercise": {
            "description": "Wallball is a type of school yard game similar to butts up, aces-kings-queens, Chinese handball, Pêl-Law (Welsh handball) and American handball Kenny Mott is the founding father of wallball.",
            "name": "Wall ball",
            "resources": {
              "gif": "http://coveteur.com/content/uploads/2016/01/Jenny_ball-1.gif",
              "img": "https://cdn-maf0.heartyhosting.com/sites/muscleandfitness.com/files/_main_wallball.jpg"
            }
          }
        },
        {
          "duration": 10,
          "item": "zaaNQxEz2IFz5OckqL1i",
          "rest": 10,
          "exercise": {
            "description": "Begin with a box of an appropriate height 1-2 feet in front of you. Stand with your feet should width apart. This will be your starting position.",
            "name": "Box Jump",
            "resources": {
              "gif": "https://media.giphy.com/media/DODm4nqeYa4Cc/giphy.gif",
              "img": "https://heatrick.com/wp-content/uploads/2013/07/box-jump.jpg"
            }
          }
        },
        {
          "duration": 20,
          "item": "YA6I3vH5UriPj2oaFi0z",
          "rest": 12,
          "exercise": {
            "description": "Nous vous proposons ici un circuit de cinq exercices de musculation, que vous pouvez effectuer dans l'ordre que vous souhaitez.",
            "name": "Air Squat",
            "resources": {
              "gif": "https://www.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/GIFs/400x400_5_Exercises_for_Anterior_Pelvic_Tilt_Squats.gif",
              "img": "http://crossfitnewhaven.com/images/uploads/blog/_resized/Squat.jpg"
            }
          }
        },
        {
          "duration": 30,
          "item": "YQO3uEwzmYioRCzlXxKF",
          "rest": 8,
          "exercise": {
            "description": "We understand if you can’t make it to the gym on certain days. But that’s still no excuse to skip your workout altogether.",
            "name": "Push Up",
            "resources": {
              "img": "https://www.mensjournal.com/wp-content/uploads/mf/homeworkout-1280.jpg?w=2400"
            }
          }
        },
        {
          "duration": 28,
          "item": "pzZz9rOVrkcSrjz3JVEk",
          "rest": 10,
          "exercise": {
            "description": "This will be a grind. Have a good solid warm up, then get right into it,” says Manzo.",
            "name": "Burpees",
            "resources": {
              "img": "https://www.mensjournal.com/wp-content/uploads/mf/man-lunges.jpg?w=800"
            }
          }
        },
        {
          "duration": 20,
          "item": "yApx3Y5yRVo8TJGefJA9",
          "rest": 10,
          "exercise": {
            "description": "Hit this workout hard and as fast as you can,” says Manzo. “It’s going to be a fight",
            "name": "BodyWeight",
            "resources": {
              "img": "https://www.mensjournal.com/wp-content/uploads/mf/1280-v-up.jpg?w=800"
            }
          }
        },
        {
          "duration": 30,
          "item": "zaaNQxEz2IFz5OckqL1i",
          "rest": 10,
          "exercise": {
            "description": "Begin with a box of an appropriate height 1-2 feet in front of you. Stand with your feet should width apart. This will be your starting position.",
            "name": "Box Jump",
            "resources": {
              "gif": "https://media.giphy.com/media/DODm4nqeYa4Cc/giphy.gif",
              "img": "https://heatrick.com/wp-content/uploads/2013/07/box-jump.jpg"
            }
          }
        }
      ]
    },
    "type": "time",
    "updated": "2018-04-08T04:00:00.000Z",
    "id": "dolorosa"
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.workoutId = this.route.snapshot.paramMap.get('id');
    /* this.workout = this.afs.collection("workouts").doc(this.workoutId);
    this.workout.ref.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    }); */
  }

  log(event: number) {
     console.log(event);
  }

}
