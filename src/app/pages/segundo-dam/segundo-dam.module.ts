import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegundoDAMPageRoutingModule } from './segundo-dam-routing.module';

import { SegundoDAMPage } from './segundo-dam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegundoDAMPageRoutingModule
  ],
  declarations: [SegundoDAMPage]
})
export class SegundoDAMPageModule {}
