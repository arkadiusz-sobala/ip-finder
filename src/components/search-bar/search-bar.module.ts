import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [CommonModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
