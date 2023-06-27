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
      '<div class="mfp-iframe-scaler">' +
      '<div class="mfp-close"></div>' +
      '<div class="mfp-iframe-wrapper">' +
      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
      "</div>" +
      '<div class="mfp-title"></div>' +
      "</div>",
    srcAction: "iframe_src",
    type: "iframe",
  };

  function openVideoPopup(videoLink) {
    const targetEl = videoLink;
    const videoUrl = $(targetEl).attr("href");
    const videoTitle = $(targetEl).attr("data-title");
    const videoSource = $(targetEl).attr("data-video");

    const videoElement = $.magnificPopup.instance.content.find("iframe.mfp-iframe");

    videoElement.on("load", function () {
      $.magnificPopup.instance.content.find(".mfp-title").text(videoTitle);
      videoElement[0].contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    });

    videoElement.attr("src", videoUrl);

    const fragmentIdentifier = "#" + videoSource + "a";
    window.history.replaceState(null, null, fragmentIdentifier);
  }

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

  $("#carousel4a .lightbox-link").magnificPopup({
    type: "iframe",
    gallery: {
      enabled: true,
    },
    iframe: popUpVideoOptions,
  });

  $("#carousel4a .lightbox-link").on("mfpOpen", function () {
    const targetEl = $.magnificPopup.instance.currItem.el;
    const videoUrl = $(targetEl).attr("href");
    const videoTitle = $(targetEl).attr("data-title");
    const videoSource = $(targetEl).attr("data-video");

    const videoElement = $.magnificPopup.instance.content.find("iframe.mfp-iframe");

    videoElement.on("load", function () {
      $.magnificPopup.instance.content.find(".mfp-title").text(videoTitle);
      window.history.replaceState(null, null, "#" + videoSource);
      videoElement[0].contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    });

    videoElement.attr("src", videoUrl);
  });

  $("#carousel4a .lightbox-link").on("mfpClose", function () {
    const linkUrl = window.location.href.split("#")[0];
    window.history.replaceState(null, null, linkUrl);
  });

  if (window.location.hash) {
    const videoId = window.location.hash.substring(1);
    const videoLink = $("#carousel4a .lightbox-link[data-video='" + videoId + "']");
    if (videoLink.length > 0) {
      videoLink.trigger("click");
    }
  }

  $("#carousel4b .lightbox-link").magnificPopup({
    type: "iframe",
    gallery: {
      enabled: true,
    },
    iframe: popUpVideoOptions,
  });

  $("#carousel4b .lightbox-link").on("mfpOpen", function () {
    const targetEl = $.magnificPopup.instance.currItem.el;
    const videoUrl = $(targetEl).attr("href");
    const videoTitle = $(targetEl).attr("data-title");
    const videoSource = $(targetEl).attr("data-video");

    const videoElement = $.magnificPopup.instance.content.find("iframe.mfp-iframe");

    videoElement.on("load", function () {
      $.magnificPopup.instance.content.find(".mfp-title").text(videoTitle);
      window.history.replaceState(null, null, "#" + videoSource);
      videoElement[0].contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    });

    videoElement.attr("src", videoUrl);
  });

  $("#carousel4b .lightbox-link").on("mfpClose", function () {
    const linkUrl = window.location.href.split("#")[0];
    window.history.replaceState(null, null, linkUrl);
  });

  if (window.location.hash) {
    const videoId = window.location.hash.substring(1);
    const videoLink = $("#carousel4b .lightbox-link[data-video='" + videoId + "']");
    if (videoLink.length > 0) {
      videoLink.trigger("click");
    }
  }

  
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
