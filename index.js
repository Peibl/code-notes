// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('showButton');
appDiv.onclick= function() {
            const front = document.getElementById("front");
            const back = document.getElementById("back");
            const showButton = document.getElementById("showButton");
            const explainButton = document.getElementById("explainButton");
            front.classList.toggle("hide");
            back.classList.toggle("hide");
            showButton.classList.toggle("hide");
            explainButton.classList.toggle("hide");
        }

const appDiv2 = document.getElementById('explainButton');
appDiv2.onclick= function() {
            const front = document.getElementById("front");
            const back = document.getElementById("back");
            const showButton = document.getElementById("showButton");
            const explainButton = document.getElementById("explainButton");
            front.classList.toggle("hide");
            back.classList.toggle("hide");
            showButton.classList.toggle("hide");
            explainButton.classList.toggle("hide");
        }