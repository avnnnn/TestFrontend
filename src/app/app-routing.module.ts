import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NevermindComponent } from './nevermind/nevermind.component';


const routes: Routes = [
  {path:'nevermind', component:NevermindComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
