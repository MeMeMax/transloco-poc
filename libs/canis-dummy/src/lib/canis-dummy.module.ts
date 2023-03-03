import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SheepCounterComponent } from './components/sheep-counter/sheep-counter.component';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  imports: [CommonModule, TranslocoModule],
  declarations: [SheepCounterComponent],
  exports: [SheepCounterComponent],
})
export class CanisDummyModule {}
