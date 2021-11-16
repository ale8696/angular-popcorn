import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MaterialImportsModule } from './modules/material-imports.module';
import { MoviesPopularListComponent } from './components/movies-popular-list/movies-popular-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    MoviesPopularListComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    HttpClientModule,
    FlexLayoutModule,
    NgCircleProgressModule.forRoot({
      "backgroundColor": "#000000",
      "backgroundGradientStopColor": "#000000",
      "backgroundStroke": "#000000",
      "backgroundPadding": 3,
      "radius": 15,
      "toFixed": 0,
      "maxPercent": 100,
      "units": " Point",
      "unitsColor": "#483500",
      "outerStrokeWidth": 5,
      "outerStrokeColor": "#ffffff",
      "innerStrokeColor": "#FFFFFF",
      "titleColor": "#ededed",
      "subtitleColor": "#483500",
      "imageWidth": 134,
      "showSubtitle": false,
      "showUnits": false,
      "showInnerStroke": false,
      "titleFontSize": "10",})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
