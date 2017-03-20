"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var proposal_1 = require('./proposal');
var ProposalListComponent = (function () {
    function ProposalListComponent() {
        this.proposalOne = new proposal_1.Proposal(15, 'company1', 'https://andrewdc92.github.io', 'Ruby on Rails', 100, 120, 4, 'andrew@example.com');
        this.proposalTwo = new proposal_1.Proposal(99, 'company2', 'https://andrewdc92.github.io', 'Ruby on Rails', 100, 120, 4, 'andrew@example.com');
        this.proposalThree = new proposal_1.Proposal(300, 'company3', 'https://andrewdc92.github.io', 'Ruby on Rails', 100, 120, 4, 'andrew@example.com');
        this.proposalFour = new proposal_1.Proposal(411, 'company4', 'https://andrewdc92.github.io', 'Ruby on Rails', 100, 120, 4, 'andrew@example.com');
        //an array of the Proposal data type, need to reference this
        // to update with the most current instance of the proposal
        this.proposals = [
            this.proposalOne,
            this.proposalTwo,
            this.proposalThree,
            this.proposalFour
        ];
    }
    ProposalListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'proposal-list',
            templateUrl: 'proposal-list.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProposalListComponent);
    return ProposalListComponent;
}());
exports.ProposalListComponent = ProposalListComponent;
//# sourceMappingURL=proposal-list.component.js.map