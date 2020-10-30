import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { PrimeroDAMPage } from '../primero-dam/primero-dam.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
        {
          path: 'primero-dam',
              loadChildren: () => import('../primero-dam/primero-dam.module').then(m => m.PrimeroDAMPageModule)

        },
        {
          path: 'segundo-dam',
              loadChildren: () => import('../segundo-dam/segundo-dam.module').then(m => m.SegundoDAMPageModule)
        },
        {
          path: 'fct',
              loadChildren: () => import('../fct/fct.module').then(m => m.FCTPageModule)
        }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
