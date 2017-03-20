"use strict";
var Proposal = (function () {
    function Proposal(id, customer, portfolio_url, tools, estimate_hours, hourly_rate, weeks_to_complete, client_email) {
        if (portfolio_url === void 0) { portfolio_url = 'http://'; }
        this.id = id;
        this.customer = customer;
        this.portfolio_url = portfolio_url;
        this.tools = tools;
        this.estimate_hours = estimate_hours;
        this.hourly_rate = hourly_rate;
        this.weeks_to_complete = weeks_to_complete;
        this.client_email = client_email;
    }
    return Proposal;
}());
exports.Proposal = Proposal;
// 15, 'customer1', 'https://andrewdc92.github.io', 'Ruby on Rails', 100, 120, 4,
// 'andrew@example.com'
//# sourceMappingURL=proposal.js.map