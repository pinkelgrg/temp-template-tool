import { Component, OnInit, Input } from "@angular/core";
import {AceEditorDirective, AceEditorComponent} from 'ng2-ace-editor';
@Component({
  selector: "app-template-container",
  templateUrl: "./template-editor-viewer-container.html"
})

export class TemplateContainerComponent implements OnInit{
  text:string = "";
  ngOnInit(){
  }
  onChange(code) {
        console.log("new code", code);
    }

}