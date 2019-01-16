import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewAuthorComponent } from './new-author/new-author.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'new', component: NewAuthorComponent },
  { path: 'edit/:id', component: EditorComponent },
  {path:'', pathMatch: 'full', redirectTo: '/home'},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
