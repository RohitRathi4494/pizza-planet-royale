import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { customerName, customerPhone, customerAddress, orderItems, grandTotal } = req.body;

  if (!customerName || !customerPhone || !orderItems) {
    return res.status(400).json({ error: 'Missing order details' });
  }

  // Create Gmail transporter using environment variables (set in Vercel dashboard)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px; border-radius: 10px;">
      <div style="background: #ff5a1f; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 24px;">🍕 New Order — Pizza Planet</h1>
      </div>
      <div style="background: white; padding: 25px; border-radius: 0 0 8px 8px;">
        <h2 style="color: #ff5a1f; border-bottom: 2px solid #ff5a1f; padding-bottom: 10px;">Customer Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #555; font-weight: bold;">Name:</td><td style="padding: 8px 0;">${customerName}</td></tr>
          <tr><td style="padding: 8px 0; color: #555; font-weight: bold;">Phone:</td><td style="padding: 8px 0;"><a href="tel:${customerPhone}" style="color: #ff5a1f;">${customerPhone}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #555; font-weight: bold;">Address:</td><td style="padding: 8px 0;">${customerAddress}</td></tr>
        </table>

        <h2 style="color: #ff5a1f; border-bottom: 2px solid #ff5a1f; padding-bottom: 10px; margin-top: 20px;">Order Items</h2>
        <pre style="background: #f5f5f5; padding: 15px; border-radius: 6px; font-size: 14px; line-height: 1.6;">${orderItems}</pre>

        <div style="background: #ff5a1f; color: white; padding: 15px; border-radius: 8px; text-align: center; margin-top: 20px;">
          <strong style="font-size: 22px;">Grand Total: ${grandTotal}</strong>
        </div>

        <p style="color: #777; font-size: 13px; margin-top: 20px; text-align: center;">
          📞 Please call or WhatsApp the customer on <strong>${customerPhone}</strong> to confirm the order and collect payment.
        </p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Pizza Planet Orders" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Owner receives at their own Gmail
      subject: `🍕 New Order from ${customerName} — ₹${grandTotal}`,
      html: htmlBody,
    });

    return res.status(200).json({ success: true, message: 'Order sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}
