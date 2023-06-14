// Chatbot

var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

// Button

var buttonElement = document.getElementById("toggle-button");
var textElement = document.getElementById("additional-text");
var textElement2 = document.getElementById("additional-text-2");

var buttonElement2 = document.getElementById("toggle-button2");
var jenisDepresi4 = document.getElementById("jenisDeprisi4-text");
var jenisDepresi5 = document.getElementById("jenisDeprisi5-text");
var jenisDepresi6 = document.getElementById("jenisDeprisi6-text");
var jenisDepresi7 = document.getElementById("jenisDeprisi7-text");

var buttonElement3 = document.getElementById("toggle-button3");
var gejala1 = document.getElementById("gejala1-text");
var gejala2 = document.getElementById("gejala2-text");
var gejala3 = document.getElementById("gejala3-text");

var buttonElement4 = document.getElementById("toggle-button4");
var caraMengatasi1 = document.getElementById("caraMengatasi1-text");
var caraMengatasi2 = document.getElementById("caraMengatasi2-text");
var caraMengatasi3 = document.getElementById("caraMengatasi3-text");
var caraMengatasi4 = document.getElementById("caraMengatasi4-text");
var caraMengatasi5 = document.getElementById("caraMengatasi5-text");

buttonElement.addEventListener("click", toggleText);
buttonElement2.addEventListener("click", toggleText2);
buttonElement3.addEventListener("click", toggleText3);
buttonElement4.addEventListener("click", toggleText4);

function toggleText() {
    if (textElement.style.display === "none") {
        textElement.style.display = "block";
        textElement2.style.display = "block";
        buttonElement.textContent = "Lebih Sedikit";
    } else {
        textElement.style.display = "none";
        textElement2.style.display = "none";
        buttonElement.textContent = "Lanjut Baca";
    }
}

function toggleText2() {
    if (jenisDepresi4.style.display === "none") {
        jenisDepresi4.style.display = "block";
        jenisDepresi5.style.display = "block";
        jenisDepresi6.style.display = "block";
        jenisDepresi7.style.display = "block";
        buttonElement2.textContent = "Lebih Sedikit";
    } else {
        jenisDepresi4.style.display = "none";
        jenisDepresi5.style.display = "none";
        jenisDepresi6.style.display = "none";
        jenisDepresi7.style.display = "none";
        buttonElement2.textContent = "Lanjut Baca";
    }
}

function toggleText3() {
    if (gejala1.style.display === "none") {
        gejala1.style.display = "block";
        gejala2.style.display = "block";
        gejala3.style.display = "block";
        buttonElement3.textContent = "Lebih Sedikit";
    } else {
        gejala1.style.display = "none";
        gejala2.style.display = "none";
        gejala3.style.display = "none";
        buttonElement3.textContent = "Lanjut Baca";
    }
}

function toggleText4() {
    if (caraMengatasi1.style.display === "none") {
        caraMengatasi1.style.display = "block";
        caraMengatasi2.style.display = "block";
        caraMengatasi3.style.display = "block";
        caraMengatasi4.style.display = "block";
        caraMengatasi5.style.display = "block";
        buttonElement4.textContent = "Lebih Sedikit";
    } else {
        caraMengatasi1.style.display = "none";
        caraMengatasi2.style.display = "none";
        caraMengatasi3.style.display = "none";
        caraMengatasi4.style.display = "none";
        caraMengatasi5.style.display = "none";
        buttonElement4.textContent = "Lanjut Baca";
    }
}

// Scroll

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}