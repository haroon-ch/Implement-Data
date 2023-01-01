import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioValuePageRoutingModule } from './radio-value-routing.module';

import { RadioValuePage } from './radio-value.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RadioValuePageRoutingModule
  ],
  declarations: [RadioValuePage]
})
export class RadioValuePageModule {}
