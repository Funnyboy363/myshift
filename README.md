# User Authentication

## What is Authentication?
-Need to be able to differenciate between non logged in users and logged in. 

## How is authentication implemented?
user does a login request, goes to the server and a session. communicates to the database. This stores info that user is authenticated.
Returns a success response and stores the cookie to the session.
The cookie stores the session ID

## CRSF Attacks
-Cross-Site Request Forgery

User --> interacts with server and database and a session. Frontend uses cookies
intend request, send money to friend
User is tricked onto a fake site, can look like your own page, but is a different one. via link in email. Intended request to send money to friend C. 

### Authentication
-means that not every visitor of the page can view and interact with everything
-has to happen on the server-side and build up on sessions
-you can protect routes by checking the session controlled login status right before you access a controller action

### Security & UX
-Passwords should be stored in a hashed form
-CSRF attacts are a real issue and you should therefore include a CSRF protection in any application you build
-for better user experience, you can flash data/messages into the session which you then can disply in your views.# myshift
