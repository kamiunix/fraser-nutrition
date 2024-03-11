import {mailOptions, transporter} from "../../config/transporter";

export default async function handler(req, res) {

    if (req.method === "POST") {
        const data = req.body;
        if (!data.email || !data.name || !data.phone || !data.message) {
            return res.status(400).json(
                {
                    status: "error",
                    message: "All fields are required",
                }
            );
        }

        try {
            await transporter.sendMail({
                from: process.env.EMAIL,
                to: process.env.BOOKING_EMAIL,
                subject: "New Message from " + data.name,
                text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`,
                html: `
                    <h1>New Message from ${data.name}</h1>
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Phone:</strong> ${data.phone}</p>
                    <p><strong>Message:</strong> ${data.message}</p>
                `
            });

            return res.status(200).json(
                {
                    status: "success",
                    message: "Email sent successfully",
                }
            );
        } catch (error) {
            return res.status(500).json(
                {
                    status: "error",
                    message: "Something went wrong sending the email",
                }
            );
        }

        return res.status(400).json({
            status: "error",
            message: "Bad Request"
        })
    }
}