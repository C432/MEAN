import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// ----------------------------------------------------------------------------
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { WriteComponent } from './write/write.component';
import { QuotesComponent } from './quotes/quotes.component';


const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'new', component: NewComponent },
  { path:'edit/:id',component:EditComponent },
  { path:'quotes/:id',component:QuotesComponent },
  { path:'write/:id',component:WriteComponent },

  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
