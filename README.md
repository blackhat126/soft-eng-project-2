
# Supermarket Food Alert Application
A food expiration date alert application that gives employees in a supermarket the ability to keep track of individual food items that have expired allowing them to remove the products off the shelves accordingly.

There are 3 employee levels where each one has a certain level of access to application features.

- Entry level can view the current products, but cannot add, edit, or delete products.
- Supervisor level can view, edit, delete, but cannot add new products.
- Manager level has full access allowing them to view, add, edit, and delete products. 

Click here for the live [demo](https://super-314528.oa.r.appspot.com/)

## Tech Stack
- EJS view engine
- Express.js
- MongoDB

## How To Use Locally
1. Create a MongoDB cluster and collection then set the collection name to "items".
2. Add your database connection string into the "const dbURI" variable in the "app.js" file. 
3. `npm install`  
4. `npm start`   
5. Type "localhost:8080/" into your browser's address bar.
6. Select entry, supervisor, or manager in the login page.
7. Enter any random username.
8. Enter the password "Entry", "Supervisor", or "Manager" depending on which employee level you selected.
