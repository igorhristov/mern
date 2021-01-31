import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts = [
    { title: "first post", content: 'this is the first post' },
    { title: "second post", content: 'this is the second post' },
    { title: "third post", content: 'this is the third post' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
