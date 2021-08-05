import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ShoppingComponent } from './components/shopping/shopping.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'shopping', component: ShoppingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
