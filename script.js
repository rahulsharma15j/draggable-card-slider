const slider = document.querySelector(".slider");
const leftArrowBtn = document.getElementById("left-arrow");
const rightArrowBtn = document.getElementById("right-arrow");
const profileCard = document.querySelector(".profile-card");

//current mouse pointer position
let pointerPosition;

//slider current scroll position from left
let sliderScrollLeft;

//boolean
let isDrag = false;

//profile card width
let cardWidth = profileCard.offsetWidth;

//function to start dragging slider
const start = (event) => {
  isDrag = true;
  //The pageX property returns the document relative X coordinate of the mouse pointer when a mouse event occurs.
  pointerPosition = event.pageX;
  //The scrollLeft property sets or returns the number of pixels an element's content is scrolled horizontally.
  sliderScrollLeft = slider.scrollLeft;
  //adding drag class to slider
  slider.classList.add("drag");
};

const drag = (event) => {
  if (!isDrag) return;
  //calculating slider scroll value from left
  slider.scrollLeft = sliderScrollLeft - (event.pageX - pointerPosition);
};

const stop = () => {
  isDrag = false;
  //removing drag class from slider

  slider.classList.remove("drag");
};

leftArrowBtn.addEventListener("click", () => {
  //scroll slider equal to profile card width value to left
  slider.scrollLeft += -(cardWidth + 19);
});

rightArrowBtn.addEventListener("click", () => {
  //scroll slider equal to profile card width value from left
  slider.scrollLeft += cardWidth + 19;
});

slider.addEventListener("mousedown", start);
slider.addEventListener("mousemove", drag);
slider.addEventListener("mouseup", stop);
