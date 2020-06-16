import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoComponent } from './page';
import { GithubComponent } from './page/github/github.component';


const routes: Routes = [
  { path: '', component: ToDoComponent },
  { path: 'repositories', component: GithubComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
