const height = 350;
const weight = 350;

window.addEventListener('DOMContentLoaded', () => {

    const button = document.getElementById('noButton');
    var maxWidth = (document.documentElement.clientWidth - height);
    var maxHeight = (document.documentElement.clientHeight - weight);


    //move the button to a random location when the mouse is hovered over it
    button.addEventListener("mouseover", () => {
        button.style.left = Math.floor(Math.random() * weight) + 'px';
        button.style.top = Math.floor(Math.random() * height) + "px"
    });

    // // // move the button when the mouse is hovered over it
    // button.addEventListener("mouseover", function () {
    //     button.style.transform = "translate(250px,0px)";
    // });

    // // move the button back to its original position when the mouse is no longer hovering over it
    // button.addEventListener("mouseout", function () {
    //     button.style.transform = "translate(0,0)";
    // });
})
