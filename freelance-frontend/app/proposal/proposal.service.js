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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var ProposalService = (function () {
    function ProposalService(http) {
        this.http = http;
        this.proposalsUrl = "http://localhost:3002/proposals";
    }
    ProposalService.prototype.getProposals = function () {
        return this.http.get(this.proposalsUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
        //connects to API, it's the angular datatype Response
        //maps the response data to match the document.ts interface, just like basic templating.
        // the headers/keys of response data must match document interface (the front end schema)
    };
    ProposalService.prototype.getProposal = function (id) {
        return this.http.get(this.proposalsUrl + "/" + id + '.json');
    };
    //connects angular API to Rails application, need this to create persistent objects in the db
    ProposalService.prototype.createProposal = function (proposal) {
        var headers = new http_1.Headers({ 'Content-type': 'application/json' }); // as obvious via Postman, header has to be exact otherwise the post req will hit the err handler
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.proposalsUrl, JSON.stringify(proposal), {
            headers: headers
        }).map(function (res) { return res.json(); });
        //this.proposalsUrl = the API connection, pass in the proposal and turn it into a string
    };
    ProposalService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    return ProposalService;
}());
ProposalService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProposalService);
exports.ProposalService = ProposalService;
//set to whatever the URL query is. the constructor creates the http connection
//# sourceMappingURL=proposal.service.js.map