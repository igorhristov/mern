import { Component } from "@angular/core";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',

})

export class PostCreateComponent {

  newPost = 'No Content';



  onAddPost(postInput: HTMLTextAreaElement) {
    this.newPost = postInput.value
  }
  enteredValue = ''
  newPost1 = 'No Content';
  onAddPost2() {
    this.newPost1 = this.enteredValue;
  }

}
