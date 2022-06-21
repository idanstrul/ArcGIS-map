import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, exhaustMap, interval, map, merge, observable, Observable, take, tap } from 'rxjs';
import { Location, MapViewService } from 'src/app/services/map-view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Kapow-Maps-Exam';
  isMapReady = false;

  constructor(private mapViewService: MapViewService) { }

  public locations$!: Observable<Location>
  private _emptySubject$ = new BehaviorSubject<null>(null)


  handleMapOperation(mapOperation: string) {
    if (!this.isMapReady) return

    switch (mapOperation) {
      case "CHANGE_SCALE":
        return this.mapViewService.changeScale()

      case "PAN_TO_ISRAEL":
        return this.mapViewService.panToIsrael()

      case "RETURN_TO_PREV_LOCATION":
        return this.mapViewService.returnToPrevLocation()
    }
  }

  updateMapStatus(status: boolean) {
    this.isMapReady = status
    if (status) this._emptySubject$.next(null)
  }

  handleSearchResult(ev: __esri.Graphic) {
    this.mapViewService.saveLocation(ev)
  }

  ngOnInit(): void {
    this.locations$ = merge(this.mapViewService.locations$, this._emptySubject$)
  }
}
