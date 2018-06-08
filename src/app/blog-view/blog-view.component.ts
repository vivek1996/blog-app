import { RouterModule, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss'],
})
export class BlogViewComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    const val = this.route.paramMap;
    console.log(val);
  }

  ngOnInit() {}
}
