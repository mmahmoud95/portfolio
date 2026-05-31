"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface FetchState {
  error: string | null;
  loading: boolean;
}

type FormData = Record<string, string>;

export function useFetch() {
  const [state, setState] = useState<FetchState>({ error: null, loading: false });
  const router = useRouter();

  const submitForm = async (data: FormData, url: string) => {
    setState({ error: null, loading: true });
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Submission failed");
      router.push("/thankyou");
    } catch {
      setState({ error: "Something went wrong. Please try again.", loading: false });
    }
  };

  return { ...state, submitForm };
}
