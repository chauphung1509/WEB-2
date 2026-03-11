import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Fashion } from '../../models/fashion';
import { FashionApiService } from '../../services/fashion-api.service';

@Component({
  selector: 'app-fashion-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, DatePipe],
  templateUrl: './fashion-list.component.html',
  styleUrl: './fashion-list.component.css',
})
export class FashionListComponent implements OnInit {
  fashions: Fashion[] = [];
  styles: string[] = [];
  selectedStyle = '';
  loading = false;
  error = '';

  constructor(private readonly fashionApi: FashionApiService) {}

  ngOnInit(): void {
    this.loadStyles();
    this.loadFashions();
  }

  loadStyles(): void {
    this.fashionApi.getStyles().subscribe({
      next: (styles) => {
        this.styles = styles;
      },
      error: () => {
        this.styles = [];
      },
    });
  }

  loadFashions(): void {
    this.loading = true;
    this.error = '';
    this.fashionApi.getFashions(this.selectedStyle).subscribe({
      next: (data) => {
        this.fashions = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Cannot load fashion list.';
        this.loading = false;
      },
    });
  }

  resetFilter(): void {
    this.selectedStyle = '';
    this.loadFashions();
  }

  onDelete(item: Fashion): void {
    if (!item._id) {
      return;
    }

    const ok = confirm(`Delete fashion "${item.title}"?`);
    if (!ok) {
      return;
    }

    this.fashionApi.deleteFashion(item._id).subscribe({
      next: () => this.loadFashions(),
      error: () => {
        this.error = 'Delete failed.';
      },
    });
  }
}
