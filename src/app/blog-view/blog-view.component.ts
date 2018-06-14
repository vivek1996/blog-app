import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { DATA } from './../mockdata';
import { BlogHttpService } from './../blog-http.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit {
  public currentBlog;
  public currentBlogId = this.route.snapshot.paramMap.get('blogId');
  // data = DATA;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogHttpService: BlogHttpService,
    private toastr: ToastrService,
    private location: Location
  ) {}
  ngOnInit() {
    this.blogHttpService.getSingleBlogInformation(this.currentBlogId).subscribe(
      data => {
        this.currentBlog = data.data;
      },
      error => {
        console.log(error.errorMessage);
      }
    );
  }
  public deleteThisBlog(): any {
    this.blogHttpService.deleteBlog(this.currentBlogId).subscribe(
      data => {
        console.log(data);
        this.toastr.success('Blog Deleted Successfully');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1500);
      },
      error => {
        console.log(error);
        this.toastr.warning(error.errorMessage);
      }
    );
  }
  public goBackToPreviousPage() {
    this.location.back();
  }
}
