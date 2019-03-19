import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h1>
      Page Not Found
    </h1>
  `,
  styles: [
    'h1 { text-align: center; margin-top:10%; color:#027fff;}'
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
