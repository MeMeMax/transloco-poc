import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SheepCounterComponent } from './components/sheep-counter/sheep-counter.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SheepCounterComponent],
  exports: [SheepCounterComponent],
})
export class CanisDummyModule {}
