import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { TranslocoMessageFormatModule } from '@ngneat/transloco-messageformat';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';
import { firstValueFrom } from 'rxjs';

import { SheepCounterComponent } from './components/sheep-counter/sheep-counter.component';

export const canisTranslationLoader = function (http: HttpClient) {
  const loader = ['de-DE', 'en-US'].reduce((acc: any, lang) => {
    acc[lang] = () =>
      firstValueFrom(http.get(`assets/i18n/canisDummy/${lang}.json`));

    return acc;
  }, {});

  return { scope: 'canisDummy', loader };
};

@NgModule({
  imports: [
    CommonModule,
    TranslocoModule,
    TranslocoMessageFormatModule.forRoot(),
    TranslocoLocaleModule.forRoot(),
  ],
  declarations: [SheepCounterComponent],
  exports: [SheepCounterComponent],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      deps: [HttpClient],
      useFactory: canisTranslationLoader,
      multi: true,
    },
  ],
})
export class CanisDummyModule {}
