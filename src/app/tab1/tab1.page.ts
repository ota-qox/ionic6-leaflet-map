import { Component } from '@angular/core';
import { LatLngExpression, Map, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  map: Map;

  constructor() {}

  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    const qoxLatLng: LatLngExpression = [33.235948786009615, 131.6109924884563];
    // In setView add LatLng and zoom
    this.map = new Map('mapId').setView(qoxLatLng, 10);
    tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    marker([33.186550, 131.434078])
      .addTo(this.map)
      .bindPopup('有限会社麻生本店');
    marker([33.597116, 131.195112])
      .addTo(this.map)
      .bindPopup('旭酒造株式会社')
      .openPopup();
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }
}
