import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowLessPageRoutingModule } from './show-less-routing.module';

import { ShowLessPage } from './show-less.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowLessPageRoutingModule
  ],
  declarations: [ShowLessPage]
})
export class ShowLessPageModule {}
