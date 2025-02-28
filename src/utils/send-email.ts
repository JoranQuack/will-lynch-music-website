import { FormData } from "@/components/Contact";

export function sendEmail(data: FormData): Promise<void> {
  const apiEndpoint = "/api/email";

  return new Promise((resolve, reject) => {
    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
      })
      .catch((err) => {
        alert(err);
        reject(err);
      });
  });
}
