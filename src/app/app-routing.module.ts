import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToggleViewComponent } from './components/toggle-view/toggle-view.component';

const routes: Routes = [
  {
    path: 'users',
    component: ToggleViewComponent,
  },
  {
    path: '**',
    redirectTo: 'users',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
