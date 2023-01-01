// get the url for getting the data
// in my case it is 10 data at a time and then load more wil load 10 more data

// we have to do 2 things now:
// 1. get the 10 data at the start and append it to the main div
    // a) load 10 data on the initial load





//  2. listen for the load more button click event and load 10 more data.

// que: How to find out that the scrolling is reached at the bottom of the page?

// Ans: We have 3 things to notice: 
// a) scrollY (number of pixels you scroll in a Y direction)

// b) innerHeight (the portion of the browser that is visible as of now.)

// c) scrollHeight (it is the total height of the page ie including those parts as well which are not visible as of now)


// -------------------------- Learn to fetch data from URL -------------------------

// if you use only fetch('url') and check in the console. You will get a promise. 

// if you see then(res => console.log(res)) this then you could find out that it returns a 
// response but you cannot access tha data. (inside the body key of the object) For that we
//  have to convert the data to json() to access the data.

// catch(err => console.log(err)) this will check for the error if the response is able to fetch the data or able to perform the fetch if yes then it won't throw any error 
// otherwise it will show an error. For example it won't show the 404 not found error. But it will show 500 errors that are coming from the server.


// now after the URL we need to write the method that which kind of data we want is it POST or GET or whatever,

fetch('URL', {
    method: 'POST',
    // now pass the data to the user using body but before that we need to tell fetch that we will going to add some data to the JSON.
    // for that use the 'headers'.

    headers: {
        'content-type' : 'application/json'
    },

    body: JSON.stringify({
        name: 'user 1'
    })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))