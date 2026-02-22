import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-learnbinding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './learnbinding.html',
  styleUrl: './learnbinding.css',
})
export class Learnbinding {
  student_id: string ="K234111E"
  student_name: string = "Nguyễn Văn Amee"
  student_adress: string = "123 Đường ABC, Quận XYZ"
  red_text_style={
    color:'red',
  }
}
