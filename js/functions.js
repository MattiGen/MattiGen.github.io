/* When the user clicks on the button, 
      toggle between hiding and showing the dropdown content */
function listDocs() {
    document.getElementById("myDropdown").classList.toggle("show");
    }
      
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

function listProjs() {
    document.getElementById("myDropdown2").classList.toggle("show");
    }
      
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(e) {
    if (!e.target.matches('.dropbtn2')) {
        var myDropdown = document.getElementById("myDropdown2");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("fydp1");
var img2 = document.getElementById("fydp2");
var img3 = document.getElementById("fydp3")
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

//TODO: Clean this code, allow me to cycle through left and right
//TODO: Make escape close image