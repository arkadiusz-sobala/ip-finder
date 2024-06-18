import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addressInfoPipe'
})
export class AddressInfoPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
