import { Component, Input } from "@angular/core";

import { Post } from '../post.model'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  // posts = [{
  //   title: "first post", content: "this is content for first Post"
  // },
  // {
  //   title: "second post", content: "this is content for Second Post"
  // }, {
  //   title: "Third Post", content: "this is content for third Post"
  // }
  // ]

  @Input() posts: Post[] = []
}
