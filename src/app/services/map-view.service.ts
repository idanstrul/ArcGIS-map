import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Location = __esri.SearchSelectResultEvent | [number, number] | number | null

@Injectable({
  providedIn: 'root'
})
export class MapViewService {

  private _locations$ = new BehaviorSubject<Location>(null)
  public locations$ = this._locations$.asObservable()

  constructor() { }

  private prevLocations: __esri.SearchSelectResultEvent[] = [];
  private israelCoordinates: [number, number] = [31.4117, 35.0818]
  private defaultMapScale = 1000


  changeScale() {
    console.log('Change Scale!');
    this._locations$.next(this.defaultMapScale)

  }

  panToIsrael() {
    console.log('Pan To Israel!');
    this._locations$.next(this.israelCoordinates)

  }

  returnToPrevLocation() {
    const prevLocation = this.prevLocations.pop()
    this._locations$.next((prevLocation) ? prevLocation : null);
  }

  saveLocation(location: __esri.SearchSelectResultEvent) {
    console.log(location.result.feature);

    this.prevLocations.push(location)
  }
}
