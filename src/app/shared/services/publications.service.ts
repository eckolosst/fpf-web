import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }

  getPublications() {
    return this.http.get<any>(`${this.url}/publication`);
  }

  getMissingOrFound() {
    return this.http.get<any>(`${this.url}/publication?type=missingOrFound`);
  }

  getAdoption() {
    return this.http.get<any>(`${this.url}/publication?type=adoption`);
  }

  getTransit() {
    return this.http.get<any>(`${this.url}/publication?type=transit`);
  }

  getHelpReq() {
    return this.http.get<any>(`${this.url}/publication?type=helpReq`);
  }
}
