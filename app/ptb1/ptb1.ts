import { Component } from '@angular/core';

@Component({
  selector: 'app-ptb1',
  imports: [],
  templateUrl: './ptb1.html',
  styleUrl: './ptb1.css',
})
export class Ptb1 {
get_solution(hsa:HTMLInputElement,hsb:HTMLInputElement,result:HTMLElement):void
  {
    let a=parseFloat(hsa.value);
    let b=parseFloat(hsb.value);
    if (a==0 && b==0)
    {
      result.innerHTML="phương trình vô số nghiệm";   
    }
    else if (a==0 && b!=0)
    {
      result.innerHTML="phương trình vô nghiệm";   
    }
    else
    {
      let x=-b/a;
      result.innerHTML="phương trình có nghiệm x="+x;   
    }
  }
clear_data(hsa:HTMLInputElement,hsb:HTMLInputElement,result:HTMLElement):void
  {    
    hsa.value="";
    hsb.value="";
    result.innerHTML="";
    hsa.focus();
  }
}

