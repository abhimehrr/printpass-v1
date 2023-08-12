const nodeMailer = require("nodemailer");
const { host, port, user, pass } = require("./secrets").smtp;

// Send Mail
module.exports = (emailTo, subject, body) => {
  const transporter = nodeMailer.createTransport({
    host,
    port,
    secure: false,
    auth: { user, pass },
  });

  const mailOptions = {
    from: '"Alert PrintPass"<' + user + ">",
    replyTo: 'printpass.co.in@gmail.com',
    to: emailTo,
    subject: subject,
    html: body,
  };

  transporter
    .sendMail(mailOptions)
    .then((r) => {
      console.log("Email Sent!");
    })
    .catch((err) => {
      console.log("Error! Email not sent.");
    });
};
