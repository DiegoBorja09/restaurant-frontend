import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { RecipesComponent } from './recipe/recipes.component';

const routes: Routes = [
  { path: 'orders', component: OrdersComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'purchase', component: PurchaseComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: '', redirectTo: '/orders', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

