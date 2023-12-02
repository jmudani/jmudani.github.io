function displayDate() {
    const now = new Date();

      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayOfWeek = daysOfWeek[now.getDay()];

      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const month = months[now.getMonth()];

      const day = now.getDate();
      const year = now.getFullYear();

      let hours = now.getHours();
      let minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12 || 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;

      const dateTimeString = `Today is ${hours}:${minutes}${ampm} on ${dayOfWeek}, ${day} ${month}, ${year}`;
      document.getElementById('date&time').textContent = dateTimeString;

      setInterval(displayDate, 1000);
}
  
displayDate();


function greeting()
{
    let name = document.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;

    document.getElementById("greeting").innerHTML = "Mudani Enterprises welcomes you, " + name + "! We're glad you are doing " + feeling + "!";
}

function favoriteNumberToPolygon()
{
    let number = document.getElementById("number").value;

    number = Math.round(Math.abs(number));

    if (number >= 1 && number <= 10) {

    if (number == 1){
        number = Math.abs(number);
        alert("Henagon");
    }
    else if (number == 2){
        number = Math.abs(number);
        alert("Digon");
    }
    else if (number == 3){
        number = Math.abs(number);
        alert("Trigon");
    }
    else if (number == 4){
        number = Math.abs(number);
        alert("Tetragon");
    }
    else if (number == 5){
        number = Math.abs(number);
        alert("Pentagon");
    }
    else if (number == 6){
        number = Math.abs(number);
        alert("Hexagon");
    }
    else if (number == 7){
        number = Math.abs(number);
        alert("Heptagon");
    }
    else if (number == 8){
        number = Math.abs(number);
        alert("Octagon");
    }
    else if (number == 9){
        number = Math.abs(number);
        alert("Enneagon");
    }
    else if (number == 10){
        number = Math.abs(number);
        alert("Decagon");
    }
    else{
        alert("Error has occurred!")
    }
}
else {
    alert("Please enter a valid number between 1 and 10!");
}
}

function roarLikeMammoth(){
    alert("Mammoth: Rooooooaaaar!");
}

function totalGrass(){
    const number1 = prompt("How manu pieces of grass did the mammoth find on the first trip:");
    const number2 = prompt("How manu pieces of grass did the mammoth find on the second trip:");
    const sum = parseInt(number1) + parseInt(number2);
    alert(`The mammoth found a total of ${sum} pieces of grass for dinner today.`);
}

function nameMammoth(){
    const name = prompt("What would you like to name your mammoth?")
    alert(`${name} loves his new name!`);
}

function buyMammoth(){
    const number1 = prompt("A Mammoth costs $10,000, how many would you like to buy?");
    const total = parseInt(number1) * 10000;
    alert(`Your total is $${total}, keep good care of our Mammoth's!`);
}