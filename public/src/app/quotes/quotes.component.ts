import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  author = {
    _id: '',
    name: '',
    quotes: [{ body: "", votes: 0 }]
  };

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {

    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this._httpService.singleItem(params['id'])
        .subscribe(data => {
          console.log(data);
          this.author = data['data'][0];
        }, err => console.log("There was an error in the controller:", err));
    })
  }

  Vote(i: any) {
    this.author.quotes[i].votes++;

    this._httpService.update(this.author._id, this.author)
      .subscribe(data => { console.log(data) })
  }

  deVote(i: any) {
    this.author.quotes[i].votes--;
    this._httpService.update(this.author._id, this.author)
      .subscribe(data => { console.log(data) });
  }

  delete(quote: any, i:any) {
    this.author.quotes.splice(i, 1);
    this._httpService.deleteQuote(this.author._id, quote)
      .subscribe(data => { console.log(data) });
  }




}
