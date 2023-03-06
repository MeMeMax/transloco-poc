import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { TranslocoService, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { firstValueFrom } from 'rxjs';

import { deDE } from '../assets/i18n/de-DE';
import { enUS } from '../assets/i18n/en-US';

export const webcomponentTranslationLoader = function (
  translocoService: TranslocoService
) {
  const availableLangs = { 'en-US': enUS, 'de-DE': deDE };
  const loader = Object.entries(availableLangs).forEach(([key, translation]) =>
    translocoService.setTranslation(translation, `webcomponent/${key}`)
  );

  return [{ scope: 'webcomponent', loader }];
};

export const canisTranslationLoader = function (http: HttpClient) {
  const loader = ['de-DE', 'en-US'].reduce((acc: any, lang) => {
    acc[lang] = () =>
      firstValueFrom(http.get(`assets/i18n/canisDummy/${lang}.json`));

    return acc;
  }, {});

  return { scope: 'canisDummy', loader };
};

@Component({
  selector: 'transloco-poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      deps: [HttpClient],
      useFactory: canisTranslationLoader,
      multi: true,
    },
    {
      provide: TRANSLOCO_SCOPE,
      deps: [TranslocoService],
      useFactory: webcomponentTranslationLoader,
      multi: true,
    },
  ],
})
export class AppComponent {
  @Input() set language(language: string) {
    this.translocoService.setActiveLang(language);
  }

  constructor(private translocoService: TranslocoService) {}
}
