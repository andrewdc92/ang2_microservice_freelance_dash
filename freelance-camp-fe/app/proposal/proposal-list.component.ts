import {Component } from '@angular/core';
import {Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'company1', 'https://andrewdc92.github.io', 'Ruby on Rails', 100, 120, 4,
    'andrew@example.com')
  proposalTwo: Proposal = new Proposal(99, 'company2', 'https://andrewdc92.github.io', 'Ruby on Rails', 100, 120, 4,
      'andrew@example.com')
  proposalThree: Proposal = new Proposal(300, 'company3', 'https://andrewdc92.github.io', 'Ruby on Rails', 100, 120, 4,
        'andrew@example.com')
  proposalFour: Proposal = new Proposal(411, 'company4', 'https://andrewdc92.github.io', 'Ruby on Rails', 100, 120, 4,
          'andrew@example.com')

          //an array of the Proposal data type, need to reference this
          // to update with the most current instance of the proposal
          
  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree,
    this.proposalFour
  ]
}
