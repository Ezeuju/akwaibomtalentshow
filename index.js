// FORM CODE

// const form = document.getElementById('contact-form');
// form.addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent the default form submission

  // const formData = new FormData(form);
  // const formDataObject = Object.fromEntries(formData);
  // const jsonData = JSON.stringify(formDataObject);

  // Replace the email address with the desired recipient
  // const emailAddress = 'akwaibomtalent@gmail.com';

  // Send the form data to the email address
//   fetch(`https://formspree.io/f/xkndvgbz${emailAddress}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: jsonData
//   })
//   .then(response => {
//     if (response.ok) {
//       alert('Your message has been sent successfully!');
//       form.reset(); // Reset the form after successful submission
//     } else {
//       alert('An error occurred while sending your message. Please try again later.');
//     }
//   })
//   .catch(error => {
//     alert('An error occurred while sending your message. Please try again later.');
//     console.error('Error:', error);
//   });
// });