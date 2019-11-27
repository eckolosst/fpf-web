import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }

  addLocation(location) {
    return this.http.post<any>(`${this.url}/location`, location);
  }
}
