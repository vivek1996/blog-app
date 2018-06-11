import { RouterModule, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { DATA } from './../mockdata';
import { BlogHttpService } from './../blog-http.service';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss'],
})
export class BlogViewComponent implements OnInit {
  public currentBlog;
  // data = DATA;
  constructor(
    private route: ActivatedRoute,
    private router: RouterModule,
    private blogHttpService: BlogHttpService
  ) {}

  ngOnInit() {
    const currentBlogId = this.route.snapshot.paramMap.get('blogId');
    this.blogHttpService.getSingleBlogInformation(currentBlogId).subscribe(
      data => {
        this.currentBlog = data.data;
      },
      error => {
        console.log(error.errorMessage);
      }
    );
  }
}
