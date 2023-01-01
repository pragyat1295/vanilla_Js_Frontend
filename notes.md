

<!-- Steps Taken by me. -->

<!-- ----------------------- 1. Javascript ------------------- -->

1. Variable declarations: 
        I took the following variables:

        a) button_start: It will be used to manupulate the start button in DOM.
        b) button_stop: It will be used to manupulate the stop button in DOM.
        c) button_sort: It will be used to manupulate the sort button in DOM.
        d) shuffleInterval: to set the time in mili seconds.
        e) table_users: To manupulate and store the table data get from the JSON file.

        Decalre the initiale state as false for shuffling.
        USERS_SORTED: To get the copy of users object that will be sorted and re-used everytime when user press the sort button.

2. Function Explanations:

    a) onStart: This function will take action when the DOM will be load on the browser for the first time.
    
    b) displayData: It will create the new row for the table at each iteration and append each
                    row's children with their details. And then append the created row to the table_users 
                    (which will be displayed as a table-body).
    
    c) sortData:    It will sort the data and display it.

    d) shuffle:     To shhuffle the data I used Fisher Yaates Algorithm.
                    Take the last element of the array and generate one random- 
                    index from the array and then swap the elements between these two addresses.
                    Decrement the current index and continue the process.

    e) toggleShuffle: This function checks if the state of the "ifShuffling" is false then perform the
                        shuffle function (one shuffling just after pressing the start button and after that every 1 second of interval). Change the buttons status according to requirement..
                        At last chnge the state of "isShuffling"  to true.
                        Else first stop the shuffling and change the state of buttons according to requirement.









<!-- --------------2. CSS ------------------------------------ -->

1. Heading: I give some of the spacing for the mobile view, tab view and the desktop view. 
            So that it could be readable. I did this by creating some media queries and assign relevent 
            properties to it.


2. Buttons: Actually, it is important for the user to see which button is active and which one is deactivated.
            So, for that I write the condition for the buttons if they are dissabled then make the background 
            as grey and when it is activated then give green background to start random, grey to stop
            random and cyan background to sort buttons.
            

3. Table:   For the table I just give linear gradient for the background of the table head and make the table 
            responsive for the mobile, tab and desktop view by using bootstrap classNames.
            
<!-- ----------------------------------------------------------------------------------------- -->
