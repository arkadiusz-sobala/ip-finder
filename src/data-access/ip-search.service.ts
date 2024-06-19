import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ipInfoDTO } from 'src/models/ip-info.model';
import { map } from 'rxjs/operators';

const token =
  '03AFcWeA7AZ_5_E0BjD243uRaD2EYO5KfojqZgwC9ZIre7_ZtVimeO_K6BQPTmyIPWADc4D56ahsD87KSG-rvG7y5U_w0jwcws5635FblIYAtX-Wgh0GIMjXkE_u6yV9D8bX7vgRS30a0NNpDfxjSz36N0eexv_UXtsfcXdZImM8hBVmwlKq8L6GbSgB8rjBhQMN0DihSo9m_eOYeiV_hY7OVg5fxFssl-c206TVex1YtqRz519HUTfdjdu81gMwppStaBcewe42lT3Tcgb8GTpdJFCfcFixoBByTG6c82ILntSUES7u5bqbRm9cDpltb_vXAQDpVJ1iw-PBtcP5_96SQ0MAfupD-lIMA_tfjVADVBoLycd-T3FFaaOZ4UL7uxssOLYSwFLxAYmFwxzuCcsGSlKJBYGKjZ-FeJEyygtUW0ddVn71HBist-Hb3-H4w-xH2Kb4Sb5zegg3Va8CPu6-hqY0wyxajPDomBtuD2bH2qDzYGyAQasprUIUVhR9PtoOp2arjBvSAE29DYa46AJriGPr1pW6L3M_i91-nmEiXm5mzdqluSupq7bUFu58v2f1kgIetE3iF9PXeLn6jAG2hVrCa-jyOkLcOWMhujMUkccLailPUdkSgwd2Ok4HV5keTuYhuIv6h9z6gdCyyQHK9rHqX8ZKwJg1CaL5EfAlwkAwIT5wmDo88';

@Injectable({
  providedIn: 'root',
})
export class IpSearchService {
  private _ipApiAddress = 'https://ipstack.com/ipstack_api.php';

  constructor(private _http: HttpClient) {}

  getAddressInfo(address: string): Observable<ipInfoDTO> {
    const queryAddress = this._ipApiAddress;
    return this._http
      .get<ipInfoDTO>(queryAddress, { params: { ip: address, token } })
      .pipe(map((value) => ({ ...value, searchPhrase: address })));
  }
}
