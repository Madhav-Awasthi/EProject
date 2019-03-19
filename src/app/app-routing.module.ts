import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }      from './home/home.component';
import { ContactComponent }      from './contact/contact.component';
import { PageNotFoundComponent }      from './page-not-found/page-not-found.component';
import { ProductdetailsComponent }      from './productdetails/productdetails.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detail', component: ProductdetailsComponent },
  { path: 'detail/:productL2.id', component: ProductdetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
