import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type AssessmentRequest = {
  name: string;
  email: string;
  phone?: string;
  answers: Record<string, unknown>;
};

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatAnswer(value: unknown): string {
  if (value === null || value === undefined || value === "") {
    return "Niet ingevuld";
  }

  if (Array.isArray(value)) {
    return value.length > 0
      ? value.map((item) => String(item)).join(", ")
      : "Niet ingevuld";
  }

  if (typeof value === "object") {
    return JSON.stringify(value, null, 2);
  }

  if (typeof value === "boolean") {
    return value ? "Ja" : "Nee";
  }

  return String(value);
}

function formatQuestionName(question: string): string {
  return question
    .replaceAll("_", " ")
    .replaceAll("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AssessmentRequest;

    if (!body.name?.trim()) {
      return NextResponse.json(
        { error: "Naam ontbreekt." },
        { status: 400 }
      );
    }

    if (!body.email?.trim()) {
      return NextResponse.json(
        { error: "E-mailadres ontbreekt." },
        { status: 400 }
      );
    }

    if (
      !body.answers ||
      typeof body.answers !== "object" ||
      Array.isArray(body.answers)
    ) {
      return NextResponse.json(
        { error: "De assessment-antwoorden ontbreken." },
        { status: 400 }
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL;

    if (!contactEmail) {
      console.error("CONTACT_EMAIL ontbreekt in de environment variables.");

      return NextResponse.json(
        { error: "Het ontvangstadres voor de e-mail is niet ingesteld." },
        { status: 500 }
      );
    }

    const answersHtml = Object.entries(body.answers)
      .map(([question, answer]) => {
        const readableQuestion = formatQuestionName(question);
        const readableAnswer = formatAnswer(answer);

        return `
          <tr>
            <td
              style="
                width:40%;
                padding:14px;
                border-bottom:1px solid #e5e5e5;
                vertical-align:top;
                font-weight:600;
                color:#1e2a3a;
              "
            >
              ${escapeHtml(readableQuestion)}
            </td>

            <td
              style="
                padding:14px;
                border-bottom:1px solid #e5e5e5;
                vertical-align:top;
                color:#444444;
              "
            >
              ${escapeHtml(readableAnswer).replaceAll("\n", "<br>")}
            </td>
          </tr>
        `;
      })
      .join("");

    const { data, error } = await resend.emails.send({
      from: "Nordic Move Spain <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: body.email,
      subject: `Nieuw Relocation Assessment van ${body.name}`,
      html: `
        <!DOCTYPE html>
        <html lang="nl">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Nieuw Relocation Assessment</title>
          </head>

          <body
            style="
              margin:0;
              padding:0;
              background:#f6f1ea;
              font-family:Arial,Helvetica,sans-serif;
              color:#222222;
            "
          >
            <div
              style="
                max-width:850px;
                margin:0 auto;
                padding:32px 16px;
              "
            >
              <div
                style="
                  background:#1e2a3a;
                  border-radius:18px 18px 0 0;
                  padding:30px;
                  color:#ffffff;
                "
              >
                <p
                  style="
                    margin:0 0 10px;
                    color:#c8a063;
                    font-size:12px;
                    letter-spacing:2px;
                    text-transform:uppercase;
                  "
                >
                  Nordic Move Spain
                </p>

                <h1
                  style="
                    margin:0;
                    font-size:30px;
                    line-height:1.2;
                  "
                >
                  Nieuw Relocation Assessment
                </h1>
              </div>

              <div
                style="
                  background:#ffffff;
                  padding:30px;
                "
              >
                <h2
                  style="
                    margin-top:0;
                    color:#1e2a3a;
                    font-size:22px;
                  "
                >
                  Contactgegevens
                </h2>

                <table
                  style="
                    width:100%;
                    border-collapse:collapse;
                    margin-bottom:32px;
                  "
                >
                  <tbody>
                    <tr>
                      <td
                        style="
                          width:160px;
                          padding:8px 0;
                          font-weight:600;
                        "
                      >
                        Naam
                      </td>
                      <td style="padding:8px 0;">
                        ${escapeHtml(body.name)}
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          width:160px;
                          padding:8px 0;
                          font-weight:600;
                        "
                      >
                        E-mail
                      </td>
                      <td style="padding:8px 0;">
                        <a
                          href="mailto:${escapeHtml(body.email)}"
                          style="color:#1e2a3a;"
                        >
                          ${escapeHtml(body.email)}
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td
                        style="
                          width:160px;
                          padding:8px 0;
                          font-weight:600;
                        "
                      >
                        Telefoon
                      </td>
                      <td style="padding:8px 0;">
                        ${escapeHtml(body.phone || "Niet ingevuld")}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h2
                  style="
                    color:#1e2a3a;
                    font-size:22px;
                    margin-bottom:16px;
                  "
                >
                  Antwoorden op het assessment
                </h2>

                <table
                  style="
                    width:100%;
                    border-collapse:collapse;
                    border:1px solid #e5e5e5;
                  "
                >
                  <tbody>
                    ${answersHtml}
                  </tbody>
                </table>
              </div>

              <div
                style="
                  background:#e9dfd2;
                  border-radius:0 0 18px 18px;
                  padding:20px 30px;
                  color:#555555;
                  font-size:13px;
                  line-height:1.5;
                "
              >
                Deze inzending is verstuurd via het Relocation Assessment
                van Nordic Move Spain. De volledige gegevens zijn daarnaast
                opgeslagen in Supabase.
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "De assessment-e-mail kon niet worden verstuurd.",
          details: error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      emailId: data?.id,
    });
  } catch (error) {
    console.error("Relocation assessment email error:", error);

    return NextResponse.json(
      {
        error: "Er is iets misgegaan bij het verwerken van de e-mail.",
      },
      { status: 500 }
    );
  }
}