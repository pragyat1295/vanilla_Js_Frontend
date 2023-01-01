// Your code should go here


// First of all declared all the variables. Get the elements by their id to manupulate the DOM.

const shuffleInterval = 1000;

const button_start = document.getElementById('start');
const button_stop = document.getElementById('stop');
const button_sort = document.getElementById('sort');

const table_users = document.getElementsByClassName('table-body')[0];  // to display the table data
var ifShuffling = false; // to check the shuffling
var shuffleTimerID; // to define the interval while shuffling

const USERS_SORTED = USERS.slice(); // making a copy of users array object that will be sorted and re-used everytime user presses sort button

// This function will be implemented when the DOM will get loaded.

// It will display the user data and enable the sorting of the user data.

function onStart() {
    button_stop.disabled = true; 
 
    button_start.addEventListener('click', toggleShuffle);
    button_stop.addEventListener('click', toggleShuffle);
    button_sort.addEventListener('click', sortData);

    displayData(USERS);

    // here check if the balance is equal then sort them based on user ID in ascending order
    // else sort according to account balance in descending order.
    USERS_SORTED.sort(function(a, b){
        if (b.accountBalance - a.accountBalance !== 0) return b.accountBalance - a.accountBalance;
        return parseInt(a.id, 10) - parseInt(b.id, 10);
    });
}



// This function will be used to display the data. It will create one row as a root tree every iteration and then we will append its children as new columns.
// And then append this row in the table (table_user variable)

function displayData(users) {
    table_users.innerHTML = '';

    users.map((user) => {
        let row = document.createElement('tr');
        
        let col1 = document.createElement('td');
        col1.textContent = user.name.last + ', ' + user.name.first;
        col1.style.cssText = 'max-width: 100px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;';
        row.appendChild(col1);

        let col2 = document.createElement('td');
        col2.textContent = user.email;
        row.appendChild(col2);

        let col3 = document.createElement('td');
        col3.textContent = user.phone;
        row.appendChild(col3);

        let col4 = document.createElement('td');
        let img = document.createElement('img');
        img.src = user.pictureUrl;
        img.height = 50; img.width = 50;
        col4.appendChild(img);
        row.appendChild(col4);

        let col5 = document.createElement('td');
        col5.textContent = user.accountBalance;
        row.appendChild(col5);
        
        table_users.appendChild(row);
    });
}

function sortData() {
    displayData(USERS_SORTED);
}


// For shuffling te data I am using "Fisher Yaates Algorithm".
// Just take one random index from the array and then swap those tow data and display them.
function shuffle() {
    let currentIndex = USERS.length, randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        [USERS[currentIndex], USERS[randomIndex]] = [USERS[randomIndex], USERS[currentIndex]];
        
        console.log("the current index is: ", currentIndex)
    }

    displayData(USERS);
}

// -------- Shuffling function -----------------

// For this one just write the button properties that which button should I need to enable and which 
// one to dissable

function toggleShuffle() {
    if (!ifShuffling) {
        shuffle();
        shuffleTimerID = setInterval(shuffle, shuffleInterval);

        button_start.disabled = true;
        button_stop.disabled = false;
        button_sort.disabled = true;

        ifShuffling = true;
    } else {
        clearInterval(shuffleTimerID);

        button_start.disabled = false;
        button_stop.disabled = true;
        button_sort.disabled = false;

        ifShuffling = false;
    }

    if(button_stop.disabled == true) {
        button_stop.style.cssText = 'cursor: auto; background: grey;'
    }
    else {
        button_stop.style.cssText = 'cursor: pointer; background: #6c757d;'
        // background: linear-gradient(45deg, red, blue);'
    }

    if(button_start.disabled == true) {
        button_start.style.cssText = 'background: grey; cursor: auto;'
    }
    else {
        button_start.style.cssText = 'cursor: pointer; background: #28a745; '
        // background: linear-gradient(45deg, red, blue);'
    }

    if(button_sort.disabled == true) {
        button_sort.style.cssText = 'background: grey; cursor: auto;'
    }
    else {
        button_sort.style.cssText = 'cursor: pointer; background: #17a2b8;'
        //   linear-gradient(45deg, red, blue);'
    }
}

document.addEventListener('DOMContentLoaded', onStart);