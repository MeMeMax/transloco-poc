import {
  ApplicationRef,
  DoBootstrap,
  Injector,
  isDevMode,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';

import {
  TranslocoConfig,
  translocoConfig,
  TranslocoMissingHandler,
  TranslocoModule,
  TranslocoService,
  TRANSLOCO_CONFIG,
  TRANSLOCO_MISSING_HANDLER,
  TRANSLOCO_SCOPE,
} from '@ngneat/transloco';
import { TranslocoMessageFormatModule } from '@ngneat/transloco-messageformat';
import { CanisDummyModule } from '@wm-iot/canis-dummy';

import { AppComponent } from './app.component';
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

export class CustomHandler implements TranslocoMissingHandler {
  handle(key: string, config: TranslocoConfig) {
    console.log('handle missing translations in WEBCOMPONENT');
    return `${key} HANDLED IN WEBCOMPONENT`;
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslocoModule,
    TranslocoMessageFormatModule.forRoot(),
    CanisDummyModule,
  ],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['de-DE', 'en-US'],
        defaultLang: 'de-DE',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      }),
    },
    {
      provide: TRANSLOCO_MISSING_HANDLER,
      useClass: CustomHandler,
    },
    {
      provide: TRANSLOCO_SCOPE,
      deps: [TranslocoService],
      useFactory: webcomponentTranslationLoader,
      multi: true,
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
