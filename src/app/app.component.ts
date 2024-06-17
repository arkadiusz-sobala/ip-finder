import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909),
  };
  map: any;

  ngOnInit(): void {
    this.map = L.map('map', {
      center: [51.505, -0.09],
      zoom: 20,
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
    L.marker([51.505, -0.09], {
      icon: L.icon({ iconUrl: 'assets/marker.png', iconSize: [30, 45] }),
    })
      .bindTooltip('User location')
      .addTo(this.map);
  }
}
