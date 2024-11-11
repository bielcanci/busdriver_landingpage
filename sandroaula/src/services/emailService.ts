interface EmailRequest {
    toMail: string;
    content: string;
  }
  
  export const sendEmail = async (data: EmailRequest) => {
    try {
      const response = await fetch('/api/function-1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzMjU1NTk0MDU1OS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjMyNTU1OTQwNTU5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAxODAxMjMwMzAwMTIyNTA0NTk3IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJnY2FuY2kxQG1pbmhhLmZhZy5lZHUuYnIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6Il9FYjNSNHNuczVka3NyRHFvOXlLWXciLCJpYXQiOjE3MzEzNTc4MjEsImV4cCI6MTczMTM2MTQyMX0.iu-MguMwi5IV_qvQDbNQg-Y1pPS2McyBnEHFJtZ1osrpcOCciu0aq0Kw8GyFmZvV6paA8G88-1seiwb6pIW6hWQW6e3PKReu55Ab5hRMJSjkm9-nHWNMiGT71b5mtAedHeGDPF50K7CwViceUfDmcwIZUHYhXDWFNpxYkMznaWCk7xt8iOrThZBvoUvAGwJt5zdVvS0Fnxq54aiooboPQZqE1VBFeHRfYhd7RweQEI2HWfnSBTBS8vaiydBWnt9QroUU8GC8XZcQ_cpiaPAL4UIfLMVNhKaTXXI9M9N7kG_2wrKz92tY9F8gaaYmqvoRnTxgEsEvCXQsAGrYTBrjpw'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      return await response.text();
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }
  
  