# Learing Generating Web Apps

This sample teaches you how to generate customzed web apps for standard templates given a config file.


You basically need two thing:

a. A base web app. The source code for the base app is available at: ./src

b. A config file. A sample config file is available at appConfig.json. You can create as many of these as you like.



To setup the generator:

Go to the root directory and run: 

npm install

To generate the sample app give command: 

gulp gen



To run the generated app:

cd ziaApp

Install npm modules: npm install

Install bower dependencies bower install

Start up the server: node server.js

View in browser at http://localhost:8080

You can create your own config file and give this command to generate app:

gulp gen --config fileName.json


