import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookAPI } from '../myservices/book-api';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.html',
  styleUrls: ['./books.css']
})
export class BooksComponent {
  books:any;
  errMessage:string=''
  constructor(private _service: BookAPI){
  this._service.getBooks().subscribe({
  next:(data)=>{this.books=data},
  error:(err)=>{this.errMessage=err}
})
}
}