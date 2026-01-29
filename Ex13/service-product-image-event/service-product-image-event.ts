import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Productservice } from '../productservice';
@Component({
  selector: 'app-service-product-image-event',
  templateUrl: './service-product-image-event.html',
  styleUrls: ['./service-product-image-event.css'],
  imports: [CommonModule],
  standalone: true
})
export class ServiceProductImageEventComponent {
public products:any
constructor(pservice: Productservice,private router:Router){
this.products=pservice.getProductsWithImages()
}
viewDetail(f:any)
{
this.router.navigate(['service-product-image-event',f.ProductId])
}
}