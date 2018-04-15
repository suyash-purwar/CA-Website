// This file is reponsible for sending POST requests to nodeJS
// Using Pusher API to update frontend after sending mail to ethereal account
// Data sended from Contact Us section reaches to ethereal account through nodemailer package

document.getElementById("get-in-touch").addEventListener('submit', (e) => {
   const data = {
      name: document.querySelector('input[name=name]'),
      phone: document.querySelector('input[name=phone_no]'),
      email: document.querySelector('input[name=email'),
      message: document.querySelector('input[name=message]')
   };

   fetch('/contactus_send', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
         'Content-Type': 'application/json'
      })
   })
   .then(res => res.json())
   .then(data => console.log(data))
   .catch(error => console.log(error));

   e.preventDefault();
});

// print a Pusher connection logs in console
// this is not for production purposes
// remove it when u deploy
Pusher.logToConsole = true;

// Pusher authentication
var pusher = new Pusher('938beaa35cae32bebd96', {
  cluster: 'ap2',
  encrypted: true
});

// Created channel
var contactusMessageChannel = pusher.subscribe('contactus-channel');

// Making pusher event which listents to trigger event made from app.js (main file)
contactusMessageChannel.bind('contactus-send', (data) => {
  Materialize.toast(data.message, 4000);
});
