import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FromLibraryComponent } from './components/from-library/from-library.component';
import { FromWebcomponentComponent } from './components/from-webcomponent/from-webcomponent.component';

const routes: Routes = [
  { path: 'from-library', component: FromLibraryComponent },
  { path: 'from-webcomponent', component: FromWebcomponentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureOneRoutingModule {}
