// JavaScript
function MyFunction01() {
    const obj = document.body;
    obj.style.backgroundColor = 'gray';
}
function MyFunction02() {
    const obj = document.getElementById('id01');
    obj.style.backgroundColor = 'orange';
}
function MyFunction03() {
    const lines = document.getElementsByClassName('class01');
    for (let i = 0; i < lines.length; i++) {
        lines[i].style.backgroundColor = 'green';
    }
}
function MyFunction04() {
    const obj = document.getElementsByTagName('p');
    for (let i = 0; i < obj.length; i++) {
        obj[i].style.backgroundColor = 'blue';
    }
}