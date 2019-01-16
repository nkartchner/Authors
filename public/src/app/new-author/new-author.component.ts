import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
  newAuthor:any;
  constructor(
    private _httpService:HttpService,
    private _router: Router,
    private _route: ActivatedRoute
    ) { }
  
  ngOnInit() {
    this.newAuthor = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }
  
  get name(){
    return this.newAuthor.get('name');
  }


  addAuthor(){
    this._httpService.add(this.newAuthor).subscribe(data=>{
      console.log(data);
      this._router.navigate(['/home']);
    });
  }

  revert(){
    this.newAuthor.reset();
  }

}
