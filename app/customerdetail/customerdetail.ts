import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customerservice } from '../customerservice';

@Component({
  selector: 'app-customerdetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customerdetail.html',
  styleUrl: './customerdetail.css',
})
export class Customerdetail {
  constructor(private cs: Customerservice)
  {
  }
  search_customer_by_id(id:string,
    tdid:HTMLElement,
    tdname:HTMLElement,
    tdage:HTMLElement)
  {
    let c = this.cs.get_customer_detail(id);
    if (c!=null)
    {
      tdid.innerHTML = c.id.toString();
      tdname.innerHTML = c.name;
      tdage.innerHTML = "<font color='red'>"+c.age+"</font>";
    }
    else
    {
      tdid.innerHTML = "";
      tdname.innerHTML = "Not found";
      tdage.innerHTML = "";
      alert("Không tìm thấy customer Id="+id);
    }
  }


}
