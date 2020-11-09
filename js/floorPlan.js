// ########################## Start #############################
// floor plan tab functions
function serenityFunc(evt,blocks) {
    var i, planView, tablinks;
    planView = document.getElementsByClassName("tabcontent");
    for (i = 0; i < planView.length; i++) {
      planView[i].style.display = "none";
      planView[i].className = "planView tabcontent hidden";
  
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active-spec", " ");
    }
    document.getElementById(blocks).style.display = "block";
    document.getElementById(blocks).className = "planView tabcontent";
    evt.currentTarget.className += " active-spec";
  }
// ########################## End ############################

// ########################## Start #############################
// floor plan fiter
var serenityBHKS = 1
var serenityFACES = 'east'
var serenityBLOCKS = 'A'

function serenityFloorFunction(elmnt, id) {
    // console.log(id)
    // alert(id)
    if (id == "serenity1BHK"){
        document.getElementById(id).classList.add('active');
        if ( document.getElementById("serenity2BHK").classList.contains('active') ) {
            document.getElementById("serenity2BHK").classList.remove('active')
        }
        if ( document.getElementById("serenity3BHK").classList.contains('active') ) {
            document.getElementById("serenity3BHK").classList.remove('active')
        }
        serenityBHKS = 1
    }
    if (id == "serenity2BHK"){
        document.getElementById(id).classList.add('active');
        if ( document.getElementById("serenity1BHK").classList.contains('active') ) {
            document.getElementById("serenity1BHK").classList.remove('active')
        }
        if ( document.getElementById("serenity3BHK").classList.contains('active') ) {
            document.getElementById("serenity3BHK").classList.remove('active')
        }
        serenityBHKS = 2
    }
    if (id == "serenity3BHK"){
        document.getElementById(id).classList.add('active');
        if ( document.getElementById("serenity2BHK").classList.contains('active') ) {
            document.getElementById("serenity2BHK").classList.remove('active')
        }
        if ( document.getElementById("serenity1BHK").classList.contains('active') ) {
            document.getElementById("serenity1BHK").classList.remove('active')
        }
        serenityBHKS = 3
    }
    simpAnother()
    // alert(serenityBHKS)
    // document.getElementById(id).classList.add('active');
    // document.getElementById("demo").innerHTML = "Hello World";
  }

  function serenityFaceFunction(elmnt) {
    serenityFACES = document.getElementById("serenitySelectFacing").value;
    // alert(serenityFACES)
    simpAnother()
  }

  function serenityBlockFunction(elmnt) {
    serenityBLOCKS = document.getElementById("serenitySelectBlock").value;
    // alert(serenityFACES)
    simpAnother()
  }

  function simpAnother(){
      console.log(serenityBHKS,serenityFACES,serenityBLOCKS)
  }
// ########################## End ############################



// ########################## Start ############################
// carousel images modal #################################################
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");
var img7 = document.getElementById("myImg7");
var img8 = document.getElementById("myImg8");
var img9 = document.getElementById("myImg9");
var img10 = document.getElementById("myImg10");
var img11 = document.getElementById("myImg11");
var img12 = document.getElementById("myImg12");
var img13 = document.getElementById("myImg13");
var img14 = document.getElementById("myImg14");
var img15 = document.getElementById("myImg15");
var img16 = document.getElementById("myImg16");
var img17 = document.getElementById("myImg17");
var img18 = document.getElementById("myImg18");
var img19 = document.getElementById("myImg19");
var img20 = document.getElementById("myImg20");
var img21 = document.getElementById("myImg21");
var img22 = document.getElementById("myImg22");
var img23 = document.getElementById("myImg23");
var img24 = document.getElementById("myImg24");


var img25 = document.getElementById("myImg25");
var img26 = document.getElementById("myImg26");
var img27 = document.getElementById("myImg27");
var img28 = document.getElementById("myImg28");
var img29 = document.getElementById("myImg29");
var img30 = document.getElementById("myImg30");
var img31 = document.getElementById("myImg31");
var img32 = document.getElementById("myImg32");
var img33 = document.getElementById("myImg33");
var img34 = document.getElementById("myImg34");
var img35 = document.getElementById("myImg35");
var img36 = document.getElementById("myImg36");
var img37 = document.getElementById("myImg37");
var img38 = document.getElementById("myImg38");
var img39 = document.getElementById("myImg39");
var img40 = document.getElementById("myImg40");
var img41 = document.getElementById("myImg41");
var img42 = document.getElementById("myImg42");
var img43 = document.getElementById("myImg43");
var img44 = document.getElementById("myImg44");
var img45 = document.getElementById("myImg45");
var img46 = document.getElementById("myImg46");
var img47 = document.getElementById("myImg47");
var img48 = document.getElementById("myImg48");


var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img5.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img6.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img7.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img8.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img9.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img10.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img11.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img12.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img13.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img14.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img15.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img16.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img17.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img18.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img19.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img20.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img21.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img22.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img23.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  img24.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
// ########################## End ############################
