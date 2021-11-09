import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'new',
    loadChildren: () =>
      import('./pages/chores/new/new.module').then((m) => m.NewModule),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./pages/chores/list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./pages/chores/details/details.module').then(
        (m) => m.DetailsModule
      ),
  },
  {
    path: 'edit',
    loadChildren: () =>
      import('./pages/chores/edit/edit.module').then((m) => m.EditModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
