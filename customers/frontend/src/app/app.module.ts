import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module'
import { CustomersModule } from './components/customers/customers.module'
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { OrdersModule } from './components/orders/orders.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    CustomersModule,
    CoreModule,
    OrdersModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
