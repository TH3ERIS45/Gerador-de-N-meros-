const myButton = document.getElementById("myButton");
const Reset = document.getElementById("Reset");
const myLabels = document.getElementsByClassName("myLabels");
const min = 0;
const max = 9;

myButton.onclick = function() {
    for (let i = 0; i < myLabels.length; i++) {
        let randomNum = Math.floor(Math.random() * max) + min;
        myLabels[i].textContent = randomNum;
    }
};

Reset.onclick = function() {
    for (let i = 0; i < myLabels.length; i++) {
        let randomNum = Math.floor(Math.random() * max) + min;
        myLabels[i].textContent = " ";
    }
};


