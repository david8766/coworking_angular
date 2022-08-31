import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Space } from '../interfaces/space';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  private _baseUrl = environment.urlApi;
  spaces$: any;

  constructor(private _http: HttpClient) { }
  public findAll(){
    return this._http.get<Space[]>(this._baseUrl + '/space/limit');
  }
  public findCities() {
    return this._http.get<String[]>(this._baseUrl + '/space/cities');
  }
  public findByCity(city: string) {
    return this._http.get<Space[]>(this._baseUrl + '/space/city/' + city);
  }
  public findById(id: number) {
    return this._http.get<Space>(this._baseUrl + '/space/' + id);
  }
}
