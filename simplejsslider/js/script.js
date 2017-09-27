var slideObject = document.getElementsByClassName('slide');
var slideCount = slideObject.length; // how many slides
var slideWidth = slideObject[0].clientWidth; // what is the width per slide
var slideRow = document.getElementsByClassName('slideRow');  //
var slideNav = document.getElementsByClassName('slideNav');  //
var prev = document.getElementsByClassName('slideNavPrev');  //
var next = document.getElementsByClassName('slideNavNext');  //
var slideRowWidth;
var slideMargin = 0;
console.log(slideObject);
console.log(slideNav);
console.log('number of slides: ' + slideCount);
console.log('width per slide: ' + slideWidth);

// set row width
console.log(slideRow);
slideRowWidth = slideRow[0].style.width = slideWidth + "px";
slideRowWidth;
console.log(slideRowWidth);

// set SlideNav activity
prev[0].onclick = function(e) {
    console.log('slideMargin before update is: ' + slideMargin);
    if(slideMargin == 0) {
      slideMargin = (slideCount - 1) * slideWidth * -1;
      slideObject[0].style.marginLeft = slideMargin + "px";
      console.log('slideMargin after update is: ' + slideMargin);
    } else {
      console.log('slideMargin before update is: ' + slideMargin);
      slideMargin += slideWidth;
      slideObject[0].style.marginLeft = slideMargin + "px";
      console.log('slideMargin after update is: ' + slideMargin);
  }
}

next[0].onclick = function(e) {
  if(slideMargin == ((slideCount - 1) * slideWidth * -1) ) {
    slideMargin = 0;
    slideObject[0].style.marginLeft = slideMargin + "px";
  } else {
    console.log('slideMargin before update is: ' + slideMargin);
    slideMargin -= slideWidth;
    slideObject[0].style.marginLeft = slideMargin + "px";
    console.log('slideMargin after update is: ' + slideMargin);
  }
}
