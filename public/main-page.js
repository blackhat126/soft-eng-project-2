let itemButtons = document.querySelectorAll('#menu-list a');
let popupForms = document.getElementsByClassName('popup-form');
let closeButtons = document.getElementsByClassName('close-button'); 
let previous = document.getElementById('blank');
for (let i = 0; i < closeButtons.length; i++) {
    itemButtons[i].onclick = () => {
        previous.hidden = true;
        previous = popupForms[i];
        popupForms[i].hidden = false;
    }
}

for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = () => {
        popupForms[i].hidden = true;
    }
}

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

    // let update = document.getElementsByClassName('update');
    // update[0].addEventListener('click', (e) => {
    //     let endpoint = `/${update[0].dataset.doc}`;

    //     fetch(endpoint, {
    //         method: 'PUT'
    //     })
    //     .then((response) => {
    //             response.json()
    //             .then((data) => {
    //                 window.location.href = data.redirect;
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //             });
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // });
   


