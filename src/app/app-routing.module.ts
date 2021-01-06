import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderDetailComponent } from  './order-detail/order-detail.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path: '', redirectTo:'orders', pathMatch:'full',
  },
  {
    path: 'orders', component:OrdersComponent,
  },
  {
    path: 'order-detail', component:OrderDetailComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
