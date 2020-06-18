import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { HighlightDirective } from './highlight.directive';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    HighlightDirective,
    QuoteDetailsComponent,
    NavBarComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
