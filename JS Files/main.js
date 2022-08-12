let input = document.getElementById('email');
let button = document.getElementById('submit');
button.disabled = true;
input.addEventListener("change", stateHandle);
function stateHandle() {
  if (document.getElementsByClassName("input").value === "") {
    button.disabled = true; 
    console.log('true');
  } else {
    button.disabled = false;
    console.log('false');

  }
}