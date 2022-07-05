About this Application:
    This application was developed by Noel Angelo Pastrana, Jairus Ramiel C. Santiago, and Ramon Antonio Mapua of CCAPDEV S15 and was developed using NodeJS and 
    the Express Framework for NodeJS. The database Object Data Modelling (ODM) library used to implement MongoDB for data storage and manipulation was Mongoose.


How to run this application locally:
       
       1. Download the Application in this main branch, either through ZIP file or a git clone 
                1.a If you downloaded the files through a ZIP file, simplt extract the files in the directory you want to use the app in.
                1.b If want to download through a git clone, open your Command Line (CMD) by typing cmd in either the address bar of your
                Windows Explorer, or the search bar of your OS and hit enter.
                Then, enter the directory or folder that the git clone will be downloaded to, and simply enter this line and wait for the
                cloning process to complete:
                
                                        git clone https://github.com/RamielSantiago/CCAPDEV-MP.git
                                        
       2. Once the application files have been downloaded, navigate to the application folder in your Command Line (CMD) and enter "npm install".
       Or, if you are using Visual Studio Code, open the folder directly there and open a terminal, then enter "npm install" in the terminal. This
       process will install the necessary NPM packages needed to run the application.
       
       3. Once the NPM packages have been installed, create a file named ".env" and copy and paste the following lines into the file:
            
                                        MONGODB_URI=mongodb://localhost:27017/CCAPDEV-PROJECT
                                        ONLINE_URL=mongodb+srv://Admin:C0tDKeQ0wr9XXSxy@ccapdev.zzznx.mongodb.net/CCAPDEV?retryWrites=true&w=majority
                                        SERVER_PORT=3000
                                
          Then, open the db.js file in the models folder and choose the database type to use for your copy of the application and choose between the 
          variables "online_url" and "local_url". As the names suggest, the choice is between a local and online MongoDB database. If you choose to 
          use the online database, then leave it as is. Otherwise, comment out the mongoose.connect function that contains the variable "online_url"
          by enclosing it in between /* and */ in that order similar to the commented out code directly below it. Afterwards, delete the /* and */ 
          that encloses the mongoose.connect function that has the"local_url" variable.
          
       4. Once the NPM packacges are installed and the .env files and database settings are take care of, it is time to start the application and server. 
       In your VS Code Terminal or your Command Line (Provided the directory is still the application folder), enter either of these two lines to start 
       the application:
       
                                        npm start
                                        node app.js
                                
        These two are interchangable so which one to use is up to preference. And now, it is time to open your browser and enter this web address in the 
        address bar:
                                        http://localhost:3000/
                                        
        This will direct you to the port the application is currently running in. With that, the application should be fully up and running. To terminate
        the current run of the server and close the application, simply enter Ctrl+C in yout VS Code Terminal or Command Line.
                                
       
                                        
                              
                           
                    
