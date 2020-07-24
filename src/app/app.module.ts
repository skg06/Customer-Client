import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import  { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';
import {NgxSpinnerModule} from 'ngx-spinner';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcustomerComponent,
    CustomerlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    NgxSpinnerModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
