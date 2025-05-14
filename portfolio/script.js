// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Initialize EmailJS with your public key
  emailjs.init("e_fsx2ffR3jqrXr0O"); // ✅ Replace with your actual public key

  // Handle form submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Send the form using EmailJS
      emailjs.sendForm("service_dvapb7z", "template_7uiwh5n", this)
        .then(function () {
          alert("✅ Message sent successfully!");
          contactForm.reset(); // Clear form after successful send
        }, function (error) {
          alert("❌ Failed to send message. Error: " + JSON.stringify(error));
        });
    });
  }
});

