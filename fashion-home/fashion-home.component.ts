import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Fashion } from '../../models/fashion';
import { FashionApiService } from '../../services/fashion-api.service';

@Component({
  selector: 'app-fashion-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './fashion-home.component.html',
  styleUrl: './fashion-home.component.css',
})
export class FashionHomeComponent implements OnInit {
  allFashions: Fashion[] = [];
  groupedFashions: Record<string, Fashion[]> = {};
  styles: string[] = [];

  searchStyle = '';
  selectedStyle = '';
  loading = false;

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
    });
  }

  loadFashions(style?: string): void {
    this.loading = true;
    this.fashionApi.getFashions(style).subscribe({
      next: (data) => {
        this.allFashions = data;
        this.groupFashions(data);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  applyFilter(): void {
    const style = this.selectedStyle || this.searchStyle;
    this.loadFashions(style);
  }

  clearFilter(): void {
    this.searchStyle = '';
    this.selectedStyle = '';
    this.loadFashions();
  }

  private groupFashions(list: Fashion[]): void {
    this.groupedFashions = list.reduce<Record<string, Fashion[]>>((acc, item) => {
      const key = item.style || 'OTHERS';
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});
  }

  styleKeys(): string[] {
    return Object.keys(this.groupedFashions);
  }
}
