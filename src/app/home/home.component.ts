// import { DATA } from './../mockdata';
import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from './../blog-http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // blogData = DATA;
  public blogData = [];
  constructor(private blogHttpClient: BlogHttpService) {}

  ngOnInit() {
    this.blogData = this.blogHttpClient.getAllBlogs().subscribe(
      data => {
        console.log(data.data);
        console.log('success in req');
        this.blogData = data.data;
      },
      error => {
        console.log('error in request');
        console.log(error.errorMessage);
      }
    );
  }
}
