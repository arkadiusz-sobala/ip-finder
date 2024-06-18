import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationInfoComponent } from './location-info.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [LocationInfoComponent],
  imports: [CommonModule, MatDividerModule, MatProgressSpinnerModule],
  exports: [LocationInfoComponent],
})
export class LocationInfoModule {}
