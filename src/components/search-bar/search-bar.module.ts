import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressInputModule } from 'src/directives/address-input/address-input.module';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    AddressInputModule,
  ],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
