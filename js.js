/*Menu icon*/
function iconTransform(x) {
    x.classList.toggle("change");
}

var popup = false;
var buttons = document.getElementsByClassName("button");

/*Navigation control*/
function openNav() {
    if (!popup) {
            document.getElementById("mobile").style.height = "13em"; /*30%*/
    } else {
            document.getElementById("mobile").style.height = "0%";
    }
    popup = !popup;
}


/*Modal image*/

// #1
// Get the modal
var modal1 = document.getElementById("myModal1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("myImg1");
var modalImg1 = document.getElementById("img01");
var captionText1 = document.getElementById("caption1");
img1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText1.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal1.style.display = "none";
}

// #2
// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal2.style.display = "none";
}

// #3
// Get the modal
var modal3 = document.getElementById("myModal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById("myImg3");
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption3");
img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal3.style.display = "none";
}

// #4
// Get the modal
var modal4 = document.getElementById("myModal4");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img4 = document.getElementById("myImg4");
var modalImg4 = document.getElementById("img04");
var captionText4 = document.getElementById("caption4");
img4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close4")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal4.style.display = "none";
}








// review data
const reviews = [
  {
    id: 1,
    name: "Monica",
    rev: "Review",
    img: "./lady1.jpg",
    text: "The best chimney cake ever!"

  },
  {
    id: 2,
    name: "David",
    rev: "Review",
    img:"./guy1.jpg",
    text: "My favourite cake in Aarhus"
  },
  {
    id: 3,
    name: "Sophie",
    rev: "Review",
    img: "./lady2.jpg",
    text: "I'll definitely come back!"
}];
  
// item selectors
const img = document.getElementById("person-img");
const customer = document.getElementById("customer");
const review_text = document.getElementById("review_text");
const rev = document.getElementById("rev");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// first item
let currentItem = 0;

// initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  customer.textContent = item.name;
  review_text.textContent = item.text;
  rev.textContent = item.rev;

});

// show person
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  customer.textContent = item.name;
  review_text.textContent = item.text;
  rev.textContent = item.rev;
}
// show next review
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev review
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});