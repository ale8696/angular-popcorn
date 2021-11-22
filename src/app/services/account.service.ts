import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FavoriteDto, GetFavoriteMoviesResponse, MarkAsFavoriteResponse } from '../models/interfaces/account.interface';
import { CreatedListsResponse } from '../models/interfaces/lists.interface';


const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'
})
}
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getCreatedLists(): Observable<CreatedListsResponse> {
    let url = `${environment.apiBaseUrl}/${environment.accountBaseUrl}/{account_id}/lists?api_key=${environment.apiKey}&session_id=${environment.session_id}`;
    return this.http.get<CreatedListsResponse>(url);
  }

  markFavorite(favorita: FavoriteDto): Observable<MarkAsFavoriteResponse> {
    let url = `${environment.apiBaseUrl}/${environment.accountBaseUrl}/{account_id}/favorite?api_key=${environment.apiKey}&session_id=${environment.session_id}`;
    return this.http.post<MarkAsFavoriteResponse>(url, favorita, DEFAULT_HEADERS);
  }
  
  getFavoriteMovies(): Observable<GetFavoriteMoviesResponse> {
    let url = `${environment.apiBaseUrl}/${environment.accountBaseUrl}/{account_id}/favorite/movies?api_key=${environment.apiKey}&session_id=${environment.session_id}`;
    return this.http.get<GetFavoriteMoviesResponse>(url);
  }

}
