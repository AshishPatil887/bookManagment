import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';


const routes: Routes = [

  {
    path: '',
    component: BooksComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'booksDetails',
    component: BookdetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
