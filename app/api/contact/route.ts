import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {

    const { name, email, phone, message } = await req.json();

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "willeke@nordicmovespain.com",
      subject: `Nieuw bericht van ${name}`,
      html: `
        <h2>Nieuw contactformulier</h2>

        <p><strong>Naam:</strong> ${name}</p>

        <p><strong>E-mail:</strong> ${email}</p>

        <p><strong>Telefoon:</strong> ${phone}</p>

        <p><strong>Bericht:</strong></p>

        <p>${message}</p>
      `,
    });

    console.log("RESEND RESULT:");
    console.log(result);

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error("RESEND ERROR:");
    console.error(error);

    return Response.json(
      {
        success: false,
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}
