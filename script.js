/* Humberger function*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/************************************Selected-V*****************************************/

const playerArray = [];
function display(playerName) {
    const tableBody = document.getElementById('player-list');
    tableBody.innerHTML = '';
    for (let i = 0; i < playerName.length; i++) {
        const name = playerArray[i].playerName;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        `;
        tableBody.appendChild(tr);
    }
}

function addToPlayerList(element) {
    const playerName = element.parentNode.parentNode.children[1].innerText;
    const playerObj = { playerName: playerName };
    playerArray.push(playerObj);
    display(playerArray);
}


/***********************************Budget section*************************************/
// Per Player Expenses

function fivePlayerExpenses() {
    const perPlayer = document.getElementById('per-player');
    const perPlayerValue = perPlayer.value;
    const playerExpenses = perPlayerValue * playerArray.length;
    const totalPlayerExpenses = document.getElementById('player-expenses');
    totalPlayerExpenses.innerText = playerExpenses;
    perPlayer.value = '';
    return playerExpenses;
}

document.getElementById('calc1-btn').addEventListener('click', function () {
    fivePlayerExpenses();
})


// Total Expenses

function managerInput() {
    const manager = document.getElementById('manager-expense');
    const managerExpense = manager.value;
    const managerTotalExpense = parseInt(managerExpense);
    manager.value = '';
    return managerTotalExpense
}

function coachInput() {
    const coach = document.getElementById('coach-expense');
    const coachExpense = coach.value;
    const coachTotalExpense = parseInt(coachExpense);
    coach.value = '';
    return coachTotalExpense;
}

function playerText() {
    const perPlayer = document.getElementById('player-expenses');
    const perPlayerValue = perPlayer.innerText;
    const playerTotalExpenses = parseInt(perPlayerValue);
    return playerTotalExpenses
}

document.getElementById('calc2-btn').addEventListener('click', function () {
    const subTotal = playerText() + managerInput() + coachInput();
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = subTotal;
})





