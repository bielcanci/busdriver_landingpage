interface EmailRequest {
  toMail: string;
  content: string;
  userMessage?: string;
}

export const sendEmail = async (data: EmailRequest) => {
  try {
    const response = await fetch("/api/function-1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAxODAxMjMwMzAwMTIyNTA0NTk3IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJnY2FuY2kxQG1pbmhhLmZhZy5lZHUuYnIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IjBTb2FqTUFhT2hrNW9oYXRxX2NGOFEiLCJuYmYiOjE3MzE5MzQwOTgsImlhdCI6MTczMTkzNDM5OCwiZXhwIjoxNzMxOTM3OTk4LCJqdGkiOiIzNWJiN2E2ZjVkNzcwNDlkNzA2ODg3OWNjZGQ0OGZmNTcxYmMzZTlhIn0.BAWvsFyXUIZTogpUwSU1B7-pWQaOQDodgQOWOf8Vf9BaYAzuSKo5B0oPKmMOGQaluQL41C0vg9YqlTa9uLi2h2YCiS-p80bhySAXATleNlcpFOpTylMbYeaPcFHFTVSv92cvykr7JDaUWwOiKrcuQ__A09KPDuptPvjqZnGZuMmFNreanlzH0Qmb_Qj_0vkuE0KZI7BDadVO09RbIY1LQ3xiXIRfDh_zHKrSclkAOFB6ge05NVvQoKWInnDYqEagZQSLinuXq6EsGAKZBZ-7MgQzo6WG5s50fMEspGqZi2sSRy6CLJFxCGuGhrIHuls1QZSDexo6Ei4B1fxPJnl8Ag",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.text();
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
