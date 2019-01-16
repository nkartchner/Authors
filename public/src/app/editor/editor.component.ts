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
  author: any;
  editAuthor = new FormGroup({
    name: new FormControl()
  });

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }



  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this._httpService.singleItem(params['id'])
        .subscribe(data => {
          console.log(data['data'][0]);
          this.author = data['data'][0];
          this.editAuthor = new FormGroup({
            name: new FormControl(this.author.name, [Validators.required, Validators.minLength(3)])
          });
        });
    });
  }
  
  get name() {
    return this.editAuthor.get('name');
  }

  update() {
    console.log(this.editAuthor.value);

    this._httpService.update(this.author._id, this.editAuthor.value)
      .subscribe(data => {
        console.log("updated Re-routing to home");
        this._router.navigate(['/home']);
      });
  }
}
