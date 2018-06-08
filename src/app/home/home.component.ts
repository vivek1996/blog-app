import { DATA } from './../mockdata';
import { Component, OnInit } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  blogData = DATA;

  constructor() {}

  ngOnInit() {}
}
