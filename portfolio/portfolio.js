// Smooth scroll
function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

// Typing effect
const text = "CSE Student | Web Developer | Programmer";
let index = 0;

function typingEffect() {
  const typingElement = document.querySelector(".typing");
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typingEffect, 80);
  }
}

window.onload = () => {
  typingEffect();
};