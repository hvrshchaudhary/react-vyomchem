const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

router.get("/apply-jobs", (req, res) => {
  res.send("not a valid method");
});

router.post("/apply-jobs", (req, res) => {
  console.log(req.fields);
  const {
    firstName,
    lastName,
    email,
    skillLevel,
    streetAddress,
    city,
    region,
    postalCode,
    resume,
  } = req.fields;

  console.log(process.env.EMAIL, process.env.PASSWORD);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    let mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "Application for job",
      html: `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        h2 {
            color: #333;
        }

        p {
            margin: 10px 0;
            color: #666;
        }

        .highlight {
            color: #007bff;
        }

        .footer {
            margin-top: 20px;
            text-align: center;
            color: #999;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Contact Information</h2>
        <p><strong>First Name:</strong> <span class="highlight">${firstName}</span></p>
        <p><strong>Last Name:</strong> <span class="highlight">${lastName}</span></p>
        <p><strong>Email:</strong> <span class="highlight">${email}</span></p>
        <p><strong>Skill Level:</strong> <span class="highlight">${skillLevel}</span></p>
        <p><strong>Street Address:</strong> <span class="highlight">${streetAddress}</span></p>
        <p><strong>City:</strong> <span class="highlight">${city}</span></p>
        <p><strong>Region:</strong> <span class="highlight">${region}</span></p>
        <p><strong>Postal Code:</strong> <span class="highlight">${postalCode}</span></p>
       
    </div>
    <div class="footer">
        <p>This is a cool HTML email template created by ChatGPT.</p>
    </div>
</body>
</html>
`,
      text: `Applicant name: ${firstName} ${lastName}<br>
      Skill level: ${skillLevel}<br>
      Address: ${streetAddress}<br>
      City: ${city}<br>
      Region: ${region}<br>
      Postal code: ${postalCode}<br>`,
    };

    if (req.files.resume) {
      mailOptions.attachments = [
        {
          filename: "resume.pdf",
          content: req.files.resume,
        },
      ];
    }
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error", error);
      } else {
        console.log("Email send", info.response);
        res.status(201).json({ status: 402, error });
      }
    });
  } catch (error) {
    console.log("catch error", error);
    res.status(201).json({ status: 402, error });
  }
});

module.exports = router;
