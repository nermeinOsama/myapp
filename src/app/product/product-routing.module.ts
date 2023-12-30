import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './component/product-list/product-list.component';
import { UsersListComponent } from './component/users-list/users-list.component';

const routes: Routes = [
  {
    path:'photos', component:ProductListComponent
  }
  ,
  {
    path:'users', component:UsersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
