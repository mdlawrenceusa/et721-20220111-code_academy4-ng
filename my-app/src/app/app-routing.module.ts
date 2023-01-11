import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomemadeGoodsComponent } from './homemade-goods/homemade-goods.component';
import { QccComponent } from './qcc/qcc.component';


const routes: Routes = [
  
  { path: '', component: HomemadeGoodsComponent },
  { path: 'qcc', component: QccComponent },

  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
