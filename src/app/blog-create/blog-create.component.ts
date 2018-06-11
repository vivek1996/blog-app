import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from './../blog-http.service';
@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.scss'],
})
export class BlogCreateComponent implements OnInit {
  constructor(private blogHttpService: BlogHttpService) {}
  public blogTitle: string;
  public blogDescription: string;
  public blogBody: string;
  public blogCategory: string;
  public possibleCategories = ['Comedy','Action','Technology'];
  ngOnInit() {}
  public createBlog(): any {
    const blogData = {
      title : this.blogTitle,
      description : this.blogDescription,
      blogBody : this.blogBody,
      categoty : this.blogCategory,
    };
    console.log(blogData);
    this.blogHttpService.createBlog(blogData).subscribe(
      data => {
        console.log('blog Created ', data);
      },
      error => {
        console.log('Error in Blog Creation', error.errorMessage);
      }
    );
  }
}
