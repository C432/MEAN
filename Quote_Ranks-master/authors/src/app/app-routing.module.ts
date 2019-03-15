import { HomeComponent } from './home/home.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { AuthorsComponent } from './authors/authors.component';
import { QuotesComponent } from './quotes/quotes.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'new', component: NewAuthorComponent },
	{ path: 'edit/:id', component: EditAuthorComponent },
	{ path: 'write/:id', component: NewQuoteComponent },
	{ path: 'quotes/:id', component: QuotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
