import { Component, OnInit } from '@angular/core';
import { exhaustMap, interval, map, Observable, take, tap } from 'rxjs';
import { Location, MapViewService } from 'src/app/services/map-view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Kapow-Maps-Exam';

  constructor(private mapViewService: MapViewService) { }

  locations$!: Observable<Location>

  handleChangeScale() {
    this.mapViewService.changeScale()
  }

  handlePanToIsrael() {
    this.mapViewService.panToIsrael()
  }

  handleReturnToPrevLocation() {
    this.mapViewService.returnToPrevLocation()
  }

  handleSearchResult(ev: __esri.Graphic) {
    this.mapViewService.saveLocation(ev)
  }

  ngOnInit(): void {
    this.locations$ = this.mapViewService.locations$.pipe(
      exhaustMap(location => interval(100).pipe(
        take(2),
        map(i => (i === 0) ? location : null)
      )),
      tap(x => console.log(x))
    )
  }
}
