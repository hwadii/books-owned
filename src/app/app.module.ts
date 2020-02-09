import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BooksListComponent } from "./books/books-list/books-list.component";
import { BookInfoComponent } from "./books/book-info/book-info.component";
import { BookAddComponent } from "./books/book-add/book-add.component";

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookInfoComponent,
    BookAddComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
