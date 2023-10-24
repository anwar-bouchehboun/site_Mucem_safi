// nav
const humb = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");
humb.addEventListener("click", () => {
    humb.classList.toggle("active");
    navmenu.classList.toggle("active");
});

// Remove menu when a link is clicked
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        humb.classList.remove("active");
        navmenu.classList.remove("active");
    });
});

// faq

var faqItem = document.querySelectorAll(".faq-item");

faqItem.forEach((item) => {
    var question = item.querySelector(".question");
    var answer = item.querySelector(".answer");
    question.addEventListener("click", () => {
        answer.classList.toggle("active");
    });
    
});
// form js

function add() {
    var email = document.getElementById("email").value;
    var phone = document.getElementById("tele").value;
    var cin = document.getElementById("cin").value;
  
    var selectElement = document.getElementById("type");
    var selectedValue = selectElement.value;
    var cop = 0;
  
    var regexcin = /^[A-Z]{1,2}[0-9]+$/;
    var regxEmail = /^[A-Za-z0-9_.]+@([a-z]+\.)+[a-z]{2,3}$/;
    var regexPhone = /^\+212[0-9]{9}$/;
  
    // cin validation
    if (cin === "" || !regexcin.test(cin)) {
      document.getElementById("erreurcin").innerHTML = "*";
      document.getElementById("erreurcin").style.color = 'red';
      cop++;
    }
else{
    document.getElementById("erreurcin").innerHTML = "";
}
  
    // Email validation
    if (email === "" || !regxEmail.test(email)) {
      document.getElementById("erreuremail").innerHTML = "*";
      document.getElementById("erreuremail").style.color = 'red';
      cop++;
    }else{
        document.getElementById("erreuremail").innerHTML = "";
    }
  
    // Phone validation
    if (phone === "" || !regexPhone.test(phone)) {
      document.getElementById("erreurtele").innerHTML = "*";
      document.getElementById("erreurtele").style.color = 'red';
      cop++;
    }else{
        document.getElementById("erreurtele").innerHTML = "";
    }
  
    // Type validation
    if (selectedValue === "Type Atelier") {
      document.getElementById("erreurtype").innerHTML = "*";
      document.getElementById("erreurtype").style.color = 'red';
      cop++;
    }
  
    if (cop === 0) {
     
         document.getElementById("MSSAGE").innerHTML="Message Env";
         document.getElementById("email").value = "";
    document.getElementById("tele").value = "";
    document.getElementById("erreurtype").innerHTML = "";
    document.getElementById("type").value = "Type Atelier";
    
    }
  
  }
  
     


//slide images
var i=0;
var image=['css/imggallery/poterie_safi_maalam4.png','css/imggallery/artiste 2.jpg','css/imggallery/poterie_tuille_argil6-2.png'];
var time=3000;
function change(){
    document.slide.src=image[i];
    if(i<image.length-1){
        i++;
    }else{
        i=0;
    }
    setTimeout("change()",time);
}
window.onload=change;
//    gallery vedio 

function openVideoPopup() {
    var videoPopup = document.getElementById("video-popup");
    videoPopup.style.display = "block";
}

function closeVideoPopup() {
var videoPopup = document.getElementById("video-popup");
videoPopup.style.display = "none";
}
document.querySelector(".image").addEventListener("click", openVideoPopup);
document.querySelector(".close-button").addEventListener("click", closeVideoPopup);


