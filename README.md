# myShift Attempted RESTful CRUD Node Server and GraphQL Project
This is an app for managers and supervisors to create and post weekly shifts.

[MyShift Official Site](https://myshift-gs.herokuapp.com/ "myshift offical site")

## RESTful CRUD Node Server
#### Step 1: Download and install dependencies

`git clone https://github.com/Funnyboy363/myshift`

cd into /myshift

### Server Install Process
Begin by installing any packages needed to run the project. npm install will install anything needed.

`npm install`

#### Step 2: Starting the server for the app
The script says to run the app using nodemon with app.js. In the gitbash, type the following:

`npm start`

This will start the app and run it up. Open a window and type in localhost://3000

#### Step 3: Using the app

When in the app, only the page "Employees should currently show (As of Feb 23 2020) until logging in. This displays shifts of employees for a potential company that would use the app.
 When logged in, the HR Manager (or supervisor) clicks on "Create Shift" to make one for an employee for that week. In the "Review Shift" page, the manager can edit the shift or delete it.

 ### Filling out a schedule

 **When filling out a schedule for an employee, here is the information that you can fill out that sends to the database.** 

* Name of employee
* Monday shift
* Tuesday shift
* Wednesday shift  
* thursday shift
* friday shift
* saturday shift
* Description

That info shows up to Create, Read, Update and Delete....

### Schema for the shifts

If there is a need to change the schema, it is located in 

`models > product.js`

you will also want to make sure to adjust the information to do CRUD operations located in:

`controllers > admin.js`


### Input your own Database

Please go to mongodb atlas (if you have not created an account, please do so) and create a database of your own to use for this app. 

You will be able to input the database information in `app.js`
the info to copy will be something that looks liks this:

```const MONGODB_URI = 'mongodb+srv://<username>:<password>@testcluster-tcnpj.mongodb.net/test?retryWrites=true&w=majority';```

### More in-depth info
When pulling up the app, it should display the list of employees and their shifts (Read part of crud). When logging in, the user should be able to create shifts day by day when going to "Create shift". This information is sent over to the MongoDB. 

When going to review shifts, the user has the option to edit the existing shift, or delete it from the Database (Review Shifts). All this will also display in the "Employees" page, which should just be the "Read" portion of the CRUD operations. 

**You do not need to be logged in to view submitted shifts**

There is an option to "request shift cover". The intent is to have the information for the shift cover be used by GraphQL. This has not been successfull as of yet. I have not been able to figure out the connections and make it fully work. 


# Using GraphQL with Prisma and Docker

Currently, when using, make sure to not have the app running.
Prisma has already been initialized on a demo server in the prisma cloud. 

First, make sure you have docker installed on your computer, then type `docker-compose up -d` to get it started.

Check `datamodel.prisma` to see the schema set up for this. You can change it as long as you match the schema to post.

To deploy the prisma service type `prisma deploy` in the console.
To open the playground, type `prisma playground` in the console.

An ideal mutation to post in the playground would be the following:
` mutation {
    createUser(data: {
        name: "Owen Mccregor"
    }) {
        id
    }
} `

Click Execute Query (play button) in the center and it should output response information.

