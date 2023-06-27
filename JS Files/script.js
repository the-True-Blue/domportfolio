let stars = $("#stars");
let moon = $("#moon");
let mountains_behind = $("#mountains_behind");
let text = $("#text");
let mountains_front = $("#mountains_front");
$(window).on("scroll", function () {
  let targetEl = $(".section_parallax1-content");
  let posY = targetEl[0].getBoundingClientRect().y;
  let value = Math.abs(posY);
  if (value > targetEl[0].clientHeight || posY > 0) return false;
  stars.css({
    left: value * 0.25 + "px",
  });
  moon.css({
    top: value * 1.05 + "px",
  });
  mountains_behind.css({
    top: value * 0.5 + "px",
  });
  mountains_front.css({
    top: value * 0 + "px",
  });
  text.css({
    marginRight: value * 4 + "px",
    marginTop: value * 1.5 + "px",
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: false,
    rewind: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
  let popUpImageOptions = {
    markup:
      '<div class="mfp-figure">' +
      '<div class="mfp-close"></div>' +
      '<div class="mfp-img"></div>' +
      '<div class="mfp-bottom-bar">' +
      '<div class="mfp-title"></div>' +
      "</div>" +
      "</div>",
    cursor: "mfp-zoom-out-cur",
    titleSrc: "data-title",
    verticalFit: true,
    tError: '<a href="%url%">The image</a> could not be loaded.',
  };
  let popUpVideoOptions = {
    markup:
      '<div class="mfp-iframe-scaler" style="position:static;padding:0;height:auto;">' +
      '<div class="mfp-close"></div>' +
      '<video class="mfp-iframe" style="width:100%;height:100%;" controls autoplay></video>' +
      '<div class="mfp-title"></div>' +
      "</div>", // HTML markup of popup, `mfp-close` will be replaced by the close button

    srcAction: "iframe_src",
    titleSrc: "data-title",
  };
  $("#carousel1 .lightbox-link").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
    image: popUpImageOptions,
  });
  $("#carousel2 .lightbox-link").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
    image: popUpImageOptions,
  });
  $("#carousel3 .lightbox-link").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
    image: popUpImageOptions,
  });
  $("#carousel4 .lightbox-link").magnificPopup({
    type: "iframe",
    gallery: {
      enabled: true,
    },
    iframe: popUpVideoOptions,
  });

  $("#carousel4 .lightbox-link").on(
    "mfpMarkupParse",
    function (template, values, item) {
      const targetEl = $.magnificPopup.instance.currItem.el;

      values.find(".mfp-title").html($(targetEl).attr("data-title"));
    }
  );
  
  $("#carousel4 .lightbox-link").on("mfpOpen", function () {
    const targetEl = $.magnificPopup.instance.currItem.el;
    const linkUrl = window.location.href.split("#")[0] + "#popup";
  
    // Update the browser's URL without reloading
    window.history.replaceState(null, null, linkUrl);
  
    // Update the popup link's href attribute to the new URL
    $(targetEl).attr("href", linkUrl);
  });
  
  $("#carousel4 .lightbox-link").on("mfpClose", function () {
    const linkUrl = window.location.href.split("#")[0];
  
    // Restore the original URL without the fragment identifier
    window.history.replaceState(null, null, linkUrl);
  });
 

  $('#open-resume').on('click', function(){
    $('#resume-holder').fadeIn();
    $('body').addClass('overflow-hidden');
  });

  $('.go-back').on('click', function(){
    $('.popup').fadeOut();
    $('body').removeClass('overflow-hidden');
  });

  $('#open-contact').on('click', function(){
    $('#contact-holder').fadeIn();
    $('body').addClass('overflow-hidden');
  });

  $('.go-back').on('click', function(){
    $('.popup').fadeOut();
    $('body').removeClass('overflow-hidden');
  });

  $('#open-contact2').on('click', function(){
    $('#contact-holder').fadeIn();
    $('body').addClass('overflow-hidden');
  });

  $('.go-back').on('click', function(){
    $('.popup').fadeOut();
    $('body').removeClass('overflow-hidden');
  });
});

function scrollToBottom() {
  console.log(1)
  window.scrollTo({
    top: 5500,
    behavior: 'smooth'
  });
  return False;
}

function closeMenu(){
  var element = document.getElementById("mobile__menu");
   element.classList.remove("overlay--active");
}
function disableScroll() {
  console.log(22)
}
function contactForm(){
  $('#progetti1').on('click', function(){
    $('#contact-holder').fadeIn();
    $('body').addClass('overflow-hidden');
  });

  $('.go-back').on('click', function(){
    $('.popup').fadeOut();
    $('body').removeClass('overflow-hidden');
  });
}
/*
if (window.location.hash)
    scroll(0,0);
// takes care of some browsers issue
setTimeout(function(){scroll(0,0);},1);

// if we have anchor on the url (calling from other page)
if(window.location.hash){
    // smooth scroll to the anchor id
    $('html,body').animate({
        scrollTop:$(window.location.hash).offset().top + 'px'
        },4000,'swing');

}
*/
