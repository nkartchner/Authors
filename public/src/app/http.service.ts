import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  all(){
    return this._http.get(`/api/all`);
  }
  
  singleItem(id:any){
    return this._http.get(`/api/${id}`);
  }

  add(author:any){
    return this._http.post(`/api/new`, author);
  }

  update(id:any, author:any){
    return this._http.put(`/api/update/${id}`, author);
  }
  
  delete(id:any){
    return this._http.delete(`api/delete/${id}`);
  }

}
