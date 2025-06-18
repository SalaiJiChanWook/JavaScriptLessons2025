const pets  = ["dog", "cat", "fish", "bird"];

const image = document.getElementById("image"); // getting the image element by its ID
const paragraph = document.getElementById("text");
// adding an event listener to the image element that listens for click events
// when the image is clicked, it will log each pet and update the paragraph text
image.onclick = () => {
    const addPet = prompt("Enter a new pet name:"); // prompting the user to enter a new pet name
    
        // pets.push(addPet); // adding the new pet name to the last of the pets array
        // pets.sort(); // sorting the pets array alphabetically
        pets.unshift(addPet); // adding the new pet name to the beginning of the pets array
    console.log(pets); // logging the updated pets array to the console
    paragraph.textContent = `You have ${pets.length} pets currently.These are: ${pets.join(", ")}`; // updating the text content of the paragraph element
}