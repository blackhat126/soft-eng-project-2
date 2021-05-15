const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    brandName: {
        type: String,
        required: true
    },
    expDate: {
        type: Date,
        required: true
    },
    location:  {
        type: String,
        required: true
    }
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;




















// let button = document.getElementById('form-button');
// let menuList = document.getElementById('menu-list');

// function createMenuItem(name, brand, date, location) {
//     let anchorTag = document.createElement('a');
//     let boldTag = document.createElement('b');
//     let menuItem = document.createElement('li');
    
//     anchorTag.setAttribute('href', '#');
//     boldTag.innerText = name;
//     anchorTag.innerText = ` (${brand})`;
//     anchorTag.firstChild.before(boldTag);
//     menuItem.append(anchorTag); 
    
//     return menuItem;
// }  

// button.onclick = function() {
//     let itemInputs = document.getElementsByClassName('form-inputs');
//     let productName = itemInputs[0].value;
//     let brandName = itemInputs[1].value;
//     let expirationDate = itemInputs[2].value;
//     let location = itemInputs[3].value;

//     menuList.lastChild.after(createMenuItem(productName, brandName, expirationDate, location));
//     console.log(menuList.children);
// }
   


