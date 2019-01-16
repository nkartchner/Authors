import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors: string[];
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this._httpService.all().subscribe(data=>{
      console.log(data);
      this.authors.push(data['data']);
    });

  }

  delete(id:any){
    this._httpService.delete(id).subscribe(data=>{
      console.log(data);
      return;      
    });
  }

}
