

let bars = document.querySelector('#bars-btn');
let navbar = document.querySelector('.navbar');


bars.addEventListener("click", function(){
    bars.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

window.addEventListener("scroll", function(){
    bars.classList.remove('fa-times');
    navbar.classList.remove('active');
})
//click search button active 
document.querySelector('#search-btn').onclick =()=> {
    document.querySelector('#search-form').classList.toggle('active');
}
//click on close button to clean the value of inputs
document.querySelector('#close').onclick =()=> {
   document.getElementById("search-box").value=""
    
}
// Go to another page
document.querySelector('#ordrpagebtn').onclick=function(){
   window.location.href="order.html"
  
}
document.querySelector('#haeder-order').onclick=function(){
  window.location.href="order.html"

}


//Serach Form Javascript 
const searchInput = document.getElementById('search-box');
const searchButton = document.getElementById('search-formicon');
const boxContainer = document.getElementById('dishbox-container');


let messageDisplayed = false;

function search(event) {
messageDisplayed=false
  document.getElementById("dishes").scrollIntoView()
  
  document.querySelector('#close').addEventListener('click', (event) => {
    event.target.value = '';
    boxes.forEach((box) => {
      box.style.display = 'block';
    });
    messageDisplayed = false;
  });
  console.log(event.target.value)
  const boxes = Array.from(boxContainer.getElementsByClassName('box'));
  let matchFound = false;
  boxes.forEach((box) => {
    if (box.getElementsByTagName('h3')[0].innerHTML.toString().toLocaleLowerCase().startsWith(event.target.value)  ) {
      matchFound = true;
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
    }
  });
  const message = document.querySelector('.item-not-found');
  if (message) {
    boxContainer.removeChild(message);
  }
  if (!matchFound && !messageDisplayed) {
    const emptyDiv = document.createElement("div");
    emptyDiv.classList.add("item-not-found")
    emptyDiv.innerHTML = "No matching items found";
    emptyDiv.style.alignSelf = "center";
    boxContainer.appendChild(emptyDiv);
    messageDisplayed = true;
  }
  searchInput.value ==="" ? event.target.value="" : null
}



// Add an event listener to the search button to run the search function when clicked

// searchButton.addEventListener('click', search);
searchInput.addEventListener("keyup",search)
// Add an event listener to the search input to run the search function when the enter key is pressed
searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    search();
  }
});






// Swiper code for home page and review page 
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
    loop:true,
  });


  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
       loop:true,
       breakpoints: {
        0 : {
          slidesPerview: 1 ,
        },
        640 : {
          slidesPerview: 2,
        },
        768 : {
          slidesPerview: 2,
        },
        1024 : {
          slidesPerview: 3,
        },

       },
  });