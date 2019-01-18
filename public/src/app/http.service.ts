import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  all(){
    console.log("Calling all from HTTP Service");

    return this._http.get(`/api/all`);
  }
  
  singleItem(id:any){
    return this._http.get(`/api/${id}`);
  }

  add(author:any){
    console.log("Creating new from HTTP Service");

    return this._http.post("/api/new", author);
  }

  addQuote(id:any, quote:any){
    return this._http.put(`/api/add/quote/${id}`, quote);
  }

  update(id:any, author:any){
    return this._http.put(`/api/update/${id}`, author);
  }
  
  deleteQuote(authorId:any,  quote:any){
    return this._http.delete(`api/delete/${authorId}/${quote._id}`);
  }
  
  delete(id:any){
    return this._http.delete(`api/delete/${id}`);
  }

}
