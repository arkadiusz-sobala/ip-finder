import { Component, Input } from '@angular/core';
import * as L from 'leaflet';
import { ipInfoDTO } from 'src/models/ip-info.model';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  @Input() tooltipText = 'This is the marker';
  @Input() set locationData(value: ipInfoDTO) {
    this._handleLocationDataChange(value);
  }

  private _markerIcon = L.icon({
    iconUrl: 'assets/marker.png',
    iconSize: [30, 45],
    iconAnchor: [15, 45],
    tooltipAnchor: [15, -30],
  });

  mapCenter: L.LatLng;
  mapZoom: number;
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

  private _handleLocationDataChange(data: ipInfoDTO): void {
    if (!data) {
      this.marker = undefined;
      return;
    }
    this._createMarker(data);
    this._moveMapToPoint(data);
  }

  private _createMarker(data: ipInfoDTO): void {
    this.marker = L.marker([data.lat, data.lon], {
      icon: this._markerIcon,
    }).bindTooltip(this.tooltipText);
  }

  private _moveMapToPoint(data: ipInfoDTO): void {
    this.mapCenter = L.latLng(data.lat, data.lon);
    this.mapZoom = 12;
  }
}
