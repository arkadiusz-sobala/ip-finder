import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  layer = L.marker([51.505, -0.09], {
    icon: L.icon({ iconUrl: 'assets/marker.png', iconSize: [30, 45] }),
  }).bindTooltip('User location');

  options = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 15,
        minZoom: 1,
      }),
    ],
    zoom: 5,
    center: L.latLng(46.879966, -121.726909),
  };

  constructor() {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {}
}
