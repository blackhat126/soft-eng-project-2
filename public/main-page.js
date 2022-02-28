let itemButtons = document.querySelectorAll('#menu-list a');
let editButtons = document.getElementsByClassName('edit');
let popupForms = document.getElementsByClassName('popup-form');
let closeButtons = document.getElementsByClassName('close-button'); 
let previous = document.getElementById('blank');

//Hides all item popup forms until an individual item name is clicked
for (let i = 0; i < closeButtons.length; i++) {
    itemButtons[i].onclick = () => {
        previous.hidden = true;
        previous = popupForms[i];
        popupForms[i].hidden = false;
    }
}

//Hides all item popup forms until an individual item is edited
for (let i = 0; i < closeButtons.length; i++) {
    editButtons[i].onclick = () => {
        previous.hidden = true;
        previous = popupForms[i];
        popupForms[i].hidden = false;
    }
}

//Hides the current item popup form
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = () => {
        popupForms[i].hidden = true;
    }
}

//Search bar filter
function filterFunction() {
    var input, filter, ul, li, b, i;
    div = document.getElementById("menu-list-box");
    input = document.getElementById("search-bar");
    filter = input.value.toUpperCase();
    b = div.getElementsByTagName("b");
    li = div.getElementsByTagName('li');
    for (i = 0; i < b.length; i++) {
        txtValue = b[i].textContentP || b[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//Fetch API for the delete request
let trashcan = document.getElementsByClassName('delete');
for (let i = 0; i < trashcan.length; i++) {
    trashcan[i].addEventListener('click', (e) => {
        let endpoint = `/${trashcan[i].dataset.doc}`;

        fetch(endpoint, {
            method: 'DELETE' 
        })
        .then((response) => {
            response.json()
            .then((data) => {
                window.location.href = data.redirect;
            })
            .catch((err) => {
                console.log(err);
            });
        })
        .catch((err) => {
            console.log(err);
        });
    });
}

//Fetch API for the put request
const forms = document.getElementsByClassName("edit-form");
for (let i = 0; i < forms.length; i++) {
    forms[i].addEventListener("submit", (event) => {
        event.preventDefault();
    
        const editButton = forms[i].getElementsByTagName('button');
        const url = `/${editButton[0].dataset.doc}`;
        const inputs = forms[i].getElementsByClassName('popup-inputs');
        let formData = {
            productName: inputs[0].value, 
            brandName: inputs[1].value,
            expDate: inputs[2].value,
            location: inputs[3].value
        }

        //Manual URL encoding of the form data
        let urlEncodedData = "",
        urlEncodedDataPairs = [],
        name;
        for(name in formData) {
            urlEncodedDataPairs.push( encodeURIComponent( name ) + '=' + encodeURIComponent( formData[name] ) );
        }
        urlEncodedData = urlEncodedDataPairs.join( '&' ).replace( /%20/g, '+' );
        console.log(urlEncodedData);

        fetch(url, {
            method: 'PUT', 
            body: urlEncodedData,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then((response) => {
            response.json()
            .then((data) => {
                window.location.href = data.redirect;
            })
            .catch((err) => {
                console.log(err);
            })
        })
        .catch((err) => {
            console.log(err);
        })
    });
}


   


