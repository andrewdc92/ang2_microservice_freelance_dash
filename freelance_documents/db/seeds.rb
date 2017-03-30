

8.times do |d|
  FreelanceDocument.create!(
title: "Document #{d}",
description: "Today is thursday, it's an excellent day.
tons of work accomplished. can't believe tomorrow is Friday already. SAD!",
file_url: "https://docs.google.com/document/d/1CYIPNjGh_AzSN_koyFow2eUWhz9wHEPBEYAx_GhnoPM/edit?usp=sharing",
image_url: "http://static.boredpanda.com/blog/wp-content/uploads/2015/11/maine-coon-cats-2__605.jpg"
)
end
