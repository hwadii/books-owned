import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BookInfoComponent } from './books/book-info/book-info.component';


const routes: Routes = [
  {path: "books", component: BooksListComponent},
  {path: "books/:id", component: BookInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
