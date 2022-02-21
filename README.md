
# Supermarket Food Alert App
A food expiration date alert application that gives employees in a supermarket the ability to keep track of individual food items that have expired allowing them to remove the food products off the shelves accordingly.

There are three employee levels where each one has a certain level of access to specific features.

- Entry level can only view the current products, but cannot add, edit, or delete products.
- Supervisor level can view, edit, delete, but cannot add new products.
- Manager level has full access allowing them to view, add, edit, and delete products. 

## Tech Stack
- EJS view engine
- Node.js and Express
- MongoDB

## How To Use
1. Create a MongoDB cluster, database, and collection and set the collection name to be "items".
2. Add your database connection string into the "const dbURI" variable in the "app.js" file. 
3. `npm install`  
4. `node app`   
5. Type "localhost:3000/login" into your browser's address bar.
6. Select entry, supervisor, or manager in the login page.
7. Enter any random username.
8. Enter the password "Entry", "Supervisor", or "Manager" depending on which employee level you selected.
