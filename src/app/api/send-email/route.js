import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, phoneNumber, address, message } = await request.json();

    // if (|| !message) {
    //   return new Response(JSON.stringify({ error: "Missing fields" }), {
    //     status: 400,
    //   });
    // }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Contact Us" <${process.env.EMAIL_ID}>`,
      to: "divy.dodeja@emotorad.com",
      subject: `TESTING`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Phone Number:</strong> ${phoneNumber}</p>
             <p><strong>Address:</strong> ${address}</p>
             <p>${message}</p>`,
    });

    return new Response(
      JSON.stringify({ ok: true, messageId: info.messageId }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
