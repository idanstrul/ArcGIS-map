import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Location = __esri.Graphic | { target?: number[], scale: number } | null

@Injectable({
  providedIn: 'root'
})
export class MapViewService {

  private _locations$ = new BehaviorSubject<Location>(null)
  public locations$ = this._locations$.asObservable()

  constructor() { }

  private prevLocations: __esri.Graphic[] = [];
  private israelCoordinates = { target: [35.0818, 31.4117], scale: 5000000 }
  private defaultMapScale = { scale: 1000000 }


  changeScale() {
    console.log('this is:', this);

    this._locations$.next(this.defaultMapScale)
  }

  panToIsrael() {
    this._locations$.next(this.israelCoordinates)
  }

  returnToPrevLocation() {
    const prevLocation = this.prevLocations.pop()
    this._locations$.next((prevLocation) ? prevLocation : null);
  }

  saveLocation(location: __esri.Graphic) {
    console.log(location);
    this.prevLocations.push(location)
  }
}
