import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WalletComponent } from './wallet/wallet.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'wallet', component: WalletComponent },
  // { path: 'login', component: LoginComponent },  (optional, for later)
  { path: '**', redirectTo: '' }
];
