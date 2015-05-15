# prime_solo_db_01

It's time to get started using passport! Setting up passport isn't too hard, but your senior developer has already set it up for you. However, the client has come back with functionality changes and you've been tasked with making it happen!

##Go get the base project

You need to [go download](https://github.com/PrimeAcademy/prime_example_passport) the lead dev's code and put it in a new repo.

##Take it for a spin

The other dev didn't have time to finish the required functionality, let along make the changes needed. First thing is first. Run the application, register a test user and make sure the login screen works right. 

##Add missing fields

The client neglected to mention that users should also be able to save a first name, last name, and email address when signing up in the registration form. Make those changes. 

##Finish the users screen

First you need to update the users.js route to send the users.html file.

Then you need to lock down the users.html file. Do this by adding `req.isAuthenticated()` check to the express route.

Flesh out the users.html file. It should display a list of all users in the database (excluding passwords). You'll need to create an Ajax method to get the list of users, as well as a route to send the list of users that are in the database. The route that sends all users should also be protected by passport authenticate. **DO NOT SEND THE PASSWORDS IN THE RESPONSE** even though they're encrypted. 

**NOTE**
AJAX calls send Cookies if the url you're calling is on the same domain as your calling script. If you're authenticated, you shouldn't have a problem.
