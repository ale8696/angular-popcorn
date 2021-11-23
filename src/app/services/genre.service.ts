import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenresResponse } from '../models/interfaces/genres.interface';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) { }

  getGenresList(): Observable<GenresResponse> {
    let url = `${environment.apiBaseUrl}/${environment.genreBaseUrl}/movie/list?api_key=${environment.apiKey}`
    return this.http.get<GenresResponse>(url);
  }

}
