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
  @Output() onSearchResult = new EventEmitter<__esri.Graphic>()
  @Output() onMapStatusUpdate = new EventEmitter<boolean>()


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

    this.searchWidget.on("select-result", ({ result }) => this.onSearchResult.emit(result.feature))

    view.ui.add(this.searchWidget, {
      position: "top-right"
    })

    this.view = view;
    return this.view.when();
  }

  async ngOnInit(): Promise<void> {
    this.onMapStatusUpdate.emit(false)
    try {
      await this.initializeMap()
      this.onMapStatusUpdate.emit(true)
    } catch (error) {
      console.error(error)
      alert("OOPS! Cannot load ArcGIS map!")
    }
  }


  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    const { currentValue } = changes['location']
    if (currentValue) {
      this.onMapStatusUpdate.emit(false)
      try {
        await this.view.goTo(currentValue, { duration: 1000 })
        this.onMapStatusUpdate.emit(true)
      } catch (error) {
        console.error(error)
        alert("OOPS! Something went wrong when executing this operation!")
      }
    }
  }

  ngOnDestroy(): void {
    if (this.view) {
      this.view.destroy();
    }
  }

}
