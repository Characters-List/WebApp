import {Injectable} from '@angular/core';
import type {HttpClient} from '@angular/common/http';

const API_URL = "http://localhost:7131/api/"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  preparedHeaders() {
    const token = localStorage.getItem('token');

    return {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
  }

  getMyCharacters() {
    return this.http.get(`${API_URL}/characters`, this.preparedHeaders());
  }
}
