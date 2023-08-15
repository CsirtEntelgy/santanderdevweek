import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private apiURL = environment.API_URL 

  constructor(private http: HttpClient) { }

  getCard(): Observable<any>{
    return this.http.get<any>(this.apiURL)
  }
}
