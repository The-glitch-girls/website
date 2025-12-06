import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const email = formData.get("email")?.toString();
        const message = formData.get("message")?.toString();
        const website = formData.get("website")?.toString(); // honeypot

        // Anti bots
        if (website && website.trim() !== "") {
            return NextResponse.json({ error: "Bot detected" }, { status: 400 });
        }

        if (!email || !message) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: email,
            to: "theglitchgirlsperu@gmail.com",
            subject: "Nuevo mensaje desde The Glitch Girls Website",
            text: `${message}\n\nEnviado por: ${email}`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }
}