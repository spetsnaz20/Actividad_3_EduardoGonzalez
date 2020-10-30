import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegundoDAMPage } from './segundo-dam.page';

const routes: Routes = [
  {
    path: '',
    component: SegundoDAMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegundoDAMPageRoutingModule {}
