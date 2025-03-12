import { FormData } from "@/components/Contact";

export function sendEmail(data: FormData): Promise<void> {
  const apiEndpoint = "/api/email";

  return new Promise((resolve, reject) => {
    fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          throw new Error(response.error);
        }
        resolve();
      })
      .catch((err) => {
        alert(err.message || "Failed to send email");
        reject(err);
      });
  });
}
