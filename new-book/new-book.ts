import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Book } from "../books/books";
import { BookAPI } from "../myservices/book-api";

@Component({
selector: 'app-new-book',
standalone: true,
imports: [CommonModule, FormsModule],
templateUrl: './new-book.html',
styleUrls: ['./new-book.css']
})
export class NewBook {
  book=new Book();
  books:any
  errMessage:string=''
  constructor(private _service: BookAPI){
  this._service.getBooks().subscribe({
  next:(data)=>{this.books=data},
  error:(err)=>{this.errMessage=err}
  })
  }
  postBook()
  {
    this._service.postBook(this.book).subscribe({
    next:(data)=>{this.books=data},
    error:(err)=>{this.errMessage=err}
    })
  }
} 