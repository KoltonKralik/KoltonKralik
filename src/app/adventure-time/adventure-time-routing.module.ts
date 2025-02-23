import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdventureTimePage } from './adventure-time.page';

const routes: Routes = [
  {
    path: '',
    component: AdventureTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdventureTimePageRoutingModule {}
