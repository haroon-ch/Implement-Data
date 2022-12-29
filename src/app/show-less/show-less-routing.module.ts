import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowLessPage } from './show-less.page';

const routes: Routes = [
  {
    path: '',
    component: ShowLessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowLessPageRoutingModule {}
