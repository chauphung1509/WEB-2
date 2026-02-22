import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  datas = [
    {
      "Cateid": "cate1", "CateName": "NƯỚC NGỌT",
      "Products": [
        { "ProductId": "p1", "ProductName": "Coca", "Price": 100000, "Image": "assets/image/coca.jpg" },
        { "ProductId": "p2", "ProductName": "Pepsi", "Price": 300000, "Image": "assets/image/pepsi.png" },
        { "ProductId": "p3", "ProductName": "Sting", "Price": 200000, "Image": "assets/image/sting.jpg" },
      ]
    },
    {
      "Cateid": "cate2", "CateName": "BIA",
      "Products": [
        { "ProductId": "p4", "ProductName": "Heineken", "Price": 500000, "Image": "assets/image/heniken.jpg" },
        { "ProductId": "p5", "ProductName": "333", "Price": 400000, "Image": "assets/image/333.jpg" },
        { "ProductId": "p6", "ProductName": "Sài Gòn", "Price": 600000, "Image": "assets/image/saigon.jpg" },
      ]
    },
  ];

  constructor() { }

  getCategories() {
    return this.datas;
  }
}