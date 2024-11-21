// script.js

const container = document.querySelector('.fireworks-container');

// Function to create a firework
function createFirework(x, y) {
  const particleCount = 30; // Number of particles per firework
  const angleIncrement = (2 * Math.PI) / particleCount;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Random color for the particle
    const color = `hsl(${Math.random() * 360}, 100%, 70%)`;
    particle.style.background = color;

    // Calculate random trajectory
    const angle = angleIncrement * i;
    const radius = Math.random() * 100 + 50;
    const xOffset = Math.cos(angle) * radius;
    const yOffset = Math.sin(angle) * radius;

    particle.style.setProperty('--x', `${xOffset}px`);
    particle.style.setProperty('--y', `${yOffset}px`);
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    // Add particle to container
    container.appendChild(particle);

    // Remove particle after animation
    particle.addEventListener('animationend', () => {
      particle.remove();
    });
  }
}

// Add fireworks on click
container.addEventListener('click', (e) => {
  createFirework(e.clientX, e.clientY);
});

// Optionally, automatically trigger fireworks
setInterval(() => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  createFirework(x, y);
}, 500);
