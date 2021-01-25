import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { PostService } from "../posts.services";

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

  constructor(public postsService: PostService) {

  }


  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm()
  }
}
