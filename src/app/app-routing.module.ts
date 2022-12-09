import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamsungComponent } from './shopping/samsung/samsung.component';

const routes: Routes = [{ path: 'shopping', loadChildren: () => import('./shopping/shopping.module').then(m => m.ShoppingModule)},
// {path:'samsung',component:SamsungComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
