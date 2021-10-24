import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThankPageRoutingModule } from './thank-page-routing.module';
import { ThankPageComponent } from './thank-page.component';


@NgModule({
  declarations: [ThankPageComponent],
  imports: [
    CommonModule,
    ThankPageRoutingModule
  ]
})
export class ThankPageModule { }
