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

  stars.css({ left: value * 0.25 + "px" });
  moon.css({ top: value * 1.05 + "px" });
  mountains_behind.css({ top: value * 0.5 + "px" });
  mountains_front.css({ top: value * 0 + "px" });
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
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
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
    const videoElement = $.magnificPopup.instance.content.find(
      "iframe.mfp-iframe"
    );

    videoElement.on("load", function () {
      $.magnificPopup.instance.content
        .find(".mfp-title")
        .text(videoTitle);
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
    gallery: { enabled: true },
    image: popUpImageOptions,
  });

  $("#carousel2 .lightbox-link").magnificPopup({
    type: "image",
    gallery: { enabled: true },
    image: popUpImageOptions,
  });

  $("#carousel3 .lightbox-link").magnificPopup({
    type: "image",
    gallery: { enabled: true },
    image: popUpImageOptions,
  });

  $("#carousel4a .lightbox-link").magnificPopup({
    type: "iframe",
    gallery: { enabled: true },
    iframe: popUpVideoOptions,
  });

  $("#carousel4a .lightbox-link").on("mfpOpen", function () {
    const targetEl = $.magnificPopup.instance.currItem.el;
    const videoUrl = $(targetEl).attr("href");
    const videoTitle = $(targetEl).attr("data-title");
    const videoSource = $(targetEl).attr("data-video");
    const videoElement = $.magnificPopup.instance.content.find(
      "iframe.mfp-iframe"
    );

    videoElement.on("load", function () {
      $.magnificPopup.instance.content
        .find(".mfp-title")
        .text(videoTitle);
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
    const videoLink = $(
      "#carousel4a .lightbox-link[data-video='" + videoId + "']"
    );

    if (videoLink.length > 0) {
      videoLink.trigger("click");
    }
  }

  $("#carousel4b .lightbox-link").magnificPopup({
    type: "iframe",
    gallery: { enabled: true },
    iframe: popUpVideoOptions,
  });

  $("#carousel4b .lightbox-link").on("mfpOpen", function () {
    const targetEl = $.magnificPopup.instance.currItem.el;
    const videoUrl = $(targetEl).attr("href");
    const videoTitle = $(targetEl).attr("data-title");
    const videoSource = $(targetEl).attr("data-video");
    const videoElement = $.magnificPopup.instance.content.find(
      "iframe.mfp-iframe"
    );

    if (window.location.hash === '#carousel2') {
      setTimeout(function() {
        $('#carousel2 .lightbox-link').first().magnificPopup('open');
      }, 500); // Adjust the delay as needed
    }

    videoElement.on("load", function () {
      $.magnificPopup.instance.content
        .find(".mfp-title")
        .text(videoTitle);
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
    const videoLink = $(
      "#carousel4b .lightbox-link[data-video='" + videoId + "']"
    );

    if (videoLink.length > 0) {
      videoLink.trigger("click");
    }
  }

  $(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    var resumeUrl = urlParams.get("resume");
    var contactUrl = urlParams.get("contact");
    
    if (resumeUrl) {
      openPopup("resume", resumeUrl);
    }
    
    if (contactUrl) {
      openPopup("contact", contactUrl);
    }
  });
  
  function openPopup(type, url) {
    var popupId = "#" + type + "-holder";
    var iframeId = "#" + type + "-iframe";
    
    $(iframeId).attr("src", url);
    $(popupId).fadeIn();
    $("body").addClass("overflow-hidden");
    history.replaceState({}, "", window.location.pathname); // Remove the query parameter from the URL
    
    var popupLinkUrl =
      window.location.href.split("?")[0] +
      "?" +
      type +
      "=" +
      encodeURIComponent(url);
    history.pushState({}, "", popupLinkUrl); // Update the URL with the popup link
  }
  
  $("#open-resume").on("click", function(e) {
    e.preventDefault(); // Prevent the default link behavior
    var resumeUrl = "./Resume/resume.html"; // Change this to the actual URL of your resume file
    openPopup("resume", resumeUrl);
  });
  
  $("#link").on("click", function(e) {
    e.preventDefault(); // Prevent the default link behavior
    var resumeUrl = $(this).attr("href");
    openPopup("resume", resumeUrl);
  });
  
  $("#open-contact").on("click", function(e) {
    e.preventDefault(); // Prevent the default link behavior
    var contactUrl = "./Contact/contact.html"; // Change this to the actual URL of your contact file
    openPopup("contact", contactUrl);
  });
  
  $("#open-contact2").on("click", function(e) {
    e.preventDefault(); // Prevent the default link behavior
    var contactUrl = "./Contact/contact.html"; // Change this to the actual URL of your contact file
    openPopup("contact", contactUrl);
  });
  
  $(".go-back").on("click", function() {
    $(".popup").fadeOut();
    $("body").removeClass("overflow-hidden");
    history.replaceState({}, "", window.location.pathname); // Remove the query parameter from the URL
  });
  
});

function getYoutubeVideoId(url) {
  var match = url.match(
    /(?:\/|%3D|v=|vi=)([0-9A-Za-z-_]{11})(?:[%#?&]|$)/
  );

  if (match && match[1]) {
    return match[1];
  } else {
    return null;
  }
}

$(document).on(
  "click",
  "button.mfp-arrow.mfp-arrow-left.mfp-prevent-close",
  (e) => {
    let vid = getYoutubeVideoId(
      $(e.currentTarget)
        .closest(".mfp-gallery")
        .find(".mfp-content iframe")
        .attr("src")
    );

    if (vid) {
      $(e.currentTarget)
        .closest(".mfp-gallery")
        .find(".mfp-content iframe")
        .attr("src", `https://www.youtube.com/embed/${vid}?autoplay=1`);
    }
  }
);

$(document).on(
  "click",
  "button.mfp-arrow.mfp-arrow-right.mfp-prevent-close",
  (e) => {
    let vid = getYoutubeVideoId(
      $(e.currentTarget)
        .closest(".mfp-gallery")
        .find(".mfp-content iframe")
        .attr("src")
    );

    if (vid) {
      $(e.currentTarget)
        .closest(".mfp-gallery")
        .find(".mfp-content iframe")
        .attr("src", `https://www.youtube.com/embed/${vid}?autoplay=1`);
    }
  }
);

function scrollToBottom() {
  console.log(1);
  window.scrollTo({
    top: 5500,
    behavior: 'smooth'
  });
}

function closeMenu() {
  var element = document.getElementById("mobile__menu");
  element.classList.remove("overlay--active");
  document.body.classList.remove("disable-scroll");
}


function disableScroll() {
  $("body").addClass("disable-scroll");
  console.log("Scroll disabled");
}

function contactForm() {
  $("#contact-holder").fadeIn();
  $("body").addClass("overflow-hidden");

  // Update URL
  var url = window.location.href.split("#")[0] + "#contact";
  history.pushState(null, null, url);
}

function goBack() {
  $(".popup").fadeOut();
  $("body").removeClass("overflow-hidden");

  // Update URL
  var url = window.location.href.split("#")[0];
  history.pushState(null, null, url);
}

// Show contact form if URL has #contact fragment
function handleInitialURL() {
  var url = window.location.href;
  if (url.indexOf("#contact") !== -1) {
    contactForm();
  }
}

$(document).ready(function() {
  $(".menua.cta").on("click", function() {
    disableScroll();
  });

  $(".close").on("click", function() {
    closeMenu();
  });

  $("#progetti1").on("click", function() {
    contactForm();
    return false;
  });

  $(".go-back").on("click", function() {
    goBack();
  });

  // Handle initial URL
  handleInitialURL();
});


//finished
