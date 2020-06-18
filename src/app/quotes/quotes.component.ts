import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: any[]

  constructor() {
    this.quotes = [
      {id: 1, submitter: "Elly Konn", quote: "The best is yet to come", author: "Unknown", Date: new Date(2020, 3, 6), upvote: 21, downvote: 2},
      {id: 2, submitter: "Lena Lorr", quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela", Date: new Date(2020, 4, 12), upvote: 205, downvote: 20},
      {id: 2, submitter: "Malon Kups", quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron", Date: new Date(2020, 6, 12), upvote: 110, downvote: 50}
    ]
   }

  ngOnInit(): void {
  }

}
