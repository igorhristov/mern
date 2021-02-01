import { Component, Input } from '@angular/core';

import { Post } from '../post.model'
import { PostService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
  // posts = [
  //   { title: "first post", content: 'this is the first post' },
  //   { title: "second post", content: 'this is the second post' },
  //   { title: "third post", content: 'this is the third post' },
  // ]

  @Input() posts: Post[] = []

  // postService: PostService;
  //constructor is function that is called when angular is creating new istance of this component
  // constructor(postsService: PostService) {
  //   this.postService = postsService
  // }

  // shortcut
  constructor(public postsService: PostService) {
  }
}
