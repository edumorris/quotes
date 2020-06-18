import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  ind: number;

  @Input() quote: Quotes;

  quotes: Quotes[] = [
    { id: 1, submitter: "Elly Konn", quote: "The best is yet to come", author: "Unknown", date: new Date(2020, 3, 6), upvote: 21, downvote: 2 },
    { id: 2, submitter: "Lena Lorr", quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela", date: new Date(2020, 4, 12), upvote: 205, downvote: 20 },
    { id: 2, submitter: "Malon Kups", quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron", date: new Date(2020, 6, 12), upvote: 110, downvote: 50 }
  ];

  highlightQuote() {
    for (let i = 0; i < this.quotes.length; i++) {
      let ind = 0;

      if (this.quotes[i].upvote < this.quotes[i++].upvote) {
        ind = i;
      } else {
        ind = i++;
      }
    }
  }

  deleteQuote(toDelete, index) {
    confirm('Confirm delete');
    if (toDelete) {
      this.quotes.splice(index, 1);
    }
  }

  addNewQuote(quote) {
    let quotesLength = this.quotes.length;
    quote.id = quotesLength + 1;
    quote.date = new Date(quote.date);
    this.quotes.push(quote);
  }

  constructor() { }

  ngOnInit() {
  }

}
