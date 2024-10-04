import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

interface FormData {
    firstName: string;
    lastName: string;
    question: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { firstName, lastName, question }: FormData = req.body;

        try {
            
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_RECIPIENT,
                subject: 'New Form Submission',
                text: `FirstName: ${firstName}\nLastName: ${lastName}\nQuestion: ${question}`,
            };

            
            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');

            
            res.status(200).json({ success: true });
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error in /api/mailform:', error.message);
                res.status(500).json({ error: `Failed to send email: ${error.message}` });
            } else {
                console.error('Unknown error in /api/mailform:', error);
                res.status(500).json({ error: 'Failed to send email: Unknown error' });
            }
        }
    } else {
        
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

export default handler;
