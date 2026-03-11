import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { FashionApiService } from '../../services/fashion-api.service';
import { Fashion } from '../../models/fashion';

@Component({
  selector: 'app-fashion-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, QuillModule],
  templateUrl: './fashion-form.component.html',
  styleUrl: './fashion-form.component.css',
})
export class FashionFormComponent implements OnInit {
  private readonly fb = inject(FormBuilder);

  id = '';
  isEdit = false;
  saving = false;
  error = '';

  form = this.fb.nonNullable.group({
    style: ['', [Validators.required]],
    title: ['', [Validators.required]],
    thumbnail: ['', [Validators.required]],
    details: ['', [Validators.required]],
  });

  constructor(
    private readonly fashionApi: FashionApiService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }

    this.id = id;
    this.isEdit = true;

    this.fashionApi.getFashionById(id).subscribe({
      next: (data) => {
        this.form.patchValue({
          style: data.style,
          title: data.title,
          thumbnail: data.thumbnail,
          details: data.details,
        });
      },
      error: () => {
        this.error = 'Cannot load fashion data.';
      },
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload: Fashion = {
      style: this.form.controls.style.value,
      title: this.form.controls.title.value,
      thumbnail: this.form.controls.thumbnail.value,
      details: this.form.controls.details.value,
    };

    this.saving = true;
    this.error = '';

    const request$ = this.isEdit
      ? this.fashionApi.updateFashion(this.id, payload)
      : this.fashionApi.createFashion(payload);

    request$.subscribe({
      next: () => {
        this.saving = false;
        this.router.navigateByUrl('/');
      },
      error: () => {
        this.saving = false;
        this.error = 'Save failed.';
      },
    });
  }
}
