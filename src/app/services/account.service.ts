import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreatedListsResponse } from '../models/interfaces/created-lists.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getCreatedLists(): Observable<CreatedListsResponse> {
    let url = `${environment.apiBaseUrl}/${environment.accountBaseUrl}/{account_id}/lists?api_key=${environment.apiKey}&session_id=${environment.session_id}`;
    return this.http.get<CreatedListsResponse>(url);
  }

}
