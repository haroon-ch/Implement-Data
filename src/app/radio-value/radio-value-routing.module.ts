import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioValuePage } from './radio-value.page';

const routes: Routes = [
  {
    path: '',
    component: RadioValuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadioValuePageRoutingModule {}
