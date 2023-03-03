import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { SheepCounterComponent } from './components/sheep-counter/sheep-counter.component';

export const loader = ['de', 'en'].reduce((acc: any, lang) => {
  acc[lang] = () => import(`./assets/i18n/${lang}.json`);
  return acc;
}, {});

@NgModule({
  imports: [CommonModule, TranslocoModule],
  declarations: [SheepCounterComponent],
  exports: [SheepCounterComponent],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'canisDummy',
        loader,
      },
    },
  ],
})
export class CanisDummyModule {}