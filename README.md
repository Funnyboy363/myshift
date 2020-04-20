# myShift Attempted RESTful CRUD Node Server and GraphQL Project
This is an app for managers and supervisors to create and post weekly shifts.

[MyShift Official Site](https://myshift-gs.herokuapp.com/ "myshift offical site")

### RESTful CRUD Node Server

`git clone https://github.com/Funnyboy363/myshift`

cd into /myshift

### Server Install Process

`npm install`

The script says to run the app using nodemon with app.js. In the gitbash, type the following:

`npm start`

This will start the app and run it up. The port should be available on 3000.

### How to use
When in the app, only the page "Employees should currently show (As of Feb 23 2020) until logging in. This displays shifts of employees for a potential company that would use the app.
 When logged in, the HR Manager (or supervisor) clicks on "Create Shift" to make one for an employee for that week. In the "Review Shift" page, the manager can edit the shift or delete it.


 ### Filling out a schedule

 When filling out a schedule for an employee, here is the information that you can fill out that sends to the database. 

⋅⋅* Name of employee
⋅⋅* Monday shift
⋅⋅* Tuesday shift
⋅⋅* Wednesday shift  
⋅⋅* thursday shift
⋅⋅* friday shift
⋅⋅* saturday shift
⋅⋅* Description

That info shows up to Create, Read, Update and Delete....

### More in-depth info
When pulling up the app, it should display the list of employees and their shifts (Read part of crud). When loggling in, the user should be able to create shifts day by day when going to "Create shift". This information is sent over to the MongoDB. 

When going to review shifts, the user has the option to edit the existing shift, or delete it from the Database. All this will also display in the "Employees" page, which should just be the "Read" portion of the CRUD operations.

There is an option to "request shift cover". The intent is to have the information for the shift cover be used by GraphQL. This has not been successfull as of yet. I have not been able to figure out the connections and make it fully work. 