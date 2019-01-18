import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {
  author = {
    _id:'',
    name:'',
    quotes:[{body:"", votes:0}]
  };
  newQuote = new FormGroup({
    // id: new FormControl(),
    body: new FormControl(),
    votes: new FormControl()
  });
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }


  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this._httpService.singleItem(params['id'])
        .subscribe(data => {
          console.log("Got the data. Here it is before insertion",data);
          this.author = data['data'][0];
          console.log("Logging this.author",this.author)
        });
    });
    this.newQuote = new FormGroup({
      // id: new FormControl(Number),
      body: new FormControl(String, [Validators.required, Validators.minLength(3)]),
      votes: new FormControl(0)
    });
  }

  get body() {
    return this.newQuote.get('body');
  }

  cancel() {
    this._router.navigate(['/quotes/', this.author._id]);
  }

  submitQuote() {
    this._router.navigate(['/quotes/', this.author._id]);
  }

  addQuote() {
    console.log("Logging author ID",this.author._id);
    this._httpService.addQuote(this.author._id, this.newQuote.value)
      .subscribe(data => {
        console.log(data);
        this._router.navigate(['/quotes', this.author._id]);
      })
  }

}
