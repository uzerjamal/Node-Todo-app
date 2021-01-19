const form = document.getElementById('form');
const liItem = document.getElementsByTagName('li');
let xhttp = new XMLHttpRequest();

for(let i=0; i<liItem.length; i++){
    liItem[i].addEventListener('click', () => {
        xhttp.open('DELETE', `/${liItem[i].innerText}`, true);
        xhttp.send(null);
        window.location = window.location.href;
    });
}

// submitButton.addEventListener('click', () => {
//     xhttp.open('POST', '/', true);
//     xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     xhttp.send(`data=${formInput.value}`);
//     location.reload();
// });