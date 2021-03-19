import { Component, EventEmitter, Output } from '@angular/core';
// import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
})
export class EditorComponent {
 @Output() public dataArticle = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }

  // ckeditorContent;
  // ckeditorContent: string = '<p>Some html</p>';

  public Editor = DecoupledEditor;

  public onChange( { editor }: ChangeEvent) {
    // editor.ui.getEditableElement().parentElement.insertBefore(
    //   editor.ui.view.toolbar.element,
    //   editor.ui.getEditableElement()
    // );
    const data = editor.getData();
    console.log('data',data)

    this.dataArticle.emit(data);

  }
  

}

