import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './component/product-list/product-list.component';
import { MukAlertComponent } from 'ngx-mui-kit/components/muk-alert';
import { MukButtonComponent } from 'ngx-mui-kit/components/muk-button';
import { MukPaginationComponent } from "ngx-mui-kit/components/muk-pagination";
import { UsersListComponent } from './component/users-list/users-list.component';
import { MukTableComponent } from "ngx-mui-kit/components/muk-table";
import { MukCardsComponent } from 'ngx-mui-kit/components/muk-cards';
@NgModule({
  declarations: [
    ProductListComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MukAlertComponent,
    MukButtonComponent,
    MukPaginationComponent,
    MukTableComponent,
    MukCardsComponent 
    
  ]
})
export class ProductModule { }
