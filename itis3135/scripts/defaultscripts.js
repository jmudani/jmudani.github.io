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
        alert("Please enter a number 1-10!")
    }
}