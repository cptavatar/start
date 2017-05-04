var div = document.getElementById('container');
fetch('links.props').then(function (response) {
    return response.text();
}).then(function (text) {
    div.innerHTML = text
});