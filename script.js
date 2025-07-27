// Toggle visibility and animate skill bars
document.getElementById('toggleSkills').addEventListener('click', function () {
  const skillsList = document.getElementById('devSkills');
  skillsList.classList.toggle('hidden');

  const bars = document.querySelectorAll('.skill-bar-fill');
  if (!skillsList.classList.contains('hidden')) {
    bars.forEach(bar => {
      const width = bar.getAttribute('data-skill');
      bar.style.width = width;
    });
  } else {
    bars.forEach(bar => {
      bar.style.width = '0';
    });
  }
});

// Typing effect for Dev heading
const title = document.querySelector('#development h2');
const text = title.textContent;
title.textContent = '';
let index = 0;

function typeEffect() {
  if (index < text.length) {
    title.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}

typeEffect();
