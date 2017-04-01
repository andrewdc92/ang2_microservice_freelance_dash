#
8.times do |proposal|
  Proposal.create!(
    customer: "Customer #{proposal}",
    portfolio_url: "https://andrewdc92.github.io/",
    tools: "Ruby on Rails, Angular 2, Postgres",
    estimated_hours: (80 + proposal),
    hourly_rate: 100,
    weeks_to_complete: 8,
    client_email: 'andrew.cordivari@gmail.com',
  )
end
