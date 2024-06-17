import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ipInfoDTO } from 'src/models/ip-info.model';

@Injectable({
  providedIn: 'root',
})
export class IpSearchService {
  private _ipApiAddress = 'http://ip-api.com/json/';

  constructor(private _http: HttpClient) {}

  getAddressInfo(address: string): Observable<ipInfoDTO> {
    const queryAddress = this._ipApiAddress + address;
    return this._http.get<ipInfoDTO>(queryAddress);
  }
}
