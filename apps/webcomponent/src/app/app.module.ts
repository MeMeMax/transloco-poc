import {
  ApplicationRef,
  DoBootstrap,
  Injector,
  isDevMode,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import {
  translocoConfig,
  TranslocoModule,
  TranslocoService,
  TRANSLOCO_CONFIG,
  TRANSLOCO_SCOPE,
} from '@ngneat/transloco';

import { de } from '../assets/i18n/de';
import { en } from '../assets/i18n/en';

import { AppComponent } from './app.component';

export const loader = function (translocoService: TranslocoService) {
  const availableLangs = { en, de };
  const loader = Object.entries(availableLangs).forEach(([key, translation]) =>
    translocoService.setTranslation(translation, `webcomponent/${key}`)
  );

  return { scope: 'webcomponent', loader };
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['de', 'en'],
        defaultLang: 'de',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      }),
    },
    {
      provide: TRANSLOCO_SCOPE,
      deps: [TranslocoService],
      useFactory: loader,
    },
  ],
})
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    const webComponentSelector = 'wc-transloco';

    if (!customElements.get(webComponentSelector)) {
      const component = createCustomElement(AppComponent, {
        injector,
      });

      customElements.define(webComponentSelector, component);
    }
  }

  ngDoBootstrap(app: ApplicationRef): void {
    if (isDevMode()) {
      const componentElement = document.createElement('transloco-poc-root');
      document.body.appendChild(componentElement);
      app.bootstrap(AppComponent);
    }
  }
}
