import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppleComponent } from './apple/apple.component';
import { RealmeComponent } from './realme/realme.component';
import { SamsungComponent } from './samsung/samsung.component';
import { ShoppingComponent } from './shopping.component';
import { VivoComponent } from './vivo/vivo.component';

const routes: Routes = [{ path: '', component: ShoppingComponent },
{ path: 'samsung', component: SamsungComponent },
{ path: 'apple', component: AppleComponent },
{ path: 'realme', component: RealmeComponent },
{ path: 'vivo', component: VivoComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
