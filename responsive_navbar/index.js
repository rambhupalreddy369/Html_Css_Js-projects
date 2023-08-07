let hamburger = document.querySelector(".hamburger");
let navLinks = document.getElementById("nav-links");
let links = document.querySelector(".links");

// display links onClick on Hamburger

hamburger.addEventListener("click", () => {
	navLinks.classList.toggle("hide");
	hamburger.classList.toggle("lines-rotate");
});

//Hide navlink Container onClick any single link

for (let i = 0; i < links.length; i++) {

	console.log(i);
	links[i].addEventListener("click", () => {
    debugger
		console.log(i);
		navLinks.classList.toggle("hide");
	});
}
