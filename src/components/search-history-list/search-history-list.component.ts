import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ipInfoDTO } from 'src/models/ip-info.model';

@Component({
  selector: 'search-history-list',
  templateUrl: './search-history-list.component.html',
  styleUrls: ['./search-history-list.component.scss'],
})
export class SearchHistoryListComponent {
  @Input() list: ipInfoDTO[];

  @Output() select = new EventEmitter<ipInfoDTO>();
  constructor() {}
}
