For Phase 2:
        The current version of all the files in this branch has everything up to the Registration feature implemented by Noel and the Login feature implemented 
        by Ram. DB runs fine and there's no issue with adding and retrieveing data, so it's perfectly servicable for now.

For Phase 3:
        The specs say that we need to deploy the application to something like Heroku, and for that we need to transition from a local to an online database.
        I've taken care of that somewhat by creating the connection to an online MongoDB database in my own account, but for now, the code in this branch still
        uses the localhost MongoDB database.
        
Content of the .env file:
        MONGODB_URI=mongodb://localhost:27017/CCAPDEV-PROJECT
        ONLINE_URL=mongodb+srv://Admin:C0tDKeQ0wr9XXSxy@ccapdev.zzznx.mongodb.net/CCAPDEV?retryWrites=true&w=majority
        SERVER_PORT=3000
        
        -> To enable the connection to the online database, copy and paste the lines above into your .env file and replace the url in the db.js from the localhost 
        one to the one under ONLINE_URL. MONGO_URI is there cause we still need the local connection for now, but in Phase 3, it will change to the online completely.
        
        Example (given dotenv is installed):
          const dotenv = require('dotenv');
          dotenv.config();
          const mongoose = require('mongoose');

          const url = process.env.ONLINE_URL;
        
        If dotenv isn't installed, and there's no .env file:
                const mongoose = require('mongoose');

                const url = '=mongodb+srv://Admin:C0tDKeQ0wr9XXSxy@ccapdev.zzznx.mongodb.net/CCAPDEV?retryWrites=true&w=majority';
                
                
About the online MongoDB:
          I've tested it out a bit, and it seems that the controller doesn't add any new documents to the database, so the controller may need an overhaul to fully
          transition to the online DB.
          
          CORRECTION:
                I managed to get it to work somehow. I only edited the RegisterModel.js to have the schema model 'Register' assigned to a variable and exported it.
                Don't know how exactly that amde it work, but it does now. It's possible for us to ditch the local db now at this point as there's no difference 
                between how the online and local work. It's just that one is on the cloud, and is required for phase 3.
        
