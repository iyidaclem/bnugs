import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { Landing2Component } from './landing2/landing2.component';
import { Mint2Component } from './mint2/mint2.component';

const routes: Routes = [
  {path:"",component:Mint2Component},
{path:"about",component:BlogDetailsComponent},
{path:"more",component:Landing2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
