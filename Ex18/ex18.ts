import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// Direct JSON import as backup
const customerJsonData = [
  {
    "CustomerTypeId": 1,
    "CustomerTypeName": "VIP",
    "Customers": [
      {
        "Id": "Cus123",
        "Name": "Obama",
        "Email": "obama@gmail.com",
        "Age": 67,
        "Image": "assets/image/obama.jpg"
      },
      {
        "Id": "Cus456",
        "Name": "Kim Jong Un",
        "Email": "kimjongun@gmail.com",
        "Age": 38,
        "Image": "assets/image/kimjongun.jpg"
      },
      {
        "Id": "Cus789",
        "Name": "Vladimir Putin",
        "Email": "putin@gmail.com",
        "Age": 58,
        "Image": "assets/image/putin.jpg"
      },
      {
        "Id": "Cus101",
        "Name": "Donald Trump",
        "Email": "trump@gmail.com",
        "Age": 75,
        "Image": "assets/image/trump.jpg"
      },
      {
        "Id": "Cus102",
        "Name": "Joe Biden",
        "Email": "biden@gmail.com",
        "Age": 78,
        "Image": "assets/image/biden.jpg"
      }
    ]
  }
];

interface Customer {
  Id: string;
  Name: string;
  Email: string;
  Age: number;
  Image: string;
}

interface CustomerType {
  CustomerTypeId: number;
  CustomerTypeName: string;
  Customers: Customer[];
}

@Component({
  selector: 'app-ex18',
  templateUrl: './ex18.html',
  styleUrls: ['./ex18.css'],
  standalone: true,
  imports: [CommonModule]
})
export class Ex18 implements OnInit {

  customerTypes: CustomerType[] = [];

  constructor(private http: HttpClient) {
    console.log('Ex18 Component initialized');
  }

  ngOnInit(): void {
    console.log('=== Ex18 ngOnInit started ===');
    console.log('HttpClient available:', !!this.http);
    
    // Use direct import data as primary source
    console.log('✅ Using direct import data');
    this.customerTypes = customerJsonData as CustomerType[];
    console.log('✅ customerTypes assigned:', this.customerTypes.length, 'types');
    
    // Also try HTTP as secondary check
    this.http.get<CustomerType[]>('assets/customer.json').subscribe({
      next: (data) => {
        console.log('✅ HTTP data also loaded:', data);
        console.log('🔄 Replacing direct import with HTTP data');
        this.customerTypes = data;
      },
      error: (err) => {
        console.warn('⚠️ HTTP failed, keeping direct import data:', err.message);
      }
    });
  }
}
