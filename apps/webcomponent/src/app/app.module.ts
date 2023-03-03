import {
  ApplicationRef,
  DoBootstrap,
  Injector,
  isDevMode,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    const webComponentSelector = 'webcomponent';

    if (!customElements.get(webComponentSelector)) {
      const component = createCustomElement(AppComponent, {
        injector,
      });

      customElements.define(webComponentSelector, component);
    }
  }

  ngDoBootstrap(app: ApplicationRef): void {
    if (isDevMode()) {
      const componentElement = document.createElement('webcomponent-root');
      document.body.appendChild(componentElement);
      app.bootstrap(AppComponent);
    }
  }
}
