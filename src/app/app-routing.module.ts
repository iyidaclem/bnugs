import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { Mint2Component } from './mint2/mint2.component';

const routes: Routes = [
  {path:"",component:Mint2Component},
{path:"about",component:BlogDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
