
// Get the modal
var modal = document.getElementById("meroModal");

// Get the button that opens the modal
var btn = document.getElementById("btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("off")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
modal.style.display = "block";
}

span.onclick = function() {
modal.style.display = "none";
}