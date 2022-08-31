import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _baseUrl = environment.urlApi;
  
  constructor(private _http: HttpClient) { }

  public createUser(user: User) {
    return this._http.post<User>(this._baseUrl + '/user', user);
  }
}
