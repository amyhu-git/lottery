//populate selection bars with numbers between 1 and 40
let firstSelect = document.getElementById("first-number");
let secondSelect = document.getElementById("second-number");
let thirdSelect = document.getElementById("third-number");

let selectBars = [firstSelect, secondSelect, thirdSelect]

let option
let lucky_numbers

selectBars.forEach(bar => {
    for (let i = 1; i < 41; i++) {
        option = document.createElement("option")
        option.text = i;
        option.value = i;

        bar.add(option)
    }
})

//compute random lottery numbers
function computeNumbers() {
    let winner = [];
    for (let i = 0; i < 3; i++) {
        winner.push(Math.floor(1 + Math.random() * 39))
    };
    return winner
}

//Lottery Game
let lotteryGame = function() {

    lucky_numbers = computeNumbers() //compute numbers
    displayNumbers() //display numbers on page

    let selectedNumbers = []
    let matchedNumbers = 0;
    let message = document.getElementById("outcome")

    selectBars.forEach(bar => { //get selected numbers
        let value = parseInt(bar.value) //transform value into integer

        selectedNumbers.push(value);
    })

    for (let i = 0; i < lucky_numbers.length; i++) { //count matched numbers
        let lucky_value = lucky_numbers[i];
        selectedNumbers.indexOf(lucky_value) > -1 ? matchedNumbers++ : matchedNumbers[i] = 0
    };

    switch (matchedNumbers) { //change message based on matched numbers
        case 3:
            if (lucky_numbers[0, 1, 2] === selectedNumbers[0, 1, 2]) {
                message.innerHTML = "CONGRATULATIONS! YOU WIN THE JACKPOT"
            } else {
                message.innerHTML = "Congratulations, you win the first prize!"
            };
            break;
        case 2:
            message.innerHTML = "Great, you won the second prize!";
            break;
        case 1:
            message.innerHTML = "Great, you won the third prize!";
            break;
        default:
            message.innerHTML = "Sorry, you didn't win this time!";
            break;
    }
}

//function to display numbers on page
function displayNumbers() {
    deleteNumbers() //remove old content

    let div = document.getElementById("lottery-numbers")
    let p = document.createElement("p")
    p.innerHTML = "TODAY'S LUCKY NUMBERS ARE: "
    let list = document.createElement("ol") //ordered list
    lucky_numbers.forEach(num => {
        console.log(num)
        let listElement = document.createElement("li")
        listElement.innerHTML += 'Number :' + `<span style = ' color: rgb(201, 48, 48)'>  ${num} </span>`
        list.append(listElement)
    })
    div.append(p, list)
}

function deleteNumbers() {
    let div = document.getElementById("lottery-numbers") //grab old content
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild); //remove all attached elements
    }
}