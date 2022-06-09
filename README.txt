
- DO NOT EDIT ANYTHING IN package.json AND package-lock.json -

Dependencies to install:
express
express-handlebars
express-favicon
dotenv
mongodb

Command to install dependecies through npm:
npm install <package name>

Command to run the server:
node app

The .env file is hidden, but should be part of the download from this branch.
In case it isn't, the content is as follows:

MONGODB_URI=mongodb://localhost:27017
SERVER_PORT=3000
DB_NAME=CCAPDEV-PROJECT

- The implementation is probably still lacking for mongodb since I didn't put
a line to close the db connection.
- What I did uses express and express-handlebars, but there's nothing for rendering profiles 
since I thought we could do that after being able to add data to the db from the forms.
- The GET functions on the login and register are for rendering the page only. There can be a separate POST
function for form handling and such.
- We need to figure out how to generate the posts using the sample users we're going to make using handlebars.
- I tried to make favicon work, but failed, it's just a custom icon for the tab in the browser for our web app, but
I thought it'd be neat to have it. Hope you guys can implement that. The logo for it is in the image folder in public,
but you can change it if you want or not do it at all.