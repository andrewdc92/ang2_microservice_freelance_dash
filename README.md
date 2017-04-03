# Manage your freelance proposals! 


You can draft up, organize, and email client proposals for freelance web design projects. 


To Use-

-Clone the repo
- 'cd' into 'freelance-frontend'
-  Run 'npm install', ensure all modules were installed successfully (there are specified Angular 2 version dependencies as Angular 4 just    rolled out)
- 'npm start' -> should see the build compilation in the terminal

-Open a new tab/window in your terminal, 'cd' into 'freelance_documents'
- Run 'bundle install' to pull in gems
- Run 'bundle exec rake db:setup' -> should see the database and migration initialized. Seed data included. 
- Run 'rails s -p 3001' 
- You should now have the Rails and Node servers running concurrently on port 3000 & 3001

-Open a third tab in terminal, 'cd' into 'freelance_proposal'
- Run 'bundle install' to pull in gems
- Run 'bundle exec rake db:setup' -> should see the database and migration initialized. Seed data included. 
- Run 'rails s -p 3002' 
- You should now have the Rails and Node servers running concurrently on port 3000, 3001, 3002
- Go to localhost:3000/documents to see the docs that are updated in real time from the Rails DB!
- Draft up some proposals and build out your client pipeline! 

Technologies used:
Angular 2/Typescript 
Rails 
Bootstrap/Angular.ui 
