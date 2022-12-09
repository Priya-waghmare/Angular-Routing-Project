import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping.component';
import { SamsungComponent } from './samsung/samsung.component';
import { AppleComponent } from './apple/apple.component';
import { VivoComponent } from './vivo/vivo.component';
import { RealmeComponent } from './realme/realme.component';


@NgModule({
  declarations: [
    ShoppingComponent,
    SamsungComponent,
    AppleComponent,
    VivoComponent,
    RealmeComponent
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
