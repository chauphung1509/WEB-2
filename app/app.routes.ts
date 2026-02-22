import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Customerdetail } from './customerdetail/customerdetail';
import { CatalogComponent } from './catalog/catalog';
import { Learnbinding } from './learnbinding/learnbinding';
import { Listcustomer } from './listcustomer/listcustomer';
import { Listcustomer2 } from './listcustomer2/listcustomer2';
import { Listcustomer3 } from './listcustomer3/listcustomer3';
import { Notfound } from './notfound/notfound';
import { Component, NgModule } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Listproduct } from './listproduct/listproduct';
import { Productdetail } from './productdetail/productdetail';
import { ServiceProductImageEventComponent } from '../Ex13/service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetailComponent } from '../Ex13/service-product-image-event-detail/service-product-image-event-detail';
import { FakeProductComponent } from './fake-product/fake-product';
import { BooksComponent } from './books/books';
import { Ptb1 } from './ptb1/ptb1';
import { Ptb2 } from './ptb2/ptb2';
import { Ex10lunaryear } from './ex10lunaryear/ex10lunaryear';
import { Ex18 } from '../Ex18/ex18';
import { Ex21 } from '../ex21/ex21';
import { Ex22 } from '../ex22/ex22';


export const routes: Routes = [
  { path: 'gioi-thieu', component: About },
  { path: 'contact', component: Contact },
  { path: 'customerdetail', component: Customerdetail },
  { path: 'catalog', component: CatalogComponent },
  { path: 'learnbinding', component: Learnbinding },
  { path: 'khach-hang-1', component: Listcustomer},
  { path: 'khach-hang-2', component: Listcustomer2},
  { path: 'khach-hang-3', component: Listcustomer3},
  { path: 'san-pham-1', component: Listproduct},
  { path: 'san-pham-1/:id', component: Productdetail},
  { path:'service-product-image-event', component:ServiceProductImageEventComponent},
  { path:'service-product-image-event/:id', component:ServiceProductImageEventDetailComponent},
  { path: 'ex26', component: FakeProductComponent},
  { path: 'ex39', component: BooksComponent},
  { path: 'ptb1', component: Ptb1},
  { path: 'ptb2', component: Ptb2},
  { path: 'ex10', component: Ex10lunaryear},
  { path: 'ex18', component: Ex18},
  { path: 'ex21', component: Ex21},
  { path: 'ex22', component: Ex22},
  { path: '**', component: Notfound}
];

@NgModule({
  imports: [RouterOutlet, RouterLink],
})
export class AppRoutesModule {
}