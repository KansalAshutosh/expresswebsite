//File Name: form.js
//Student's Name: Ashutosh Kansal
//StudentID: 301233980
//Date: 22 June, 2023


// Get the reference to the form and submit button
const contactForm = document.getElementById("contactForm");
const submitButton = document.getElementById("submitButton");

// Form submission event listener
contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting
  alert("Form is submitted!"); // Display the alert message

  window.location.href = " /..";
});
