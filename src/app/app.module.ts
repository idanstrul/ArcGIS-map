import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './pages/app-root/app.component';
import { MainHeaderComponent } from './cmps/main-header/main-header.component';
import { MapComponent } from './cmps/map/map.component';
import { SideBarComponent } from './cmps/side-bar/side-bar.component';
import { MainFooterComponent } from './cmps/main-footer/main-footer.component';
import { BurgerMenuSvgComponent } from './cmps/burger-menu-svg/burger-menu-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MapComponent,
    SideBarComponent,
    MainFooterComponent,
    BurgerMenuSvgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
