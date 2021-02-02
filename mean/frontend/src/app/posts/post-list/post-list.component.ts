import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'

import { Post } from '../post.model'
import { PostService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];

  private postsSub: Subscription;
  // shortcut
  constructor(public postsService: PostService) {
  }

  // is recomended to use basic inicilization class in ngoinit
  ngOnInit() {
    this.postsService.getPosts()
    //subject has 3 arguments first is function that is cald whenever new value is recieved, second is error
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
