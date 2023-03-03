/**
 * Copyright (C) 2023 Weidmueller Interface GmbH & Co. KG
 * All rights reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslocoModule } from '@ngneat/transloco';
import { CanisDummyModule } from '@wm-iot/canis-dummy';

import { FeatureOneRoutingModule } from './feature-one-routing.module';
import { FirstComponent } from './components/first/first.component';

@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    FeatureOneRoutingModule,
    TranslocoModule,
    CanisDummyModule,
  ],
})
export class FeatureOneModule {}