const styles = require('./index.css');

document.body.className = styles.skyblue;

const button = document.createElement('button');
button.innerHTML = "hogehoge";
button.className = styles.clear;

document.body.appendChild(button);
