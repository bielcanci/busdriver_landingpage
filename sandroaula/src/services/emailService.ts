interface EmailRequest {
  toMail: string;
  content: string;
}

export const sendEmail = async (data: EmailRequest) => {
  try {
    const response = await fetch("/api/function-1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAxODAxMjMwMzAwMTIyNTA0NTk3IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJnY2FuY2kxQG1pbmhhLmZhZy5lZHUuYnIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6Ik15NmFGbm9vU2hEbUh3TnB1cVFXOEEiLCJuYmYiOjE3MzEzNjY0MDIsImlhdCI6MTczMTM2NjcwMiwiZXhwIjoxNzMxMzcwMzAyLCJqdGkiOiIyNTU1M2U1NDYxY2NmYTc0MWIzOTI0NzUwMWViOTI1ZDg5NjlhYWQ1In0.FQxhV_5pnm-EWksCNg82WSWJfWVwo2f1z1cplfPTnkFgoAqWkvnWnMv4yu_dEPS4T3xCy7KLBIPgVQjIHSZIRtBG6z4o9kd5UJrPxATtAR-WQOL7OFxl-tRez8YPq7iq56fD8-9z5X9Oo2BJ5TtZvN5JRXF_rtIILdDr4Jvl8GbOW-834pD4CxE-Tqp1VuP1Ou-WZmSDoAvfRCTTb1Qn_1vZURG7dat0fVsRLLChRc4FFv28UwhjmHjN0_thTc9knEE8lsMeTRBcoH01Awep95zkZoCs0pvAkjgb_zKnq_6F91lvVwAKMFFoT_XE7NAW5Sgt5RGblr55NdKNhF4kQA",
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
