import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressInputDirective } from './address-input.directive';

@NgModule({
  declarations: [AddressInputDirective],
  imports: [CommonModule],
  exports: [AddressInputDirective],
})
export class AddressInputModule {}
