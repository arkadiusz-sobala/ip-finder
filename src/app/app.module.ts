import { SearchBarModule } from './../components/search-bar/search-bar.module';
import { MapModule } from './../components/map/map.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CardModule } from 'src/components/card/card.module';
import { LocationInfoModule } from 'src/components/location-info/location-info.module';
import { AddressInfoPipeModule } from 'src/pipes/address-info-pipe/address-info-pipe.module';
import { SearchHistoryListModule } from 'src/components/search-history-list/search-history-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MapModule,
    SearchBarModule,
    CardModule,
    AddressInfoPipeModule,
    SearchHistoryListModule,
    MatSnackBarModule,
    LocationInfoModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
