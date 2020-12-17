var planets = document.querySelectorAll(".planet");

function stopAnimation() {
    console.log(this);
    var planetNumber = this.classList[0];
    this.classList.add("orbit-highlight-on")
    document.querySelectorAll(".orbit-" + planetNumber)[0].classList.remove("orbit-highlight-off");
    document.querySelectorAll(".orbit-" + planetNumber)[0].classList.add("orbit-highlight-on");
    document.querySelectorAll(".orbit-" + planetNumber)[1].classList.add("stop-orbit");
}

function startAnimation() {
    var planetNumber = this.classList[0];
    this.classList.remove("orbit-highlight-on");
    document.querySelectorAll(".orbit-" + planetNumber)[0].classList.remove("orbit-highlight-on");
    document.querySelectorAll(".orbit-" + planetNumber)[0].classList.add("orbit-highlight-off");
    document.querySelectorAll(".orbit-" + planetNumber)[1].classList.remove("stop-orbit");
}

for (var i = 0; i < planets.length; i++) {
    document.querySelectorAll(".planet")[i].addEventListener("mouseenter" , stopAnimation);
}

for (i = 0; i < planets.length; i++) {
    planets[i].addEventListener("mouseleave" , startAnimation);
}
