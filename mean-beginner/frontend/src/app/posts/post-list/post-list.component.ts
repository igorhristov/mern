import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs'

import { Post } from '../post.model'
import { PostService } from "../posts.services";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  // posts = [{
  //   title: "first post", content: "this is content for first Post"
  // },
  // {
  //   title: "second post", content: "this is content for Second Post"
  // }, {
  //   title: "Third Post", content: "this is content for third Post"
  // }
  // ]

  posts: Post[] = []
  private postsSub: Subscription;

  // postsService: PostService
  constructor(public postsService: PostService) {
    // this.postsService = postsService
  }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
