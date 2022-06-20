import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
    console.log('Change Scale!');
    this.mapViewService.changeScale()

  }

  handlePanToIsrael() {
    console.log('Pan To Israel!');
    this.mapViewService.panToIsrael()

  }

  handleReturnToPrevLocation() {
    console.log('Return To Previous Location!');
    this.mapViewService.returnToPrevLocation()

  }

  handleSearchResult(ev: __esri.SearchSelectResultEvent) {
    this.mapViewService.saveLocation(ev)

  }

  ngOnInit(): void {
    this.locations$ = this.mapViewService.locations$
  }
}
