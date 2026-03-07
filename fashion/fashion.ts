import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FashionAPIService } from '../myservices/fashion-apiservice';

@Component({
  selector: 'app-fashion',
  imports: [CommonModule],
  templateUrl: './fashion.html',
  styleUrl: './fashion.css',
})
export class Fashion {
  fashions:any;
  errMessage:string=''
  constructor(public _service: FashionAPIService){
    this._service.getFashions().subscribe({
    next:(data)=>{this.fashions=data},
    error:(err)=>{this.errMessage=err}
    })
  }
}
