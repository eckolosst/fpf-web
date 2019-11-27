import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public authToken: string;
  public url: string;

  constructor(public http: HttpClient) {
    this.url = environment.apiUrl;
  }

  logout(): void {
    localStorage.clear();
  }

  login(data) {
    // console.log(this.url + '/usuarioAdmin/login', data);
    return this.http.post<any>(this.url + '/login', data);
  }

  isLogued(): boolean {
    return localStorage.getItem('identity') ? true : false;
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
