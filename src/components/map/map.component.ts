import { Component, Input, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { ipInfoDTO } from 'src/models/ip-info.model';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  @Input() tooltipText = 'This is the marker';
  mapCenter: L.LatLng;
  mapZoom: number;
  @Input() set locationData(value: ipInfoDTO) {
    this.marker = L.marker([value.lat, value.lon], {
      icon: this._markerIcon,
    }).bindTooltip('User location');

    this.mapCenter = L.latLng(value.lat, value.lon);
    this.mapZoom = 12;
  }

  private _markerIcon = L.icon({
    iconUrl: 'assets/marker.png',
    iconSize: [30, 45],
    iconAnchor: [15, 45],
    tooltipAnchor: [15, -30],
  });

  marker: L.Marker<any> | undefined;
  mapOptions: L.MapOptions = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 15,
        minZoom: 1,
      }),
    ],
    zoom: 5,
    center: L.latLng(52, 17),
  };

  constructor() {}
}
