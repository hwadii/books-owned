import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/models/book.model";
import { BooksService } from "../books.service";

@Component({
  selector: "app-book-add",
  templateUrl: "./book-add.component.html",
  styleUrls: ["./book-add.component.scss"]
})
export class BookAddComponent implements OnInit {
  bookTitle = "";
  bookAuthor = "";
  bookToAdd: Book;
  constructor(private bookService: BooksService) {}

  ngOnInit(): void {}

  addBook() {
    this.bookToAdd = {
      author: this.bookAuthor,
      title: this.bookTitle
    };
    this.bookService.addBook$(this.bookToAdd).subscribe(book => {
      this.bookService.bookSubject.next(book);
    });
  }
}
