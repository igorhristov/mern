import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Post } from '../post.model'

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  // enteredValue =''
  // newPost = "No Content";
  enteredContent = ""
  enteredTitle = ""
  @Output() postCreated = new EventEmitter<Post>()

  // onAddPost(postInput: HTMLTextAreaElement) {
  //   console.dir(postInput);

  //   this.newPost = postInput.value
  // }
  // onAddPost() {
  //   this.newPost = this.enteredValue;
  // }

  // onAddPost() {
  //   const post: Post = { title: this.enteredTitle, content: this.enteredContent }
  //   this.postCreated.emit(post)
  // }
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: Post = { title: form.value.title, content: form.value.content }
    this.postCreated.emit(post)
  }
}
