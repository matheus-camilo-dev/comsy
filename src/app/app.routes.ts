import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TablesComponent } from './pages/tables/tables.component';
import { KitchenComponent } from './pages/kitchen/kitchen.component';
import { PaymentComponent } from './pages/payment/payment.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'kitchen', component: KitchenComponent },
    { path: 'payment', component: PaymentComponent }
];
