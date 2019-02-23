var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

let currFontsize = document.querySelector('#elem');

let currLineheight = document.querySelector('#elem span');

let fontsizeElem = document.getElementById('font-size-1');
let lineheightElem = document.getElementById('line-height-1');


let fontsize = fontsizeElem.value;
let lineheight = lineheightElem.value;

fontsizeElem.addEventListener('change', () => {
  currFontsize.style.setProperty("--font-size", fontsizeElem.value);
});

/*lineheightElem.addEventListener('change', () => {
   currLineheight.style.setProperty("--line-height",  lineheightElem.value);
});
// set from ui the fontsize and line height to see the differences



//console.log(fontsize.value);
// get variable from inline style



getComputedStyle(currFontsize).getPropertyValue("--line-height");

//element.style.getPropertyValue("--line-height");

// get variable from wherever
//getComputedStyle(element).getPropertyValue("--my-var");
