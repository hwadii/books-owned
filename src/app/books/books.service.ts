import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Book, Books } from "src/app/models/book.model";

@Injectable({
  providedIn: "root"
})
export class BooksService {
  private static jsonToBook(data: any): Book {
    return {
      title: data["title"],
      author: data["author"]
    };
  }
  public bookSubject = new Subject<Book>();

  constructor(private http: HttpClient) {}

  getBooks$(): Observable<Books> {
    return this.http.get(`http://localhost:3000/books`).pipe(
      map(Object.values),
      map(books => books.map(BooksService.jsonToBook))
    );
  }

  addBook$(book: Book): Observable<Book> {
    return this.http.post<Book>(`http://localhost:3000/books`, book);
  }
}
