const navigationButton = document.querySelector(".nav-button"); // getting hold of the element with .nav-button class
const navigationMenu = document.querySelector(".nav-list"); // getting hold of the element with .nav-list class
const navigationLinks = document.querySelectorAll(".nav-item"); // getting hold of all the elements with .nav-item class
const navGoBack = document.querySelector(".back") // getting hold of the element with .back class

function addActiveClass () {
    // the function is responsible for adding "acitve-menu" class to the list of classes of the corresponding items
    navigationMenu.classList.add("active-menu");
    navGoBack.classList.add("active-menu");
}

function removeActiveClass () {
    // the function is responsible for removing "acitve-menu" class to the list of classes of the corresponding items
    navigationMenu.classList.remove("active-menu");
    navGoBack.classList.remove("active-menu");};
    
navigationButton.addEventListener("click", addActiveClass); // calling the function addActiveClass each time when the item with .nav-button is clicked 

for (link of navigationLinks) {
        link.addEventListener("click", removeActiveClass);} // checking all the links in the navigation to call the removeActiveClass function when a link is clicked

