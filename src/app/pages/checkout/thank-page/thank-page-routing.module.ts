import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThankPageComponent } from './thank-page.component';

const routes: Routes = [{ path: '', component: ThankPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThankPageRoutingModule { }
