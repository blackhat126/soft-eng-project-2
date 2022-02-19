
# Supermarket Food Alert App
A food expiration date alert application that gives employees within a supermarket the ability to keep track of individual food items that have expired allowing them to remove the food products off the shelves accordingly.

There are three employee levels where each one has a certain level of access to features.

Entry level can only view the current products, but cannot add, edit, or delete products.
Supervisor level can view, edit, delete, but cannot add products.
Manager level has full access allowing them to view, add, edit, and delete products. 





## Features
- Food item retrieval, addition, altering, and deletion
- Dropdown menu listing all current food items
- Heirarchical user login
- Warning labels 
- Individual food item search
## Tech Stack
- EJS view engine
- Node.js and Express
- MongoDB
## How To Run
```
npm install     
node app
```
## How To Use
    1. Type "localhost:3000/login" into your browser's address bar.
    2. Select entry, supervisor, or manager in the login page.
    3. Enter any random username.
    4. Enter the password "Entry", "Supervisor", or "Manager" depending on which employee level you selected.
