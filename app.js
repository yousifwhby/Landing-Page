/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/const t0 = performance.now();
/*hide the navbar when scrolling*/
const nav = document.querySelector(".page__header"); /*detrmine the container of nav*/
/*const navbar = nav[0];*/
let intialPosition = window.scrollY; //web interface , position zero of the scroll
const allSections = document.querySelectorAll("section"); /*saved all section in const*/
const sections = [...allSections]; /*transfor nodelist to array by using spread operator after serach on MDN and youtube*/
const navBar = document.getElementById("navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav (building dynamic navbar that if we increase a section show in it)
for (const sec of sections){
 const listI = document.createElement("li"); /*creating new elemnet in the navbar*/
  const name = sec.getAttribute("id") ; /*geting the name of the section*/
   listI.setAttribute('class','menu__link');/*setting the list class*/
  
   listI.setAttribute('tabindex',name.charAt(7)); //access through tab key
  
  listI.setAttribute('data-id',name); //creating data attribute
  
  listI.innerHTML = `<a href='#${name}'> ${name.slice(0,7)} ${name.charAt(7)}</a>`;
  navBar.appendChild(listI);
}

/*onscroll event and api window use, hiding navbar*/

window.onscroll = function scrolling() {
let currentPosition = window.scrollY;
  if (intialPosition > currentPosition) {
    nav.setAttribute('style', 'top: 0px');
  } 
  else {
    nav.setAttribute('style', 'top: -110px');
  }
  intialPosition = currentPosition;
}

// Add class 'active' to section when near top of viewport and to the navbar for viewd section
function inMySight(s) //function to know if i am seeing the section or not 
{ 
  let view = s.getBoundingClientRect(); //function to get the cordinates and what i amseeing DOMRect object providing information about the size of an element and its position relative to the viewport.
  return (view.top >= 0 && view.top<=300);
}
/*this function is used to add active class to both the current section in the view and highlight 
the active section in the navbar*/

/*window.onscroll= */function liveSec(){for(const sec of sections ){
   const nameLink= sec.getAttribute("id");
    
    let liveLink = navBar.querySelector(`[data-id=${nameLink}`); //activelink
    
    if(inMySight(sec)){ 
    /*if (sec.classList.contains("your-active-class")=== false){*/
     sec.classList.add("your-active-class");
   
     liveLink.classList.add('liveLink');
    }

    else{
      sec.classList.remove("your-active-class");
      
      liveLink.classList.remove('liveLink');
    }
   }

}/*}*/






/* function activeSec(){for (sec of sections){ 
  if(sec.getBoundingClientRect() >=0 && sec.getBoundingClientRect()<=300){
    if (sec.classList.contains("your-active-class")=== false){
    sec.classList.toggle("your-active-class");}

                                                             //glitshes and gives flickers alot
    else{sec.classList.toggle("your-active-class");


    }
   }
 }
*/


// Scroll to anchor ID using scrollTO event

 //used scroll-bhavior in css to give smooth effect

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
/* document.addEventListener('scroll',activeSec);*/
/*document.addEventListener('scroll',scrolling)*/ //anthor way for calling hidden navbar
 document.addEventListener('scroll',liveSec);
const t1 = performance.now();
console.log(`This code took  ${t1 - t0}  milliseconds.`);