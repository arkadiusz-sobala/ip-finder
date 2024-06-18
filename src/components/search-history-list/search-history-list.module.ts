import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchHistoryListComponent } from './search-history-list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [SearchHistoryListComponent],
  imports: [CommonModule, ScrollingModule, MatButtonModule, MatTooltipModule],
  exports: [SearchHistoryListComponent],
})
export class SearchHistoryListModule {}
