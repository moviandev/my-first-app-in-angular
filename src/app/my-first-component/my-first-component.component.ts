import { Component, OnInit } from '@angular/core';

/*
  Each component should have your own selector
  With selectors we can put it into html
  elements like <div myFirst></div> and even turn it into a css class putting a . in the start of the selector
  in html it should looks like <div class="myFirst"></div>
*/

@Component({
  selector: 'myFirst',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.scss']
})
export class MyFirstComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
