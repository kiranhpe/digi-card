import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DCardComponent } from './d-card/d-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DCardComponent],
  exports: [DCardComponent],
  imports: [CommonModule, FormsModule],
})
export class UiKitModule {}
