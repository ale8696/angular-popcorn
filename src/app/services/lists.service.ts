import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddMovieDto, AddMovieResponse, CreateListDto, CreateListResponse } from '../models/interfaces/lists.interface';

const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private http: HttpClient) { }

  postCreateList(lista: CreateListDto):Observable<CreateListResponse> {
    let url = `${environment.apiBaseUrl}/${environment.listBaseUrl}?api_key=${environment.apiKey}&session_id=${environment.session_id}`
    return this.http.post<CreateListResponse>(url, lista, DEFAULT_HEADERS);
  }

  postAddMovie(listaId: number, movieId: AddMovieDto): Observable<AddMovieResponse> {
    let url = `${environment.apiBaseUrl}/${environment.listBaseUrl}/${listaId}/add_item?api_key=${environment.apiKey}&session_id=${environment.session_id}`
    return this.http.post<AddMovieResponse>(url, movieId, DEFAULT_HEADERS);
  }

}
