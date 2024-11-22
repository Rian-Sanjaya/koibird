var newSlider = document.querySelector("#new-in-slider .listitems")
var bestSlider = document.querySelector("#best-sellers .listitems")
var slideNumberNew = 0
var slideNumberBest = 0

function handleclickNew(direction) {
  if (direction === "left" && slideNumberNew > 0) {
    slideNumberNew -= 1
    var distance = newSlider.getBoundingClientRect().width
    newSlider.style.transform = `translateX(${0}px)`
  }

  if (direction === "right" && slideNumberNew < 1) {
    slideNumberNew += 1
    var distance = newSlider.getBoundingClientRect().width
    newSlider.style.transform = `translateX(-${distance}px)`
  }
}

function handleclickBest(direction) {
  if (direction === "left" && slideNumberBest > 0) {
    slideNumberBest -= 1
    var distance = bestSlider.getBoundingClientRect().width
    bestSlider.style.transform = `translateX(${0}px)`
  }

  if (direction === "right" && slideNumberBest < 1) {
    slideNumberBest += 1
    var distance = bestSlider.getBoundingClientRect().width
    bestSlider.style.transform = `translateX(-${distance}px)`
  }
}