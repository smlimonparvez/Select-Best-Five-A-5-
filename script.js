/* Humberger function*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Selected-V



// Budget section
function fivePlayerExpenses() {

    const perPlayer = document.getElementById('per-player');
    const perPlayerValue = perPlayer.value;
    const playerExpenses = perPlayerValue * 5;
    const totalPlayerExpenses = document.getElementById('player-expenses');
    totalPlayerExpenses.innerText = playerExpenses;
    perPlayer.value = '';
    return playerExpenses;
}

document.getElementById('calc1-btn').addEventListener('click', function () {
    fivePlayerExpenses();
})


document.getElementById('calc2-btn').addEventListener('click', function () {

    const manager = document.getElementById('manager-expense');
    const managerExpense = manager.value;
    const managerTotalExpense = parseInt(managerExpense);
    const coach = document.getElementById('coach-expense');
    const coachExpense = coach.value;
    const coachTotalExpense = parseInt(coachExpense);
    const perPlayer = document.getElementById('player-expenses');
    const perPlayerValue = perPlayer.innerText;
    // const playerExpenses = perPlayerValue * 5;

    const playerTotalExpenses = parseInt(perPlayerValue);
    const subTotal = managerTotalExpense + coachTotalExpense + playerTotalExpenses;
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = subTotal;
    manager.value = '';
    coach.value = '';
})

// function mg(){
//     const manager = document.getElementById('manager-expense');
//     const managerExpense = manager.value;
//     const managerTotalExpense = parseInt(managerExpense);
//     manager.value = '';
//     return managerTotalExpense
// }
// function cc(){
//     const coach = document.getElementById('coach-expense');
//     const coachExpense = coach.value;
//     const coachTotalExpense = parseInt(coachExpense);
//     coach.value = '';
//     return coachTotalExpense;
// }

// document.getElementById('calc2-btn').addEventListener('click', function(){
//     // const subTotal = managerTotalExpense + coachTotalExpense + playerTotalExpenses;
//     const subTotal = fivePlayerExpenses() + mg() + cc() ;
//     const totalExpenses = document.getElementById('total-expenses');
//     totalExpenses.innerText = subTotal;
// })

