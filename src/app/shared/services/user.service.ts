import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public authToken: string;
  public url: string;

  constructor(public http: HttpClient, private router: Router) {
    this.url = environment.apiUrl;
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['home']);
  }

  login(data) {
    // console.log(this.url + '/usuarioAdmin/login', data);
    return this.http.post<any>(this.url + '/login', data);
  }

  isLogued(): boolean {
    return localStorage.getItem('identity') ? true : false;
  }

  getUserId() {
    const identity = localStorage.getItem('identity');
    return identity ? JSON.parse(identity).id : null;
  }

  getToken() {
    const tokenIn = localStorage.getItem('token');
    if (tokenIn) {
      this.authToken = tokenIn;
    } else {
      this.authToken = null;
    }
    return this.authToken;
  }
}
