import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AppComponent } from './app.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';

const routes: Routes = [
  {path: '', component: CustomerlistComponent},
  {path: 'addcustomer', component: AddcustomerComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
