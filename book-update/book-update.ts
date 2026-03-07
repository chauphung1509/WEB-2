import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../books/books';
import { BookAPI } from '../myservices/book-api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-update.html',
  styleUrl: './book-update.css',
})
export class BookUpdate {
  book=new Book();
  books:any
  errMessage:string=''
  constructor(private _service: BookAPI,
    private router: Router,
    private activeRouter:ActivatedRoute
  ){
    this._service.getBooks().subscribe({
      next:(data)=>{this.books=data},
      error:(err)=>{this.errMessage=err}
      })
      this.activeRouter.paramMap.subscribe((param)=>{
      let id=param.get("id")
      if (id!=null)
      {
        this.searchBook(id)
      }
    })
    }
    searchBook(bookId:string)
  {
    this._service.getBook(bookId).subscribe({
    next:(data)=>{this.book=data},
    error:(err)=>{this.errMessage=err}
    }) 
  }
  putBook()
  {
    this._service.putBook(this.book).subscribe({
      next:(data)=>{this.books=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
