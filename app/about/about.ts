import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  student_id:string="SV1"
  student_name:string="Nguyễn Văn A"
  student_email:string="student@ueldomain.com"
  my_uni_logo="Logo_UEL.png"
}
