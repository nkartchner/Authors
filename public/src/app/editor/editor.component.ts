import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms'
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  editAuthor = new FormGroup({
    'name': new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ])
  });
  author:any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params)=>{
      console.log(params['id']);
    });
  }


  update(){
    this._router.navigate(['/home']);
  }
}
