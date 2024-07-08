document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (form) {
      form.addEventListener('submit', (e) => {
          e.preventDefault();

          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;

          if (name && email && message) {
              alert(`Thank you, ${name}! Your message has been received.`);
              form.reset();
          } else {
              alert('Please fill out all fields.');
          }
      });
  }
});
