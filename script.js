function handleSubmit(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var responseElement = document.getElementById('response');
  responseElement.innerHTML = '<p>Thank you for viewing my biography, ' + name + '! Your message has been sent.</p>';
  responseElement.style.display = 'block';
  document.getElementById('contactForm').reset();
}