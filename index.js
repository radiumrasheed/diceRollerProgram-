function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  // the logic for rolling the dice

  const diceNames = ["One", "Two", "Three", "Four", "Five", "Six"];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    const angleInDegrees = (value * 50) + value
    values.push(value);
    images.push(`<img src="./dice-img/dice${diceNames[value - 1]}.png" alt=" dice ${value} " style="transform: rotate(${angleInDegrees}deg);" >`);
  }

  // display the results --diceResult--
  diceResult.textContent = `dice : ${values.join(", ")}`;
  // display the images --diceImages--
  diceImages.innerHTML = images.join("");
}

/**
 * Calls a function x times with a given delay
 *
 * @param callback {function}
 * @param times {number}
 * @param delay {number}
 */
function repeatTask(callback = () => {}, times = 15, delay = 50) {
  let count = 0;
  const intervalId = setInterval(() => {
    count++;
    callback()

    if (count >= times) {
      clearInterval(intervalId);
    }
  }, delay--);
}
