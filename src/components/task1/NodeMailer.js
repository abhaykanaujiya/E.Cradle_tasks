import { createTransport } from "nodemailer";
function nodemailer() {
 let transporter = createTransport({
   host: "smtp.ethereal.email",
   port: 587,
   auth: {
     user: process.env.REACT_APP_AUTH_USER,
     pass: process.env.REACT_APP_AUTH_PASSWORD,
   },
 });

  const mailOptions = {
    from: "rosalind.gibson7@ethereal.email",
    to: "abhaykanaujiya@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

export default nodemailer

// const { createTransport, SendMailOptions, Transporter } = require("nodemailer");

// import { renderToStaticMarkup } from "react-dom/server";

// const renderBody = (body) => `<!DOCTYPE html>${renderToStaticMarkup(body)}`;

// const createTransporter = ({ transport, defaults }) => {
//   if ("sendMail" in transport) {
//     return transport;
//   }

//   return createTransport(transport, defaults);
// };

// export const Mailer = (config, emails) => {
//   const transporter = createTransporter(config);

//   const sendEmail = (template, props, options) => {
//     const { subject, body } = emails[template](props);

//     return transporter.sendMail({
//       subject,
//       html: renderBody(body),
//       ...options,
//     });
//   };

//   return {
//     send: sendEmail,
//   };
// };

// export default Mailer;
