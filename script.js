// Javascript for the HTML code

//1) Select the section with an id of container without using querySelector.

let section1 = document.getElementById("container");

console.log(section1);



//2) Select the section with an id of container using querySelector.

const section2 = document.querySelector("#container");

console.log(section2);

// need # for id searches

// what does query selector do?
// searches for elements



//3) Select all of the list items with a class of "second".

//let secondList = document.getElementsByClassName("second");
// both seem to work

let secondList = document.querySelector(".second");

// which is better?

// need . for class searches

console.log(secondList);

// maybe use const
// convert to array maybe?




//4) Select a list item with a class of third, but only the list item inside of the ol tag.

//let listItem = document.querySelector("#container ol .third");

// both work

let listItem = document.querySelector(" ol .third");

// look at the CSS website for the rules on searching


// why does chaining not work?

console.log(listItem);

//let thirdOlList = document.getElementsByTagName("ol").getElementsByClassName("third");

//console.log(thirdOlList);













// Prompt 5 moved to the end to avoid conflict with prompt 10









//6) Add the class main to the div with a class of footer.

let footer = document.querySelector("div.footer");
//let footer = document.querySelector(".footer");
// need to use . for classes If I do not use the class specific searcher

// maybe also search for the div
//adding div

// both work



footer.classList.add("main");

// main or .main?
// both seem to work
// classes usually need . before them when you search

console.log(footer);

// why is main not printed here?

// print classlist?







//7) Remove the class main on the div with a class of footer.

footer.classList.remove("main");

// depending how I make main this does not always work

// when both or none have the . dot
// main shows up in the print
// when one does and the other does not
// main shows up in both prints
// that is very strange
// ask about this



console.log(footer);







//8) Create a new li element.

let newElement = document.createElement("li");

console.log(newElement);

// when I print it here
// four is displayed
// that is not correct
// four should not have been initialized yet
// ask about this







//9) Give the li the text "four".

newElement.innerHTML = "four";

console.log(newElement);

console.log(newElement.innerText);

// try printing






//10) Append the li to the ul element.

let parentN = document.querySelector("ul");

// could use select by element name tag

// had a conflict with prompt 5
// this is because prompt 5 would delete ul

parentN.appendChild(newElement);




// no prompt 11




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

//document.getElementsByClassName("footer")[0].remove();
// use the hack

// maybe try printing to show null

// maybe search for footer again

// how to check if it was deleted?


let findFooter = document.querySelector(".footer");

console.log(findFooter);

// return null to show footer was deleted








// moved prompt 5 to end to avoid breaking the code

// can now run either line to write Hello

//5) Give the section with an id of container the text "Hello!".

container.innerHTML = "Hello!" + container.innerHTML;

// maybe because I erase the other children the other way?

// for some reason need to append
// if I do not the code breaks

// add the old text?

// access container directly?

//let check1 = document.getElementById("container").innerHTML = "Hello!";

// this actually does work it causes an error when comined with

// prompt 10 because this deletes something we need in that prompt

// not all the prompts were meant to be ran together
// can move this to after prompt 10 to fix easier