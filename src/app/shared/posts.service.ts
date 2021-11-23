import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FbCreateResponse, Post} from './interfaces';
import {environment} from '../../environments/environment';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [
    {
      id: '1',
      author: 'Alina',
      title: 'first post',
      text: 'dnejdne',
      date: new Date()
    }
  ];

  constructor(private http: HttpClient) {
  }

  // create(post: Post): void {
  //   this.posts = {
  //     ...this.posts,
  //     post
  //   };
  // }

  getAll(): Post[] {
    return this.posts;
  }

  getById(id: string): Post {
    return this.posts.filter(post => post.id === id)[0];
  }
}
