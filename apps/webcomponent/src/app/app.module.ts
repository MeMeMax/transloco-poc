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
  translocoConfig,
  TranslocoModule,
  TRANSLOCO_CONFIG,
} from '@ngneat/transloco';
import { CanisDummyModule } from '@wm-iot/canis-dummy';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, TranslocoModule, CanisDummyModule],
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
