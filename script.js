const playerList = []; 
const submit = document.getElementById("submit");
let form = document.getElementById("form");
form.onsubmit= function (event) {
    event.preventDefault();
const inputName = document.getElementById("name").value;
const inputCountry = document.getElementById("country").value;
const inputScore = document.getElementById("number").value;
const list = document.getElementById("leaderBoardList");
// Create new player object from user inputs
const playerData = {
    name:inputName,
    country:inputCountry,
    score:inputScore
};
playerList.push(playerData);
playerList.sort((player1, player2) => parseInt(player2.score)-parseInt(player1.score));
list.innerHTML="";
for (let index = 0; index < playerList.length; index++) {
    const player = playerList[index];
    const liItems = document.createElement("li");
liItems.setAttribute('class', 'liItems');
const newName = document.createElement('div');
newName.setAttribute('class', 'divName');
const newCountry = document.createElement('div');
newCountry.setAttribute('class', 'divCountry');
const newScore = document.createElement('div');
newScore.setAttribute('class', 'divScore');

const increaseScore = document.createElement("button");
increaseScore.setAttribute('class','increaseBtn');
const decreaseScore = document.createElement("button");
decreaseScore.setAttribute('class', 'decreaseBtn');
increaseScore.innerText = "+5";
decreaseScore.innerText = "-5";
increaseScore.addEventListener('click', increaseScoreHandler(index));
decreaseScore.addEventListener('click',  decreaseScoreHandler(index));


newName.innerText = player.name;
newCountry.innerText = player.country;
newScore.innerText = player.score;
liItems.append(newName, newCountry, newScore, increaseScore, decreaseScore);
list.append(liItems);


}

}

function refreshList() {
    // Clear the leaderboard and repopulate with sorted players
    list.innerHTML = "";
    for (let index = 0; index < playerList.length; index++) {
        const player = playerList[index];
        const liItems = document.createElement("li");
    liItems.setAttribute('class', 'liItems');
    const newName = document.createElement('div');
    newName.setAttribute('class', 'divName');
    const newCountry = document.createElement('div');
    newCountry.setAttribute('class', 'divCountry');
    const newScore = document.createElement('div');
    newScore.setAttribute('class', 'divScore');
    
    const increaseScore = document.createElement("button");
    increaseScore.setAttribute('class','increaseBtn');
    const decreaseScore = document.createElement("button");
    decreaseScore.setAttribute('class', 'decreaseBtn');
    increaseScore.innerText = "+5";
    decreaseScore.innerText = "-5";
    increaseScore.addEventListener('click', increaseScoreHandler(index));
    decreaseScore.addEventListener('click', decreaseScoreHandler(index));
    
    newName.innerText = player.name;
    newCountry.innerText = player.country;
    newScore.innerText = player.score;
    liItems.append(newName, newCountry, newScore, increaseScore, decreaseScore);
    list.append(liItems);
    }
    
}
function increaseScoreHandler (index) {

    playerList[index].score += 5;
    refreshList();


}

function decreaseScoreHandler (index) {
    playerList[index].score -= 5;
    refreshList();
}