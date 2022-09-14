const doc = document;
const menuOpen = doc.getElementById("menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const project=doc.getElementById('progetti');
console.log(project);




menuOpen.addEventListener("click", () => {
  
  overlay.classList.add("overlay--active");

});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
  doc.getElementById("progetti4").style.display = "none";
  doc.getElementById("progetti5").style.display = "none";
  doc.getElementById("arrow-back-project").style.display = "none";
  doc.getElementById("progetti").style.display = "block";
  doc.getElementById("progetti1").style.display = "block";
  doc.getElementById("progetti2").style.display = "block";

});

function ApriProgetti(){
  doc.getElementById("progetti").style.display = "none";
  doc.getElementById("progetti1").style.display = "none";
  doc.getElementById("progetti2").style.display = "none";
  doc.getElementById("progetti4").style.display = "block";
  doc.getElementById("progetti5").style.display = "block";
  doc.getElementById("arrow-back-project").style.display = "block";

}

function ChiudiProgetti(){
  doc.getElementById("arrow-back-project").style.display = "none";
  doc.getElementById("progetti4").style.display = "none";
  doc.getElementById("progetti5").style.display = "none";
  doc.getElementById("progetti").style.display = "block";
  doc.getElementById("progetti1").style.display = "block";
  doc.getElementById("progetti2").style.display = "block";

}





























