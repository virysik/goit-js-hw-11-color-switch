import { colors } from "./partials/colors";
import { randomIntegerFromInterval } from "./partials/randomizer";

const DELAY = 1000;
const refs = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
    body: document.body,
};
let clicked = true;

refs.start.addEventListener('click', onClick);

function onClick() {
    if (clicked) {
    const intervalId = setInterval(changeBgColor, DELAY);
      clicked = false;

        refs.stop.addEventListener('click', () => {
            clearInterval(intervalId);
            clicked = true;
        }
        );
    }
   
}

function changeBgColor() {
    let colorIndex = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[colorIndex];
    
}




