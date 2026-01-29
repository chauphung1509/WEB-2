import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Productservice } from '../productservice';
@Component({
  selector: 'app-service-product-image-event-detail',
  templateUrl: './service-product-image-event-detail.html',
  styleUrls: ['./service-product-image-event-detail.css'],
  imports: [CommonModule],
  standalone: true
})
export class ServiceProductImageEventDetailComponent {
  selectedProduct:any
  constructor(private activateRoute:ActivatedRoute,private _fs:Productservice,
private router:Router)
  {
    activateRoute.paramMap.subscribe((param)=>{
      let id=param.get('id')
      if(id!=null)
      {
        this.selectedProduct=_fs.getProductDetail(id)
      }
    })
  }
  goBack(){
    this.router.navigate(['service-product-image-event'])
}
}