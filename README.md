### RESTful CRUD Node Server
Server Install Process
npm install
npm start (or) nodemon app.js
should be available on port 3000

## How to use
When in the app, only the page "Employees should currently show (As of Feb 23 2020) until logging in. This displays shifts of employees for a potential company that would use the app.
 When logged in, the HR Manager (or supervisor) clicks on "Create Shift" to make one for an employee for that week. In the "Review Shift" page, the manager can edit the shift or delete it. 


# More in-depth info
When pulling up the app, it should display the list of employees and their shifts (Read part of crud). When loggling in, the user should be able to create shifts day by day when going to "Create shift". This information is sent over to the MongoDB. 

When going to review shifts, the user has the option to edit the existing shift, or delete it from the Database. All this will also display in the "Employees" page, which should just be the "Read" portion of the CRUD operations.

There is an option to "request shift cover". The intent is to have the information for the shift cover be used by GraphQL. This has not been successfull as of yet. I have not been able to figure out the connections and make it fully work. 