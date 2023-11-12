
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


 function callback(entries) {
  for (let i = 0; i < entries.length; i++) {
   entries[i].target.src = (entries[i].isIntersecting) ? entries[i].target.getAttribute("data-src") : "";
  }
 }
 const gifs = document.querySelectorAll(".gif");
 const observer = new IntersectionObserver(callback);
 for (let i = 0; i < gifs.length; i++) {
  observer.observe(gifs[i]);
 }


 var countDownDate = new Date("sep 22, 2024 12:00:00").getTime();
 const modal = document.getElementById("myModal");

 function startConfettiAnimation(containerId, numConfetti) {
  const container = document.getElementById(containerId);
  for (let i = 0; i < numConfetti; i++) {
   const confetti = document.createElement("div");
   confetti.classList.add("confetti");
   confetti.style.left = Math.random() * 100 + "%";
   confetti.style.animationDelay = Math.random() * 8 + "s";
   const randomSize = Math.random() * 10 + 8;
   confetti.style.width = `${randomSize}px`;
   confetti.style.height = `${randomSize}px`;
   confetti.innerHTML = `
	<svg
		xmlns="http://www.w3.org/2000/svg" width="${randomSize}" height="${randomSize}" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
		<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" fill="#ff5274"></path>
	</svg>`;
   container.appendChild(confetti);
  }
 }
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
   document.getElementById("demo").innerHTML = "Just Married";
   modal.style.display = "block";
   startConfettiAnimation("confetti-container1", 25);
   startConfettiAnimation("confetti-container2", 35);
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
