import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./modules/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
