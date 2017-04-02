import {Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { Proposal} from './proposal';
import { ProposalService} from './proposal.service';


@Component({
  moduleId: module.id,
  selector: 'proposal-show',
  templateUrl: 'proposal-show.component.html',
  styleUrls: ['proposal-show.component.css']
})

export class ProposalShowComponent implements OnInit {
  id: number;
  routeId: any;

  //ahh dependency injection...hello old friend
  constructor(
    private http: Http,
    private proposalService: ProposalService,
    private route: ActivatedRoute
  ) {}

//input declares the Input to utilize two way data binding
  @Input()
  proposal: Proposal;

  ngOnInit(): void {
    let proposalRequest = this.route.params
        .flatMap((params: Params) =>
            this.proposalService.getProposal(+params['id']));
      proposalRequest.subscribe(response => this.proposal = response.json());
       //the '+' takes URL params, which is actually a string, and converts to usable int
  }
}
//captures route id on page load
