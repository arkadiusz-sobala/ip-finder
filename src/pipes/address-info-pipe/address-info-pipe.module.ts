import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressInfoPipePipe } from './address-info-pipe.pipe';

@NgModule({
  declarations: [AddressInfoPipePipe],
  imports: [CommonModule],
  exports: [AddressInfoPipePipe],
})
export class AddressInfoPipeModule {}
