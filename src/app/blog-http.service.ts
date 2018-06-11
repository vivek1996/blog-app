import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
@Injectable({
  providedIn: 'root',
})
export class BlogHttpService {
  public currentBlog;
  public allBlogs;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  // tslint:disable-next-line:max-line-length
  public authToken = `authToken=ZDNjYmRhZjZmNWQwMTc2NmQzY2JhNmQwOTA1Y2RhYTY5NzAzNjYxOWQwZjUzMmNiZDg4YTIzMzM0NjY4N2FmZjM5ZjgzNjQwMmNkMDYzMDM2ZGE5MWRkYzk1ZDU2ZmZiNWRkNzdiM2RlMTIzNzI0YjhjYzk0N2VlOTQ0YTFjNWQ5ZA==`;
  constructor(private _http: HttpClient) {
    // console.log('service con called');
  }
  public getAllBlogs(): any {
    // tslint:disable-next-line:max-line-length
    const response = this._http.get(`${this.baseUrl}/all?${this.authToken}`);
    this.allBlogs = response;
    console.log(response);
    return response;
  }
  public getSingleBlogInformation(currentBlogId): any {
    const myResponse = this._http.get(
      `${this.baseUrl}/view/${currentBlogId}?${this.authToken} `
    );
    return myResponse;
  }
  public deleteBlog(blogId): any {
    const data = {};
    const myResponse = this._http.post(
      `${this.baseUrl}/${blogId}/delete?${this.authToken}`,
      data
    );
    return myResponse;
  }
  public createBlog(blogData): any {
    const myResponse = this._http.post(
      `${this.baseUrl}/create?${this.authToken}`,
      blogData
    );
    return myResponse;
  }
  public editBlog(blogId, blogData): any {
    const myResponse = this._http.put(
      `${this.baseUrl}/${blogId}/edit?${this.authToken}`,
      blogData
    );
    return myResponse;
  }
}
