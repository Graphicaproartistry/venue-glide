import { useState } from "react";
import { FORM_ENDPOINT } from "../config/formEndpoint";

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

/**
 * Posts a form's data to Formspree (see src/config/formEndpoint.ts) so real
 * enquiries actually reach an inbox instead of only flipping local UI state.
 */
export const useFormspreeSubmit = (formName: string) => {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const submit = async (data: Record<string, string>) => {
    setStatus("submitting");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ formName, ...data }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return { status, submit };
};
