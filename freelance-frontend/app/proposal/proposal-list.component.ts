import {Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';

import {Proposal } from './proposal';
import {ProposalService} from './proposal.service';


@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css'],
  providers: [ProposalService]
})

export class ProposalListComponent implements OnInit {
  proposals: Proposal[];
  errorMessage: string;
  mode = "Observable";

  constructor(
    private proposalService: ProposalService,
    private router: Router
  ) {}

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getProposals());
    //first arg means the onInit fn fires immediatley, can set initial buffer, second arg is interval between calls
  }
  getProposals() {
    this.proposalService.getProposals()
        .subscribe(
        proposals => this.proposals = proposals,
        error => this.errorMessage = <any>error
      );
  }

  goToShow(proposal: Proposal): void {
    let link = ['/proposals', proposal.id];
    this.router.navigate(link);
  }
}
