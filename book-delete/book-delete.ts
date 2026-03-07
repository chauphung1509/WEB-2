import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookAPI } from '../myservices/book-api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-delete',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-delete.html',
  styleUrl: './book-delete.css',
})
export class BookDelete {
  books:any;
  bookId:string='';
  errMessage:string='';

  constructor(private _service: BookAPI, private activeRouter: ActivatedRoute){
    this.loadBooks();
    this.activeRouter.paramMap.subscribe((param)=>{
      const id = param.get('id');
      if (id) {
        this.bookId = id;
        this.deleteBook(id);
      }
    });
  }

  private loadBooks()
  {
    this._service.getBooks().subscribe({
      next:(data)=>{this.books=data},
      error:(err)=>{this.errMessage=err}
    });
  }

  deleteBook(bookId:string)
  {
    if (!bookId || !bookId.trim()) {
      this.errMessage = 'Please enter a valid BookId';
      return;
    }

    this._service.deleteBook(bookId).subscribe({
      next:(data)=>{
        this.books=data;
        this.errMessage='';
      },
      error:(err)=>{this.errMessage=err}
    });
  }
}
