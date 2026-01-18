import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog-service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.html',
  styleUrls: ['./catalog.css']
})
export class CatalogComponent implements OnInit {

  categories: any[] = [];

  constructor(private catalogService: CatalogService) {
    console.log('CatalogComponent constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    this.categories = this.catalogService.getCategories();
    console.log('Categories loaded:', this.categories);
  }

}