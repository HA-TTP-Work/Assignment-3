//Write the code necessary to do the following:


//1) Select the section with an id of container without using querySelector.
let secttion1 = document.getElementById("container");


//2) Select the section with an id of container using querySelector.

let section2 = document.querySelector("container");



//3) Select all of the list items with a class of "second".

let secondList = document.getElemenstbyClassName("second")

// convert to array maybe?


//4) Select a list item with a class of third, but only the list item inside of the ol tag.

let thirdOlList = document.getElementsByTagName("ol").getElemenstbyClassName("third")

// maybe break up into 2 lines?
// convert to array maybe?
// can do either first I think



//5) Give the section with an id of container the text "Hello!".


document.getElementById("container").innerHTML = "Hello!";
// any tags?
// I do not think it needs assignment


//6) Add the class main to the div with a class of footer.

document.getElementByClassName("footer").innerHTML = <div class="main"></div>;

// are we creating?
// create an item?

// will adding code work?

// do not think needs assignment




//7) Remove the class main on the div with a class of footer.

let nodeToDelete = document.getElementByClassName("main");

nodeToDelete.parentNode.removeChild(nodeToDelete);

// main's parent is footer




//8) Create a new li element.

let newElement = document.createElement("li");

// create a list item?


// need to create it

// <li class="new">one</li>
// maybe this
// where to add it?

//9) Give the li the text "four".

//document.getElementById("li").innerHTML = "four";

// or maybe
newElement.innerHTML = "four";

// newelement.value = "four";


//10) Append the li to the ul element.

// how to append?

let parentToAddTo = document.getElementsByTagName("ul")

parentToAddTo.appendChild(newElement);  


//12) Loop over all of the lis inside the ol tag and give them a background color of "green".

let childList = document.getElementsByTagName("ol")


for (child in childList) {
     
     child.style.backgroundColor = "green"
     
     
     
     
     }





//13) Remove the div with a class of footer.

let divToDelete = document.getElementByClassName("footer");

divToDelete.parentNode.removeChild(divToDelete);



