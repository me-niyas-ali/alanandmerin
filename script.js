
 // Modal Image Gallery
 function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
 }
 // Change style of navbar on scroll
 window.onscroll = function() {
  myFunction()
 };

 function myFunction() {
  var navbar = document.getElementById("myNavbar");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
   navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
  } else {
   navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
  }
 }


 var countDownDate = new Date("Sep 22, 2024 12:00:00").getTime();
 const modal = document.getElementById("myModal");

 var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (distance < 0) {
   clearInterval(x);
   document.getElementById("demo").innerHTML = "Just Married ❤";
   modal.style.display = "block";
  }
 }, 1000);
 const closeBtn = document.querySelector(".close");
 closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
 });

 function closeModel() {
  var modelContainer = document.querySelector('.mymodel');
  modelContainer.style.display = 'none';
 }
