import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonLoaderPage } from './ion-loader.page';

const routes: Routes = [
  {
    path: '',
    component: IonLoaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonLoaderPageRoutingModule {}
