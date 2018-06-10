import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { observable } from 'rxjs/observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
@Injectable({
  providedIn: 'root',
})
export class BlogHttpService {
  public currentBlog;
  public allBlogs;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  constructor(private _http: HttpClient) {
    console.log('service con called');
  }
  public getAllBlogs(): any {
    // tslint:disable-next-line:max-line-length
    const response = this._http.get(
      this.baseUrl +
        '/all?authToken=ZDNjYmRhZjZmNWQwMTc2NmQzY2JhNmQwOTA1Y2RhYTY5NzAzNjYxOWQwZjUzMmNiZDg4YTIzMzM0NjY4N2FmZjM5ZjgzNjQwMmNkMDYzMDM2ZGE5MWRkYzk1ZDU2ZmZiNWRkNzdiM2RlMTIzNzI0YjhjYzk0N2VlOTQ0YTFjNWQ5ZA=='
    );
    console.log(response);
    return response;
  }
  public getSingleBlogInformation(currentBlog): any {}
}
