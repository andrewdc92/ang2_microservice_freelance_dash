import {Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Proposal} from './proposal';

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
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.routeId = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      } //takes URL params, which is actually a string, and converts to usable int
    )
  }
}
//captures route id on page load
