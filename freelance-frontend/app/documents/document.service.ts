import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Document} from './document';


@Injectable()
export class DocumentService {
  private documentsUrl = "http://localhost:3001/freelance_documents";

  constructor(
    private http: Http
  ) {}

  getDocuments(): Observable<Document[]> {
    return this.http.get(this.documentsUrl)
                    .map((response: Response) => <Document[]>response.json())
                    .catch(this.handleError);
                      //connects to API, it's the angular datatype Response
                      //maps the response data to match the document.ts interface, just like basic templating.
                      // the headers/keys of response data must match document interface (the front end schema)
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

//set to whatever the URL query is. the constructor creates the http connection
