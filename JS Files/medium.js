function closeMessage(el) {
    el.classList.add("is-hidden");
  }
  function select(selector) {
    return document.querySelector(selector);
  }
  function selectAll(selector) {
    return document.querySelectorAll(selector);
  }
  function show(el) {
    el.style.display = "block";
  }
  function hide(el) {
    el.style.display = "none";
  }
  
  window.addEventListener("load", function () {
    selectAll(".screen").forEach(function (el) {
      hide(el);
    });
    show(select("#home"));
  
    selectAll(".js-messageLike").forEach(function (el) {
      el.addEventListener("click", function (e) {
        closeMessage(el.closest(".Message"));
      });
    });
  
    selectAll("#js-showMe").forEach(function (el) {
      el.addEventListener("click", function (e) {
        alert("You're off to the tutorial. See you later!");
        closeMessage(el.closest(".Message"));
      });
    });
  
    select("#js-reset").addEventListener("click", function (e) {
      selectAll("*").forEach(function (el) {
        el.classList.remove("is-hidden");
      });
    });
  
    selectAll("nav li").forEach(function (el) {
      el.addEventListener("click", function (e) {
        selectAll(".screen").forEach(function (el) {
          hide(el);
        });
      });
    });
  
    selectAll("#js-home").forEach(function (el) {
      el.addEventListener("click", function (e) {
        show(select("#home"));
      });
    });
  
    selectAll("#js-explore").forEach(function (el) {
      el.addEventListener("click", function (e) {
        show(select("#explore"));
      });
    });
  
    selectAll("#js-social").forEach(function (el) {
      el.addEventListener("click", function (e) {
        show(select("#social"));
      });
    });
  
    selectAll("#js-settings").forEach(function (el) {
      el.addEventListener("click", function (e) {
        show(select("#settings"));
      });
    });
  });
  