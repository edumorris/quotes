import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quotes;
  @Output() toDelete = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  quoteDelete(deleter: boolean) {
    this.toDelete.emit(deleter);
  }

  upvote() {
    this.quote.upvote += 1;
  }

  downvote() {
    this.quote.downvote += 1;
  }

}
