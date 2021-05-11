
document.body.onload = addElement;
function addElement () { 
    
for(let i = 0; i < 10; i++){

  const newDiv = document.createElement("div"); 
  newDiv.classList.add("card")

  const currentDiv = document.getElementsByClassName("cards")[0]
  currentDiv.appendChild(newDiv) 
}
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";

}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";

}

var navbar = document.getElementById("navbar");
var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if(window.pageYOffset <= 2){
    navbar.classList.remove("nav-down")
   }else
   if(window.pageYOffset <= 5){
    navbar.classList.add("nav-down")
   }else if(window.pageYOffset <= 80) {
        navbar.classList.add("nav-fixed")
        navbar.classList.remove("nav-up")
   }else if (st > lastScrollTop){
        navbar.classList.remove("nav-fixed")
        navbar.classList.add("nav-up")
        navbar.classList.remove("nav-down")
   } else {
        navbar.classList.remove("nav-fixed")
        navbar.classList.remove("nav-up")
        navbar.classList.add("nav-down")
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
setTimeout(() => {
window.location.replace("http://www.w3schools.com");

},1000*3)
