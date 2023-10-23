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
    var cop=0;
  
    var regexcin =/^[A-Z]{2}[0-9]+$/
    var regxEmail = /^[A-Za-z0-9_.]+@([a-z]+\.)+[a-z]{2,3}$/;
    var regexPhone = /^\+212[0-9]{9}$/;
    //cin validation 
    if(cin ==""){
        alert( "Please fill in this cin field.");
        cop++;
    }else if(!regexcin.test(cin)){
        alert( "Invalid cin ");
        cop++;
    } 
    // Email validation
    if (email == "") {
    alert( "Please fill in this email field.");
    cop++;
    } else if (!regxEmail.test(email)) {
      alert("Invalid email address.");
      cop++;
    } 

  
    // Phone validation
    if (phone == "") {
    alert(   "Please fill in this phone field.");
    cop++;
    } else if (!regexPhone.test(phone)) {
    alert( "Invalid phone number. It should start with '+212' and have 9 digits.");
    cop++;
    }
//   type validation 
 if (selectedValue === "") {
    alert("Please select a type");
    cop++;
} 

 if(cop==0){
    alert("msg enj");
}

  
  

     
}




   