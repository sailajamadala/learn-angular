import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
@Injectable()
export class DataService {
constructor(private http: HttpClient) {

}
getCountriesInfo(): any {
  return this.http.get("https://restcountries.eu/rest/v2/all",undefined );
}
}
