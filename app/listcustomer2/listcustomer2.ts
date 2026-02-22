import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customerservice } from '../customerservice';

@Component({
  selector: 'app-listcustomer2',
  imports: [CommonModule],
  templateUrl: './listcustomer2.html',
  styleUrl: './listcustomer2.css',
})
export class Listcustomer2 {
  customers:any
  constructor(private cs:Customerservice){
  this.customers=this.cs.get_all_customers();
}
}