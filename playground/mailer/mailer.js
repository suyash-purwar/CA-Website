const nodemailer = require('nodemailer');


const output = `
    <h3>Contact Details</h3>
    <ul>
        <li>Name: Suyash</li>
        <li>Contact No: 9897887871</li>
        <li>Email: test.test@gmail.com</li>
    </ul>

    <h3>Message</h3>
    <p>This is a test</p>
`;


let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: 'xxxxxxxxxxxxxxxxxx',
        pass: 'xxxxxxxxxxxx'
    },
    tls: {
        rejectUnauthorized: false
    }
});

const mailOptions = {
    from: 'Suyash <suyashpurwar4035@gmail.com>',
    to: 'purwarsuyash06@gmail.com',
    subject: 'Nodemailer test',
    text: 'Hello World!!',
    html: output
};

transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
        console.log('Error');
        console.log(err);
    } else {
        console.log('Email sent');
        console.log(res);
    }
});

