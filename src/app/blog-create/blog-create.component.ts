import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from './../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.scss'],
})
export class BlogCreateComponent implements OnInit {
  constructor(
    private blogHttpService: BlogHttpService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}
  public blogTitle: string;
  public blogDescription: string;
  public blogBody: string;
  public blogCategory: string;
  public possibleCategories = ['Comedy', 'Action', 'Technology', 'Horror'];
  ngOnInit() {}
  public createBlog(): any {
    const blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBody,
      category: this.blogCategory,
    };
    console.log(blogData);
    this.blogHttpService.createBlog(blogData).subscribe(
      data => {
        console.log('blog Created ', data);
        this.toastr.success('Blog Created Successfully');
        setTimeout(() => {
          this.router.navigate(['/blog', data.data.blogId]);
        }, 1500);
      },
      error => {
        console.log('Error in Blog Creation', error.errorMessage);
        this.toastr.warning(error.errorMessage);
      }
    );
  }
}
