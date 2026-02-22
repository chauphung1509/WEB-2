import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Customerservice {
  customers = [
    {"id":1,"name":"Putin","age":70,"picture":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/960px-Donald_Trump_official_portrait.jpg"},
    {"id":2,"name":"Biden","age":80,"picture":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/President_Joe_Biden_delivers_remarks_from_the_Oval_Office_4.jpg/500px-President_Joe_Biden_delivers_remarks_from_the_Oval_Office_4.jpg"},
    {"id":3,"name":"Obama","age":60,"picture":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Official_portrait_of_Barack_Obama.jpg/960px-Official_portrait_of_Barack_Obama.jpg"},
  ]

  get_all_customers() {
    return this.customers;
  }
  get_customer_detail(id:string)
  {
    let c = this.customers.find(x=>x.id==parseInt(id))
    return c
  }
  filter_customers_by_age(a:number, b: number)
  {
    return this.customers.filter((C:any)=>C.age>=a &&C.age<=b)
  }
}
