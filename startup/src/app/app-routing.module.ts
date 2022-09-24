import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthcomponentComponent} from './authcomponent/authcomponent.component';
 
const routes: Routes = [
  { path: '', component: AuthcomponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
