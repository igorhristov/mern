import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

import { Post } from "./post.model";

// this can be done inside modules inside app module inside providers
@Injectable({ providedIn: 'root' })

export class PostService {
  // private === you cant edit from outside
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = { title: title, content: content }
    this.posts.push(post)
    this.postUpdated.next([...this.posts])
  }

}
