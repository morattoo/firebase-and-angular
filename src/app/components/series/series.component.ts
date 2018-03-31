import { Component, OnInit } from '@angular/core';

import { SeriesService } from '../../services/series.service';
import { Serie } from '../../models/serie';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  seriesList: Observable<any[]>;

  constructor( private seriesService: SeriesService) { }

  ngOnInit() {
    this.seriesList = this.seriesService.getSeries();
  }
}
