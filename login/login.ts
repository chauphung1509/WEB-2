import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  apiBaseUrl = 'http://localhost:3002';

  username = '';
  password = '';

  message = '';
  cookieMessage = '';
  cookieUser: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.readLoginCookie();
  }

  onLogin(): void {
    this.message = '';
    this.http
      .post<any>(
        `${this.apiBaseUrl}/login`,
        { username: this.username, password: this.password },
        { withCredentials: true }
      )
      .subscribe({
        next: (res) => {
          this.message = res?.message || 'Login successful';
          this.readLoginCookie();
        },
        error: (err) => {
          this.message = err?.error?.message || 'Login failed';
        },
      });
  }

  readLoginCookie(): void {
    this.http
      .get<any>(`${this.apiBaseUrl}/login-cookie`, { withCredentials: true })
      .subscribe({
        next: (res) => {
          this.cookieMessage = res?.message || 'Login cookie found';
          this.cookieUser = res?.loginUser || null;
        },
        error: () => {
          this.cookieMessage = 'No login cookie found';
          this.cookieUser = null;
        },
      });
  }

}
