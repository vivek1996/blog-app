import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BlogHttpService } from './../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss'],
})
export class BlogEditComponent implements OnInit {
  public currentBlog;
  public possibleCategories = ['Comedy', 'Action', 'Technology', 'Horror'];
  public currentBlogId = this.route.snapshot.paramMap.get('blogId');
  constructor(
    private blogHttpService: BlogHttpService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
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

  public editThisBlog(): any {
    this.blogHttpService
      .editBlog(this.currentBlogId, this.currentBlog)
      .subscribe(
        data => {
          this.toastr.success('Blog Edited Successfully');
          setTimeout(() => {
            this.router.navigate(['/blog', this.currentBlogId]);
          }, 1500);
        },
        error => {
          console.log('Error in Blog Edit', error.errorMessage);
          this.toastr.warning(error.errorMessage);
        }
      );
  }
}
