const nodemailer = require('nodemailer');

const sendAlertEmail = async (subject, message) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  let mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@example.com',
    subject: subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Alert email sent');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendAlertEmail;
