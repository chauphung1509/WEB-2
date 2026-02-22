import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FakeProductService } from "../fake-product-service";

@Component({
  selector: 'app-fake-product',
  templateUrl: './fake-product.html',
  styleUrls: ['./fake-product.css'],
  imports: [CommonModule, HttpClientModule],
  providers: [FakeProductService],
  standalone: true
})
export class FakeProductComponent {
  data:any
  errMessage:string=''
  constructor(_service:FakeProductService){
  _service.getFakeProductData().subscribe({
  next:(data)=>{ this.data=data},
  error:(err)=>{
  this.errMessage=err
  }
})
}
}