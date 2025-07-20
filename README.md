# Trigger Email (Node.js with Gmail & Nodemailer)

This project demonstrates how to send emails using Node.js, Gmail, and Nodemailer.  
**Follow the steps below to set up and run the application.**

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Step 1: Enable Gmail App Passwords](#step-1-enable-gmail-app-passwords)
- [Step 2: Clone the Project](#step-2-clone-the-project)
- [Step 3: Configure Your Gmail Credentials](#step-3-configure-your-gmail-credentials)
- [Step 4: Install Dependencies](#step-4-install-dependencies)
- [Step 5: Run the Project](#step-5-run-the-project)
- [Code Overview](#code-overview)
- [Troubleshooting](#troubleshooting)
- [Security Note](#security-note)

---

## Prerequisites

- Gmail account
- Node.js (recommended v18+)
- Internet connection

---

## Step 1: Enable Gmail App Passwords

Google has discontinued "Less Secure Apps." Use [App Passwords](https://support.google.com/accounts/answer/185833?hl=en) with 2-Step Verification:

1. Go to your [Google Account Security Page](https://myaccount.google.com/security).
2. Enable **2-Step Verification** (required for App Passwords).
3. After enabling, go to **App Passwords**.
4. Select "Mail" as the app and "Other" (enter any name) as the device.
5. Google will generate a 16-character App Password.  
   Copy this password—you’ll use it in place of your Gmail password in the code.

---

## Step 2: Clone the Project

```bash
git clone https://github.com/yourusername/trigger-email.git
cd trigger-email
```

---

## Step 3: Configure Your Gmail Credentials

Edit your `app.js` code to replace:

- `user: "emailexample@gmail.com"` with your Gmail address
- `pass: "yourAppPassword"` with your generated App Password

**Example:**
```js
auth: {
  user: "your_email@gmail.com",
  pass: "your_app_password"
}
```

---

## Step 4: Install Dependencies

Install Express and Nodemailer:

```bash
npm install express nodemailer
```

---

## Step 5: Run the Project

Start your server with:

```bash
node app.js
```

You should see `Servidor Rodando!` in the console, and the email will be sent.

---

## Code Overview

Your main code file (`app.js`) should look like this:

```js
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.listen('3000', () => {
  console.log('Servidor Rodando!');
});

const transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: "your_email@gmail.com",      // <-- Your Gmail address
    pass: "your_app_password"          // <-- Your App Password
  }
});

transport.sendMail({
  from: 'Luiz Viana disparador',
  to: 'recipient@gmail.com',           // <-- Recipient email address
  subject: 'Enviando email com nodemailer',
  html: '<h1>Olá</h1> <p>Lorem ipsum solor domor amnet, lorem ipsum solor domor amnet...</p>',
});
```

> **Tip:** Change `to:` to any valid recipient email.

---

## Troubleshooting

- **Authentication error:** Check your email and App Password. Make sure 2-Step Verification is enabled.
- **Email not sent:** Check your internet connection and Gmail account security notifications. Sometimes, Google may block sign-in attempts.
- **Dependencies not found:** Re-run `npm install express nodemailer`.

---

## Security Note

- **Never share your App Password or credentials publicly.**
- Consider using environment variables or a `.env` file for sensitive data in production.
- For advanced security, use OAuth2 authentication with Gmail.

---

## Questions?

If you need help, [open an issue](https://github.com/yourusername/trigger-email/issues) or contact me.
