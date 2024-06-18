import { ipInfoDTO } from './../../models/ip-info.model';
import { Pipe, PipeTransform } from '@angular/core';
import { ipDisplayInfo } from 'src/models/ip-display-info.model';

@Pipe({
  name: 'addressInfoPipe',
})
export class AddressInfoPipePipe implements PipeTransform {
  transform(value: ipInfoDTO): ipDisplayInfo {
    if (!value) {
      return null;
    }
    return {
      city: value.city,
      country: value.country,
      isp: value.isp,
      org: value.org,
      query: value.query,
      regionName: value.regionName,
      timezone: value.timezone,
      zip: value.zip,
    };
  }
}
