import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }

  addPet(pet) {
    return this.http.post<any>(`${this.url}/pet`, pet);
  }

  getPetsByPublication(idPublicacion) {
    return this.http.get<any>(`${this.url}/pet?publicationId=${idPublicacion}`);
  }
}
