
const slideElPrev = document.querySelector (".prev")
const slideEl = document.querySelector (".slide")
const slideElNext = document.querySelector (".next")
const slides = [ 
	"1.jpg",
	"2.jpg",
	"3.jpg",
]

let currentSlide = 0

function getSlideURL(n){
	return "img/" + slides[mod(n,slides.length)]
}

function setCurrentSlide( n ) {
	currentSlide = n
	slideElPrev.style.backgroundImage = "url(" + getSlideURL(n-1) + ")"
	slideEl.style.backgroundImage = "url(" + getSlideURL(n) + ")"
	slideElNext.style.backgroundImage = "url(" + getSlideURL(n+1) + ")"
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


