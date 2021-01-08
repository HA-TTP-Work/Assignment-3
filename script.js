// Javascript for the HTML code

//1) Select the section with an id of container without using querySelector.

let section1 = document.getElementById("container");

console.log(section1);

//2) Select the section with an id of container using querySelector.

const section2 = document.querySelector("#container");

console.log(section2);

// need #?

// what does query selevtor do?
// searches for elements

//3) Select all of the list items with a class of "second".

//let secondList = document.getElementsByClassName("second");
// both work

let secondList = document.querySelector("second");

console.log(secondList);

// maybe use const
// convert to array maybe?

//4) Select a list item with a class of third, but only the list item inside of the ol tag.

let listItem = document.querySelector("#container ol .third");

// using multiple parameters for selector

// why does chaining not work?

console.log(listItem);

//let thirdOlList = document.getElementsByTagName("ol").getElementsByClassName("third");
// does not work
// maybe cannot chain

// maybe need const

//5) Give the section with an id of container the text "Hello!".

container.innerHTML = "Hello!" + container.innerHTML;

// maybe because I earse the other children the other way?

// for some reason need to append
// if I do not the code breaks

// add the old text?

// access container directly?

//let check1 = document.getElementById("container").innerHTML = "Hello!";
// does not work

// maybe need to append

// replacing all with innerHTML breaks the code

//6) Add the class main to the div with a class of footer.

let footer = document.querySelector(".footer");

// when I keep searching for the same item to get a refrence to
// sometimes I get errors

footer.classList.add("main");

console.log(footer);

// print classlist?

//7) Remove the class main on the div with a class of footer.

footer.classList.remove("main");

// depending how I make main this does not always work

console.log(footer);

//8) Create a new li element.

let newElement = document.createElement("li");

console.log(newElement);

//9) Give the li the text "four".

newElement.innerHTML = "four";

console.log(newElement);

console.log(newElement.innerText);

// try printing

//10) Append the li to the ul element.

let parentN = document.querySelector("ul");

parentN.appendChild(newElement);

// depending on how I make newElement it does not always work

//12) Loop over all of the lis inside the ol tag and give them a background color of "green".

let loopList = document.querySelector("ol");

let valuesToChange = loopList.getElementsByTagName("li");

// is there a way to chain the 2 selections

// maybe add parameters to qquerySelector?

// for some reason for each in
// did not work
// wonder why
// nodes are like trees
// so should be able to itterate through children

for (let i = 0; i < valuesToChange.length; i++) {
  valuesToChange[i].style.backgroundColor = "green";
}

//13) Remove the div with a class of footer.

footer.parentNode.removeChild(footer);
// use the hack

// maybe try printing to show null

// maybe search for footer again

// sometimes breaks depending on how main was made

console.log(footer);
