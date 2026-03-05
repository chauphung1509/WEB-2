import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-momo',
  standalone: false,
  templateUrl: './momo.html',
  styleUrl: './momo.css',
})
export class Momo {
  amount: number = 0;

  constructor(private http: HttpClient) {}

  payWithMomo() {
    this.http.post<any>("http://localhost:3002/payment/momo", {
      amount: this.amount
    })
    .subscribe(res => {

      console.log("Saved to DB, response:", res);

      if (res.payUrl) {
        window.location.href = res.payUrl;
      }
    });
  }
}
