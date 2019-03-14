import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  // { path: 'new-user', loadChildren: './new-user/new-user.module#NewUserPageModule' },
  // { path: 'page-not-found', loadChildren: './page-not-found/page-not-found.module#PageNotFoundPageModule' },
  // { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
