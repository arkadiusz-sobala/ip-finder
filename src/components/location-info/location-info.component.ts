import { ipDisplayInfo } from './../../models/ip-display-info.model';
import { INFO_LABEL_MAP } from './../../constants/info-label.const';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.scss'],
})
export class LocationInfoComponent implements OnInit {
  @Input() addressInfo: ipDisplayInfo;
  @Input() loading: boolean;

  infoLabelMap = INFO_LABEL_MAP;
  constructor() {}

  ngOnInit(): void {}
}
