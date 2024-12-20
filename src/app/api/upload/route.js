import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';

// Helper function to upload file to Vercel Blob Storage
async function uploadFile(file) {
  // const buffer = await file.arrayBuffer();
//   const bytes = new Uint8Array(buffer);
//   const filePath = path.join(process.cwd(), 'public', 'uploads', file.name);
//   fs.writeFileSync(filePath, bytes);
//   return filePath;

try {
  const response = await put(file.name, file,{
    access: "public"
  })
  console.log(response.url)
  return (response.url); // Return the URL of the uploaded file
} catch (error) {
  console.log('Error uploading file:', error);
  throw new Error('Error uploading file');
}
  
}

// Named export for the POST method
export async function POST(request) {
  try {
    // Parse the request body to extract form data
    const formData = await request.formData();

    // Extract fields from formData
    const fields = {};
    const files = {};
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        files[key] = value;
      } else {
        fields[key] = value;
      }
    }
 // Define size limits for each file type
 const sizeLimits = {
  highmark: 400 * 1024, // 200 KB
  intermark: 400 * 1024, // 250 KB
};

// Validate file sizes
for (const key in files) {
  if (files[key].size > sizeLimits[key]) {
    return NextResponse.json({ error: `${key} exceeds ${sizeLimits[key] / 1024} KB limit.` }, { status: 400 });
  }
}

    // Upload files and get their URLs
    const highmarkUrl = await uploadFile(files['highmark']);
    const intermarkUrl = await uploadFile(files['intermark']);

    const {
      name,
      fname,
      mname,
      gender,
      email,
      phone,
      aadhar,
      qfn,
      address,
      state,
      country,
      course,
    } = fields;

    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS);
    console.log('EMAIL_TO:', process.env.EMAIL_TO);

    // Configure Nodemailer transporter with Hostinger SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com', // Hostinger SMTP server
      port: 465, // Port for TLS
      secure: true, // Use TLS
      auth: {
        user: process.env.EMAIL_USER, // Your Hostinger email
        pass: process.env.EMAIL_PASS // Your Hostinger email password
      }
    });

    // Define the email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address (your Hostinger email)
      to: process.env.EMAIL_TO, // Recipient address
      subject: 'Addmission Registration - from SkyFuture Academy.', // Subject line
      text: `
        Name: ${name}
        Father's Name: ${fname}
        Mother's Name: ${mname}
        Gender: ${gender}
        Email: ${email}
        Phone No. : ${phone}
        Aadahr No. : ${aadhar}
        Qualification: ${qfn}          
        Adderess: ${address}
        State: ${state}
        Country: ${country}
        Course: ${course}
      `,
      attachments: [
        {
          filename: files['highmark'].name,
          path: highmarkUrl,
        },
        {
          filename: files['intermark'].name,
          path: intermarkUrl,
        },
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    

    // Return a success response
    return NextResponse.json({ success: true, message: 'Application submitted successfully!' }, { status: 200 });
  } catch (error) {
    // Log the error details for debugging
    console.error('Error in API route:', error.message);
    console.error('Full error details:', error);

    // Return an error response
    return NextResponse.json({ error: 'Error sending email!, Invalid login.' }, { status: 500 });
  }
}
