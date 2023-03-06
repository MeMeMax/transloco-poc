/**
 * Copyright (C) 2023 Weidmueller Interface GmbH & Co. KG
 * All rights reserved.
 */

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslocoModule } from '@ngneat/transloco';
import { CanisDummyModule } from '@wm-iot/canis-dummy';

import { FeatureOneRoutingModule } from './feature-one-routing.module';
import { FromLibraryComponent } from './components/from-library/from-library.component';
import { FromWebcomponentComponent } from './components/from-webcomponent/from-webcomponent.component';

@NgModule({
  declarations: [FromLibraryComponent, FromWebcomponentComponent],
  imports: [
    CommonModule,
    FeatureOneRoutingModule,
    TranslocoModule,
    CanisDummyModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeatureOneModule {}
