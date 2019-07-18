import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }

  getListDetails(){
    return this.http.get('../assets/data/products.json')
    .pipe(map((response: any) => response.json()));
  }
}
