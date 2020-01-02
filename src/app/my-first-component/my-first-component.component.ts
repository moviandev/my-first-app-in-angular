import { Component, OnInit } from '@angular/core';

/*
  Each component should have your own selector
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
