import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewAuthorComponent } from './new-author/new-author.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EditorComponent } from './editor/editor.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'new', component: NewAuthorComponent },
  { path: 'edit/:id', component: EditorComponent },
  {path: 'quotes/:id', component: QuotesComponent},
  {path:'quotes/new/:id', component: NewQuoteComponent},
  {path:'', pathMatch: 'full', redirectTo: '/home'},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
