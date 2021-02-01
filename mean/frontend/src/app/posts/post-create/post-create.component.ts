import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {

  newPost1 = 'No Content';

  onAddPost1(postInput: HTMLTextAreaElement) {
    this.newPost1 = postInput.value
  }
  enteredValue = ''
  newPost2 = 'No Content';
  onAddPost2() {
    this.newPost2 = this.enteredValue;
  }



  enteredTitle = ""
  enteredContent = ""
  @Output() postCreated = new EventEmitter()
  onAddPost() {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    }

    this.postCreated.emit(post)
  }

}
