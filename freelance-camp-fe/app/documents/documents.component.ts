import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { Document } from './document';
import {DocumentService} from './document.service';

//adds decorator metadata- you can add metadata without defining it in the class itself
//ex of why it's useful- html view has access to pageTitle, since its all wrapped up under documents.component
@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css'],
  providers: [DocumentService]
})
export class DocumentsComponent implements OnInit {
  pageTitle: string = "Document Dashboard"
  documents: Document[];
  errorMessage: string;
  mode = "Observable";

  constructor(
    private documentService: DocumentService,
  ) {}

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getDocuments());
    //first arg means the onInit fn fires immediatley, can set initial buffer, second arg is interval between calls

  }

  getDocuments() {
    this.documentService.getDocuments()
        .subscribe(
        documents => this.documents = documents
        error => this.errorMessage = <any>error
      );
  }
}
//most times OnInit is imported, it's implemented with the class
