## Project Name

ReactJS Assignment for ajay koli

## Credentials for do logged into system.
username : admin@fake.com
password : admin
-----------------------------------------------

An application used to show the list of reservations from state, built with React, Hooks, JavaScript, and CSS.

## Installation and Setup Instructions

Do clone for below url. 


You will need `node` and `npm` installed globally on your machine.

Go inside the repo:

`cd ajaykoli_react_challenge`

Installation:

`npm install`

To Run Test Suite:

`npm test`

To Start Server:

`npm run start`
`npm run serve`

To Visit App:

`localhost:3000`

## Tech Stack

1. React ^16.11.0
2. React DOM ^16.11.0
3. Hooks
4. CSS
5. HTML
6. JS

##  Coding Challenge Explanation:

1. I have use the `create-react-app` boilerplate to minimize initial setup and 
   invest more time in diving into weird technological rabbit holes.
2. App.js is injecting main login and reservation component to display login page and 
   Reservation CRUD operation.The components extracts the data from the local state.
3. Components folder has three sub-folders.
   i. common folder:- This includes FlashMessage.js. This components are globally 
      created inorder to reuse the code by the other components in the reservations folder.
   ii. auth folder:- This includes Login.js file.
   iii. reservations folder:- This includes Form.js and List.js files.
4. __tests__ :- This folder includes the testing of code.
5. index.css:- This files includes the CSS Styling techniques 
               including FlexBox. To create the the page design.