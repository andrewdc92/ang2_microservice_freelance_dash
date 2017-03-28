import { Component } from '@angular/core';
import { Document } from './document';

//adds decorator metadata- you can add metadata without defining it in the class itself
//ex of why it's useful- html view has access to pageTitle, since its all wrapped up under documents.component
@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})

export class DocumentsComponent{
  pageTitle: string = 'Document Dashboard'
  documents: Document[] = [
    {
      title: "my first doc",
      description: "cool this is it",
      file_url: "http://google.com",
      updated_at: "3/20/17",
      image_url: "https://i.ytimg.com/vi/0d32WxUouYg/maxresdefault.jpg",
    },
    {
      title: "my second doc",
      description: "cool this is it2",
      file_url: "http://google.com",
      updated_at: "3/20/17",
      image_url: "https://i.ytimg.com/vi/0d32WxUouYg/maxresdefault.jpg",
    },
    {
      title: "my third doc",
      description: "cool this is it3",
      file_url: "http://google.com",
      updated_at: "3/20/17",
      image_url: "https://i.ytimg.com/vi/0d32WxUouYg/maxresdefault.jpg",
    },
    {
      title: "my fourth doc",
      description: "cool this is it4",
      file_url: "http://google.com",
      updated_at: "3/20/17",
      image_url: "https://i.ytimg.com/vi/0d32WxUouYg/maxresdefault.jpg",
    },
    {
      title: "my fifth doc",
      description: "cool this is it5  ",
      file_url: "http://google.com",
      updated_at: "3/20/17",
      image_url: "https://i.ytimg.com/vi/0d32WxUouYg/maxresdefault.jpg",
    },

  ]
}
