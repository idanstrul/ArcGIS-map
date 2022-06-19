import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  Input,
  OnChanges,
  SimpleChanges,
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

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy, OnChanges {

  constructor() { }
  public view!: MapView;

  @Input() mapViewCenter: number[] = [0, 0]
  @Input() mapViewScale: number = 1000


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


    const searchWidget = new Search({
      view: view
    });

    view.ui.add(searchWidget, {
      position: "top-right"
    })

    // const bookmarks = new Bookmarks({
    //   view,
    //   // allows bookmarks to be added, edited, or deleted
    //   editingEnabled: true,
    // });

    // const bkExpand = new Expand({
    //   view,
    //   content: bookmarks,
    //   expanded: true,

    // });

    // Add the widget to the top-right corner of the view
    // view.ui.add(bkExpand, 'top-right');

    // bonus - how many bookmarks in the webmap?
    // webmap.when(() => {
    //   if (webmap.bookmarks && webmap.bookmarks.length) {
    //     console.log('Bookmarks: ', webmap.bookmarks.length);
    //   } else {
    //     console.log('No bookmarks in this webmap.');
    //   }
    // });

    this.view = view;
    return this.view.when();
  }

  panToIsrael() {
    return this.view.goTo({ target: [31.4117, 35.0818], scale: 100000 }, { duration: 5000 })
  }



  ngOnInit(): any {
    // Initialize MapView and return an instance of MapView
    this.initializeMap().then(() => {
      // The map has been initialized
      console.log('The map is ready.');
    });

  }


  ngOnChanges(changes: SimpleChanges): void {
    this.view.goTo({ target: this.mapViewCenter, scale: this.mapViewScale }, { duration: 5000 })
  }

  ngOnDestroy(): void {
    if (this.view) {
      // destroy the map view
      this.view.destroy();
    }
  }

}
