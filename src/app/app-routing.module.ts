import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { OperatorComponent } from './operator/operator.component';


const routes: Routes = [
  {
    path: 'operator',
    component: OperatorComponent
  },
  {
    path: '**',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
