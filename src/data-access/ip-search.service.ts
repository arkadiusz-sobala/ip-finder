import {
  EXAMPLE_RESPONSES,
  USER_ADDRESS_INFO,
} from './../constants/mocks.const';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ipInfoDTO } from 'src/models/ip-info.model';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class IpSearchService {
  private _ipApiAddress = 'http://ip-api.com/json/';

  constructor(private _http: HttpClient) {}

  getAddressInfo(address: string): Observable<ipInfoDTO> {
    let value = of(EXAMPLE_RESPONSES[Math.floor(Math.random() * 10)]);
    if (address === '') {
      value = of(USER_ADDRESS_INFO);
    }
    const queryAddress = this._ipApiAddress + address.trim();
    return value.pipe(
      delay(500),
      map((value) => ({ ...value, searchPhrase: address }))
    );
  }
}
