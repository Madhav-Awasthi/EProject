import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/json/imployee.json"
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return  this.http.get<IEmployee[]>(this._url);
    //return [
      // {"id": 1, "name": "John", "age": 30},
      // {"id": 2, "name": "Deed", "age": 20},
      // {"id": 3, "name": "Maria", "age": 22},
      // {"id": 4, "name": "Elena", "age": 25}
    //]
  }
}
