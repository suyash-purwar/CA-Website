const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");
var Pusher = require('pusher');

const app = express();
// Port Num
const port = process.env.PORT || 3000;

// Static folder
app.use(express.static(__dirname + '/public'))

// Bode Parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Authenticating user
var pusher = new Pusher({
  appId: '509389',
  key: '938beaa35cae32bebd96',
  secret: '92a72a2b2efad3138d02',
  cluster: 'ap2',
  encrypted: true
});

app.get('/', (req, res) => {
   res.sendFile('index.html', {root: path.join(__dirname + "/public/html")});
});

app.post('/contactus_send', (req, res) => {
   const smtp = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
         user: 'kh5wxu72rfn5aatn@ethereal.email',
         pass: 'NxWrTUrnWb9VKvaSvS'
      },
      tls: {
         rejectUnauthorized: false
      }
   });

   const output = `
      <h3>Contact Details</h3>
      <ul>
            <li>Name: ${req.body.name}</li>
            <li>Contact No: ${req.body.phone}</li>
            <li>Email: ${req.body.email}/li>
      </ul>

      <h3>Message</h3>
      <p>${req.body.message}</p>
   `;

   const mailOptions = {
      from: 'LT & ASSOCAITES <suyashpurwar4035@gmail.com>',
      to: 'purwarsuyash06@gmail.com',
      subject: 'A Question',
      html: output
   };

   smtp.sendMail(mailOptions, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        pusher.trigger('contactus-channel', 'contactus-send', {
           message: "You've suceessfully reached us! We will contact you soon."
        })
      }
   });
});

// Setting up port
app.listen(port, () => {
   console.log(`Server is up on port ${port}`);
});