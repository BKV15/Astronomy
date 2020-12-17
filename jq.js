$(".planet").mouseenter(function(event) {
    var planetNumber = this.classList[0];
    animationState(event,planetNumber);
    highLight(event , planetNumber);
})

$(".planet").mouseleave(function(event) {
    var planetNumber = this.classList[0];
    animationState(event,planetNumber);
    highLight(event , planetNumber);
})

function animationState(e , planetNumber) {
    if (e.type === "mouseenter") {
        $(".orbit-" + planetNumber).eq(1).addClass("stop-orbit");
    } else if (e.type === "mouseleave") {
        $(".orbit-" + planetNumber).eq(1).removeClass("stop-orbit");
    }
}

function highLight(e , planetNumber) {
    if (e.type === "mouseenter") {
        $("." + planetNumber).addClass("orbit-highlight-on");
        $(".orbit-" + planetNumber).eq(0).removeClass("orbit-highlight-off")
        $(".orbit-" + planetNumber).eq(0).addClass("orbit-highlight-on");
    } else if (e.type === "mouseleave") {
        $("." + planetNumber).removeClass("orbit-highlight-on");
        $(".orbit-" + planetNumber).eq(0).removeClass("orbit-highlight-on");
        $(".orbit-" + planetNumber).eq(0).addClass("orbit-highlight-off");
    }
}
