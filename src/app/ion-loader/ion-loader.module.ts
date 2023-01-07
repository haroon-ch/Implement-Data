import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonLoaderPageRoutingModule } from './ion-loader-routing.module';

import { IonLoaderPage } from './ion-loader.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonLoaderPageRoutingModule
  ],
  declarations: [IonLoaderPage]
})
export class IonLoaderPageModule {}
