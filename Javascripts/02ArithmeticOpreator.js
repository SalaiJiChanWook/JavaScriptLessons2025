//Clean Code
let count = 0; // declaring a variable named count and initializing it to 0
const imageElement = document.getElementById("image"); // getting the image element by its ID
const textElement = document.getElementById("text"); // getting the text element by its ID
// adding an event listener to the image element that listens for click events
imageElement.addEventListener("click", function() {
    count++; // incrementing the count variable by 1 each time the image is clicked
    //count = count + 1; // alternative way to increment the count variable
    // count += 1; // another alternative way to increment the count variable
    count--; // decrementing the count variable by 1 each time the image is clicked
    // count = count - 1; // alternative way to decrement the count variable
    // count -= 1; // another alternative way to decrement the count variable
    // count *= 2; // multiplying the count variable by 2
    // count /= 2; // dividing the count variable by 2  
    // count %= 2; // getting the remainder of the count variable divided by 2
    // count **= 2; // raising the count variable to the power of 2
    // count++; // incrementing the count variable by 1 each time the image is clicked
    // count--; // decrementing the count variable by 1 each time the image is clicked
    console.log(count); // logging the current count to the console
    textElement.textContent = "You Clicked it: " + count + " times"; // updating the text content of the text element
});