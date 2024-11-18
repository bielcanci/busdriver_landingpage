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
          "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAxODAxMjMwMzAwMTIyNTA0NTk3IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJnY2FuY2kxQG1pbmhhLmZhZy5lZHUuYnIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6Imk0bTFPSzBUakpnZ0Y4RXlCbTFldlEiLCJuYmYiOjE3MzE5MzgwOTAsImlhdCI6MTczMTkzODM5MCwiZXhwIjoxNzMxOTQxOTkwLCJqdGkiOiJkNmUwODZmMjJlN2Y1NzIwOWZiZDY4ZDYzMzE3NjNjMzlkZmUwMjA2In0.pJdQ54oZAqUmGvGER-VduZsj0lmDhjMLs41XVC0uFCk1yZhhnX2fXVo62CNDmLkdA5wgyyraFm_E4OoEDs2QSRGH7_B4EbLQ0e0YLkiA9hcNzqQNp0_UWKWVl8bJQ4gfF2idSNlyO0IvwhEJM98x4m_XWqYL2ECOnDCnv2AJ-GzGS6xtcQW1OANfbPZ8HjUTNY0_Cekae6mDmDIppS9aMNFA-bZjKSjkyc9D-PdokwogIb_2hj2jnkL_gqJ-l2oy1YWZWxsRHgtpk79_Rr78dxKN-IINYxM_9jYJLx5PAts8Abfl1LG5nJJ5YW59F3NrkEdlwyRFDSv6X2_HuOMmxg",
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
