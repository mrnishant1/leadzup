import nodemailer from 'nodemailer';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_MAIL_API);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
    auth: {
        user: 'botnishant79@gmail.com',
        pass: process.env.EMAIL_APP_PASSWORD 
    }
});


async function sendMail(gmail:string) {
  
  //   const info = await transporter.sendMail({
  //   from: '"Reddit scipt" <luella32@ethereal.email>',
  //   to: "nishantkumaragra@gmail.com",
  //   subject: "New user signed In",
  //   text: `User signed IN with gmail ${gmail}`, // plain‑text body
  // });

  
  const welcome = await resend.emails.send({
  from: "Leadzup <support@leadzup.site>",
  to: gmail,
  subject: "Welcome to Leadzup — Here's What You Need to Know",
  html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222; max-width: 600px;">
    <h2 style="margin-bottom: 10px;">Welcome to Leadzup 🚀</h2>

    <p>Hi there,</p>

    <p>Your account (<strong>${gmail}</strong>) has been successfully created.</p>

    <p>
      Let’s talk about something that every Reddit marketer eventually discovers…
      <br><strong>The soft-mention technique converts up to 3× better.</strong>
    </p>

    <p>
      One of the most common questions we hear is:
      <br><em>“How do I track ROI from Reddit comments if I can’t use direct links?”</em>
    </p>

    <p>
      Here’s the truth: dropping direct product links on Reddit is basically asking for trouble.
      Reddit’s spam filters are ruthless. When you post direct links, you’re risking:
    </p>

    <ul>
      <li>🚫 Instant removal by automated filters</li>
      <li>👻 Shadowbans (your comments become invisible)</li>
      <li>🔒 Subreddit bans</li>
      <li>⚠️ Account-wide spam flags</li>
    </ul>

    <h3 style="margin-top: 20px;">So… what’s the alternative?</h3>

    <p>
      This is where Leadzup steps in.  
      Our system works <strong>24/7</strong> to track Reddit posts where people are already searching for:
    </p>

    <ul>
      <li>The exact product you're selling</li>
      <li>The service you offer</li>
      <li>The job role you’re trying to land</li>
    </ul>

    <p>
      Instead of posting risky direct links, you get <strong>warm, intent-based posts</strong> delivered to you so you can respond naturally — without triggering Reddit’s anti-spam systems.
    </p>

    <p style="margin-top: 25px;">
      Welcome aboard. Let’s make your Reddit outreach actually work.
    </p>

    <p style="margin-top: 15px;">
      — The Leadzup Team
    </p>
  </div>
  `
});



}

export default sendMail;