import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';// Default import
import WebMap from "@arcgis/core/WebMap";

// Namespace import
import * as projection from "@arcgis/core/geometry/projection";

import MapView from '@arcgis/core/views/MapView';
import Bookmarks from '@arcgis/core/widgets/Bookmarks';
import Expand from '@arcgis/core/widgets/Expand';
import Search from "@arcgis/core/widgets/Search"
import ScaleBar from "@arcgis/core/widgets/ScaleBar";

import esriConfig from '@arcgis/core/config'
import { Location } from 'src/app/services/map-view.service';
import widgetsSearch from '@arcgis/core/widgets/Search';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy, OnChanges {

  constructor() { }
  public view!: MapView;
  searchWidget!: widgetsSearch

  @Input() location: Location = null
  @Output() onSearchResult = new EventEmitter<__esri.SearchSelectResultEvent>()


  @ViewChild('mapViewNode', { static: true }) private mapViewEl!: ElementRef;

  initializeMap(): Promise<any> {
    const container = this.mapViewEl.nativeElement;

    const webmap = new WebMap({
      portalItem: {
        id: 'aa1d3f80270146208328cf66d022e09c ',
      },
    });

    const view = new MapView({
      container,
      map: webmap
    });

    const scaleBar = new ScaleBar({
      view: view
    });

    view.ui.add(scaleBar, {
      position: "bottom-left"
    });


    this.searchWidget = new Search({
      view: view
    });

    this.searchWidget.on("select-result", (ev) => this.onSearchResult.emit(ev))

    view.ui.add(this.searchWidget, {
      position: "top-right"
    })

    this.view = view;
    return this.view.when();
  }


  ngOnInit(): any {
    // Initialize MapView and return an instance of MapView
    this.initializeMap().then(() => {
      // The map has been initialized
      console.log('The map is ready.');
    });

  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    const { currentValue } = changes['location']
    if (currentValue?.result) this.view.goTo(currentValue.result.feature)
    else if (Array.isArray(currentValue)) this.view.goTo(currentValue)
    else if (typeof currentValue === 'number') this.view.goTo({ scale: currentValue })



    // this.view.goTo({ target: this.mapViewCenter, scale: this.mapViewScale }, { duration: 5000 })
  }

  ngOnDestroy(): void {
    if (this.view) {
      // destroy the map view
      this.view.destroy();
    }
  }

}
