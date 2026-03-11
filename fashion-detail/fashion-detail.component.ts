import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Fashion } from '../../models/fashion';
import { FashionApiService } from '../../services/fashion-api.service';

@Component({
  selector: 'app-fashion-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, DatePipe],
  templateUrl: './fashion-detail.component.html',
  styleUrl: './fashion-detail.component.css',
})
export class FashionDetailComponent implements OnInit {
  fashion?: Fashion;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly fashionApi: FashionApiService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }

    this.fashionApi.getFashionById(id).subscribe({
      next: (data) => {
        this.fashion = data;
      },
    });
  }
}
