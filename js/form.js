function sendEmail(){
	Email.send({
    Host : "smtp.gmail.com",
    Username : "adinaone04@gmail.com",
    Password : "adina123456",
    To : 'adinaone04@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact Form Enquiry",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}