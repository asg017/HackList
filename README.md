# HackList
Place to find, share, and learn different API's and tools for side projects and hackathons

## Deployment Website
hacklist-v1.herokuapp.com


Google Doc for documentation/tutorials: https://docs.google.com/document/d/1ErMxju2B2--ng23LFqnrAkvprpCK87gSx7qEjRaV6F8/edit?usp=sharing

## Project Tree

Explanations of how the source code is structured.

#### node_modules
This contains all the different node modules that are needed for this app. For example, if we ran:
 `npm install some-package --save`
 
Then there will be a `some-package` directory inside `node_modules` that contains the sourcecode for the `some-package` module.

There will also be directory for each dependency for all the modules we have. So if `some-package` had dependency modules `dependent-1` and `dependent-2`, there will be directories for those modules, too. Some modules, for example, `express`, has a TON of different dependecies, so the `node_modules` directory can be quite large. We will not directly change the contents of `node_modules` much in this project (except if we do the `npm install` command).

#### routes

This directory will contain other node modules that we will create to handle routing for our server.

Routing tells our server what a user wants, given what links they are trying to follow. For example, if a user makes a request to the server by vising the link `http://hacklist-v1.herokuapp.com/users/23`, we know that the user wants to access info about user #23 on our server. This is called routing.

This directory is 100% for organizing our code. These modules could have been all inside `index.js` in the root folder, but that would have been very large and confusing. By splitting it into different directories, adding new features and debugging will be a lot easier.

inside `routes`, we have two files, `api.js` and `normal.js`. The router found in `api.js` handles routes for API access to HackList. For example, on the client-side, we will need to execute some HTTP requests in JavaSCript in order to do stuff, like a user making a new post, or a user fetching more posts to view (without refreshing the page). By having a seperate API handler, it'll keep these AJAX requests seperate.

`normal.js` is basically for everything else. This routing handles the pages that most users will be seeing. These routes are the ones that render actual HTML pages dynmically, using EJS. 

Ideally, this `routes` directory will be broken down and organized more later in the future, giving a file tree like this:

```
routes
|     api
|           users
|           api_submissions
|           comments
|           reports
|           companies
|     normal
```

Also again, for the sake of organization.


#### static
All files in this directory can be accessed publically by anyone. There are some standard directories inside for many media and file types, like `static/css` or `static/js`. These cannot be dynamically loaded.

#### views
These are where `.ejs` files are located. EJS is a templating service that we are currently using for this project (unless we can figure our how React works). `.ejs` files are mostly html files, but have their own specific syntax when it comes ot templating. There is a `partials` directory inside, that contains html snippets that are used regularly in many different files (ex. navbar, footer). 


#### data
This is only a temporary directory until we get a database working. There's a generic .json file inside that is a placeholder to see fake data until a database is up and running.

