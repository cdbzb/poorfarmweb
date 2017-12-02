
const slideElPrev = document.querySelector (".prev")
const slideEl = document.querySelector (".slide")
const slideElNext = document.querySelector (".next")
const slides = [ 
	{ background: "1.jpg" },
	{ background: "2.jpg" },
	{ background: "3.jpg" },
	{ html: "<video src='raw/Flitter Demo.mp4'> </video>" },
]

let currentSlide = 0

function getSlide(n){
	return slides[mod(n,slides.length)]
}

function getSlideBackground(n){
	const slide=getSlide(n)
	return slide.background ? "url(img/" + slide.background + ")" : ""
}

function setCurrentSlide( n ) {
	currentSlide = n
	slideElPrev.style.backgroundImage = getSlideBackground (n-1) 
	slideElPrev.innerHTML = getSlide (n-1).html || ""
	const prevVid = slideElPrev.querySelector("video")
	prevVid && prevVid.pause()

	slideEl.style.backgroundImage = getSlideBackground (n) 
	slideEl.innerHTML = getSlide (n).html || ""
	const Vid = slideEl.querySelector("video")
	Vid && Vid.play()

	slideElNext.style.backgroundImage = getSlideBackground (n+1)
	slideElNext.innerHTML = getSlide (n+1).html || ""
	const nextVid = slideElNext.querySelector("video")
	nextVid && nextVid.pause()
}
setCurrentSlide(0)

function mod( n , base ){
	return (n % base + base) % base 
}


document.addEventListener("keydown",e => {
    //console.log(e.keyCode)
    if (e.keyCode == 37) {
	    e.preventDefault()
	    console.log("left")
	    slideElPrev.classList.add("visible")
	    setTimeout(e => {
		    slideElPrev.classList.remove("visible")
		    setCurrentSlide(currentSlide-1)
	    },500)
    } else if (e.keyCode == 39) {
	    e.preventDefault()
	    console.log("right")
	    slideElNext.classList.add("visible")
	    setTimeout(e => {
		    slideElNext.classList.remove("visible")
		    setCurrentSlide(currentSlide+1)
	    },500)
    }

})


window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();

function playSound(buffer) {
  var source = context.createBufferSource(); // creates a sound source
  source.buffer = buffer;                    // tell the source which sound to play
  source.connect(context.destination);       // connect the source to the context's destination (the speakers)
  source.start(0);                           // play the source now
                                             // note: on older systems, may have to use deprecated noteOn(time);
