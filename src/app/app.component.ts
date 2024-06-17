import { IpSearchService } from './../data-access/ip-search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _ipSearchService: IpSearchService) {}
  marker: any;
  ngOnInit(): void {}

  getIpAddressInfo(address: string): void {
    this._ipSearchService.getAddressInfo(address).subscribe((res) => {
      this.marker = res;
    });
  }
}
