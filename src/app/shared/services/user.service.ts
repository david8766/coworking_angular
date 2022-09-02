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

  public updateUser(user: User) {
    return this._http.put<User>(this._baseUrl + '/user', user);
  }

  public findById(id: number) {
    return this._http.get<User>(this._baseUrl + '/user/' + id);
  }

  public checkUser(email: string, password: string) {
    return this._http.get<User>(this._baseUrl + '/user/' + email + '/' + password);
  }
}
