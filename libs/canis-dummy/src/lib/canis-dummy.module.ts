import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { TranslocoMessageFormatModule } from '@ngneat/transloco-messageformat';

import { SheepCounterComponent } from './components/sheep-counter/sheep-counter.component';

export const loader = ['de-DE', 'en-US'].reduce((acc: any, lang) => {
  acc[lang] = () => import(`./assets/i18n/canisDummy/${lang}.json`);
  return acc;
}, {});

@NgModule({
  imports: [
    CommonModule,
    TranslocoModule,
    TranslocoMessageFormatModule.forRoot(),
  ],
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
