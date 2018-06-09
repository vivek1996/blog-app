import { RouterModule, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DATA } from './../mockdata';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss'],
})
export class BlogViewComponent implements OnInit {
  public currentBlog;
  data = DATA;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const val = this.route.snapshot.paramMap.get('blogId');
    // console.log(val);
    this.findCurrentData(val);
  }
  findCurrentData(id): any {
    for (const blog of this.data) {
      // tslint:disable-next-line:triple-equals
      if (blog.blogId == id) {
        this.currentBlog = blog;
      }
    }
  }
}
