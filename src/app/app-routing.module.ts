import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCreditMainComponent } from './page-credit-main/page-credit-main.component';

const routes: Routes = [
  { path: 'page-credit-main', component: PageCreditMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
