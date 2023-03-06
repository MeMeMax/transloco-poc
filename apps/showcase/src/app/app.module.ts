import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {
  TranslocoConfig,
  TranslocoMissingHandler,
  TRANSLOCO_MISSING_HANDLER,
} from '@ngneat/transloco';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { FeatureOneModule } from './feature-one/feature-one.module';
import { TranslocoRootModule } from './transloco-root.module';

export class CustomHandler implements TranslocoMissingHandler {
  handle(key: string, config: TranslocoConfig) {
    console.log('handle missing translations in APP');
    return `${key} HANDLED IN APP`;
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    FeatureOneModule,
    HttpClientModule,
    TranslocoRootModule,
    FormsModule,
  ],
  providers: [
    {
      provide: TRANSLOCO_MISSING_HANDLER,
      useClass: CustomHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
