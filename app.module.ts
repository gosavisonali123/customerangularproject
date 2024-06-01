
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

import { CustomerService } from './customer.service'; // Import CustomerService

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CustomerService // Provide CustomerService here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
